"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";

function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function extractJobFields(formData: FormData) {
  return {
    title:          String(formData.get("title") ?? "").trim(),
    department:     String(formData.get("department") ?? "").trim(),
    location:       String(formData.get("location") ?? "").trim(),
    employmentType: String(formData.get("employmentType") ?? "Full-time"),
    status:         String(formData.get("status") ?? "draft"),
    description:    String(formData.get("description") ?? "").trim(),
    requirements:   String(formData.get("requirements") ?? "").trim(),
  };
}

export async function createJob(formData: FormData) {
  const fields = extractJobFields(formData);
  const slug = generateSlug(fields.title);

  await prisma.job.create({
    data: { ...fields, slug },
  });

  redirect("/admin/jobs");
}

export async function updateJob(id: string, formData: FormData) {
  const fields = extractJobFields(formData);

  await prisma.job.update({
    where: { id },
    data: fields,
  });

  redirect("/admin/jobs");
}

export async function deleteJob(id: string) {
  await prisma.job.delete({ where: { id } });
  revalidatePath("/admin/jobs");
}

export async function updateApplicationStage(id: string, formData: FormData) {
  const stage = String(formData.get("stage") ?? "").trim();
  await prisma.jobApplication.update({
    where: { id },
    data: { stage },
  });
  revalidatePath("/admin/applications");
}

export async function addApplicationNote(id: string, formData: FormData) {
  const note = String(formData.get("note") ?? "").trim();
  await prisma.jobApplication.update({
    where: { id },
    data: { notes: note },
  });
  revalidatePath("/admin/applications");
}
