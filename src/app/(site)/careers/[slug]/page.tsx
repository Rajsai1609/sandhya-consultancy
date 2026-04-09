import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { getJobBySlug, getAllJobs } from "@/lib/data";
import JobApplicationForm from "@/components/forms/JobApplicationForm";
import { FaMapMarkerAlt, FaBriefcase, FaClock, FaChevronRight } from "react-icons/fa";

export async function generateStaticParams() {
  try {
    const jobs = await getAllJobs("open");
    return jobs.map((j) => ({ slug: j.slug }));
  } catch {
    return [];
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const job = await getJobBySlug(slug);
  if (!job) return {};
  return {
    title: `${job.title} | Careers | ${siteConfig.name}`,
    description: job.description?.slice(0, 160) ?? `Apply for the ${job.title} position at ${siteConfig.name}.`,
    openGraph: {
      title: `${job.title} | Careers | ${siteConfig.name}`,
      description: job.description?.slice(0, 160) ?? `Apply for the ${job.title} position at ${siteConfig.name}.`,
      url: `${siteConfig.url}/careers/${slug}`,
      type: "website",
    },
  };
}

export default async function JobDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const job = await getJobBySlug(slug);
  if (!job) notFound();

  const requirements = job.requirements
    ? job.requirements.split("\n").filter((line) => line.trim())
    : [];

  return (
    <div
      className="min-h-screen py-12"
      style={{ backgroundColor: "var(--brand-gray)" }}
    >
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-1.5 text-sm mb-8" style={{ color: "var(--brand-muted)" }}>
          <Link href="/" className="hover:underline">Home</Link>
          <FaChevronRight size={10} />
          <Link href="/careers" className="hover:underline">Careers</Link>
          <FaChevronRight size={10} />
          <span style={{ color: "var(--brand-navy)" }}>{job.title}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-8 items-start">
          {/* Left: job details */}
          <div>
            <div className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm mb-6">
              <h1
                className="text-3xl font-bold mb-4"
                style={{ color: "var(--brand-navy)" }}
              >
                {job.title}
              </h1>
              <div className="flex flex-wrap gap-3 mb-6">
                {job.department && (
                  <span className="flex items-center gap-1.5 text-xs font-medium rounded-full px-3 py-1 bg-blue-50 text-blue-700">
                    <FaBriefcase size={10} />
                    {job.department}
                  </span>
                )}
                {job.location && (
                  <span className="flex items-center gap-1.5 text-xs font-medium rounded-full px-3 py-1 bg-gray-100 text-gray-600">
                    <FaMapMarkerAlt size={10} />
                    {job.location}
                  </span>
                )}
                {job.employmentType && (
                  <span className="flex items-center gap-1.5 text-xs font-medium rounded-full px-3 py-1 bg-green-50 text-green-700">
                    <FaClock size={10} />
                    {job.employmentType}
                  </span>
                )}
              </div>

              {job.description && (
                <div className="mb-8">
                  <h2
                    className="text-lg font-bold mb-3"
                    style={{ color: "var(--brand-navy)" }}
                  >
                    About the Role
                  </h2>
                  <p className="text-sm leading-relaxed whitespace-pre-line text-gray-700">
                    {job.description}
                  </p>
                </div>
              )}

              {requirements.length > 0 && (
                <div>
                  <h2
                    className="text-lg font-bold mb-3"
                    style={{ color: "var(--brand-navy)" }}
                  >
                    Requirements
                  </h2>
                  <ul className="flex flex-col gap-2">
                    {requirements.map((req, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                        <span
                          className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
                          style={{ backgroundColor: "var(--brand-blue)" }}
                        />
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* Right: application form */}
          <div className="lg:sticky lg:top-8">
            <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
              <JobApplicationForm jobId={job.id} jobTitle={job.title} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
