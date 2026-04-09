import { prisma } from "./prisma";
import type { ContactFormData, JobApplicationData, ResumeSubmissionData } from "./validators";

// --- Services ---

export async function getAllServices() {
  return prisma.service.findMany({
    where: { isActive: true },
    orderBy: { order: "asc" },
  });
}

export async function getServiceBySlug(slug: string) {
  return prisma.service.findUnique({
    where: { slug },
  });
}

// --- Industries ---

export async function getAllIndustries() {
  return prisma.industry.findMany({
    where: { isActive: true },
    orderBy: { order: "asc" },
  });
}

// --- Jobs ---

export async function getAllJobs(status = "open") {
  return prisma.job.findMany({
    where: { status },
    orderBy: { createdAt: "desc" },
  });
}

export async function getJobBySlug(slug: string) {
  return prisma.job.findUnique({
    where: { slug },
  });
}

// --- Applications ---

export async function getAllApplications() {
  return prisma.jobApplication.findMany({
    include: { job: true },
    orderBy: { createdAt: "desc" },
  });
}

export async function getDashboardStats() {
  const sevenDaysAgo = new Date();
  sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

  const [totalJobs, openJobs, totalApplications, recentApplications] =
    await Promise.all([
      prisma.job.count(),
      prisma.job.count({ where: { status: "open" } }),
      prisma.jobApplication.count(),
      prisma.jobApplication.count({
        where: { createdAt: { gte: sevenDaysAgo } },
      }),
    ]);

  return { totalJobs, openJobs, totalApplications, recentApplications };
}

export async function getRecentApplications(limit = 10) {
  return prisma.jobApplication.findMany({
    take: limit,
    include: { job: { select: { title: true } } },
    orderBy: { createdAt: "desc" },
  });
}

export async function getApplicationById(id: string) {
  return prisma.jobApplication.findUnique({
    where: { id },
    include: { job: true },
  });
}

// --- Form Submissions ---

export async function createContactSubmission(data: ContactFormData) {
  return prisma.contactSubmission.create({ data });
}

export async function createJobApplication(
  data: JobApplicationData & { jobId: string }
) {
  return prisma.jobApplication.create({ data });
}

export async function createResumeSubmission(data: ResumeSubmissionData) {
  return prisma.resumeSubmission.create({ data });
}
