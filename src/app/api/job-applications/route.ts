import { NextRequest, NextResponse } from "next/server";
import { writeFile, mkdir } from "fs/promises";
import path from "path";
import { jobApplicationSchema } from "@/lib/validators";
import { createJobApplication } from "@/lib/data";
import { sendJobApplicationEmail } from "@/lib/email";
import { prisma } from "@/lib/prisma";

const UPLOAD_DIR = path.join(process.cwd(), "public", "uploads");
const MAX_FILE_SIZE = 5 * 1024 * 1024;
const ACCEPTED_TYPES = new Set([
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
]);

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();

    const raw = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone") || undefined,
      coverLetter: formData.get("coverLetter") || undefined,
    };

    const parsed = jobApplicationSchema.safeParse(raw);
    if (!parsed.success) {
      return NextResponse.json(
        { success: false, error: parsed.error.issues[0]?.message ?? "Invalid input." },
        { status: 422 }
      );
    }

    const jobId = String(formData.get("jobId") ?? "").trim();
    if (!jobId) {
      return NextResponse.json(
        { success: false, error: "Job ID is required." },
        { status: 422 }
      );
    }

    // Handle file upload
    let resumeUrl: string | undefined;
    const file = formData.get("file");

    if (file instanceof File && file.size > 0) {
      if (!ACCEPTED_TYPES.has(file.type)) {
        return NextResponse.json(
          { success: false, error: "Only PDF, DOC, and DOCX files are accepted." },
          { status: 422 }
        );
      }
      if (file.size > MAX_FILE_SIZE) {
        return NextResponse.json(
          { success: false, error: "File must be smaller than 5 MB." },
          { status: 422 }
        );
      }

      await mkdir(UPLOAD_DIR, { recursive: true });

      const ext = path.extname(file.name) || ".pdf";
      const safeName = `${Date.now()}-${Math.random().toString(36).slice(2)}${ext}`;
      const filePath = path.join(UPLOAD_DIR, safeName);

      const buffer = Buffer.from(await file.arrayBuffer());
      await writeFile(filePath, buffer);

      resumeUrl = `/uploads/${safeName}`;
    }

    const applicationData = { ...parsed.data, jobId, resumeUrl };
    await createJobApplication(applicationData);

    try {
      const job = await prisma.job.findUnique({ where: { id: jobId }, select: { title: true } });
      if (job) {
        await sendJobApplicationEmail(parsed.data, job.title);
      }
    } catch (emailErr) {
      console.error("[job-applications] email notification failed", emailErr);
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[job-applications] db save failed", err);
    return NextResponse.json(
      {
        success: false,
        error:
          "We couldn't save your application right now. Please try again or email us directly at info@sandhyaitconsulting.com.",
      },
      { status: 500 }
    );
  }
}
