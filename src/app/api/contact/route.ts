import { NextRequest, NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validators";
import { createContactSubmission } from "@/lib/data";
import { sendContactEmail } from "@/lib/email";

export async function POST(req: NextRequest) {
  try {
    const body: unknown = await req.json();
    const parsed = contactFormSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { success: false, error: parsed.error.issues[0]?.message ?? "Invalid input." },
        { status: 422 }
      );
    }

    await createContactSubmission(parsed.data);

    try {
      await sendContactEmail(parsed.data);
    } catch (emailErr) {
      console.error("[contact] email notification failed", emailErr);
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[contact] db save failed", err);
    return NextResponse.json(
      {
        success: false,
        error:
          "We couldn't save your message right now. Please try again or email us directly at info@sandhyaitconsulting.com.",
      },
      { status: 500 }
    );
  }
}
