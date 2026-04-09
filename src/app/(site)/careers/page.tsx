import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { getAllJobs } from "@/lib/data";
import { FaBriefcase, FaMapMarkerAlt, FaClock } from "react-icons/fa";

export const metadata: Metadata = {
  title: `Careers | ${siteConfig.name}`,
  description:
    "Explore open positions at Sandhya IT Consulting. Join our team and build the future of enterprise technology.",
  openGraph: {
    title: `Careers | ${siteConfig.name}`,
    description:
      "Explore open positions at Sandhya IT Consulting. Join our team and build the future of enterprise technology.",
    url: `${siteConfig.url}/careers`,
    type: "website",
  },
};

export default async function CareersPage() {
  const jobs = await getAllJobs("open");

  return (
    <>
      {/* Hero */}
      <section
        className="py-24 text-white text-center"
        style={{ backgroundColor: "var(--brand-navy)" }}
      >
        <div className="container mx-auto px-6 max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Join Our Team
          </h1>
          <p className="text-lg opacity-80">
            We&apos;re always looking for talented people who are passionate
            about technology and making a difference.
          </p>
        </div>
      </section>

      {/* Job listings */}
      <section className="py-20" style={{ backgroundColor: "var(--brand-gray)" }}>
        <div className="container mx-auto px-6 max-w-4xl">
          {jobs.length === 0 ? (
            <div className="text-center py-16">
              <p
                className="text-lg font-medium mb-2"
                style={{ color: "var(--brand-navy)" }}
              >
                No open positions right now.
              </p>
              <p className="text-sm" style={{ color: "var(--brand-muted)" }}>
                Check back soon or{" "}
                <Link
                  href="/staffing"
                  className="underline"
                  style={{ color: "var(--brand-blue)" }}
                >
                  submit your resume
                </Link>{" "}
                to be considered for future roles.
              </p>
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              {jobs.map((job) => (
                <Link
                  key={job.id}
                  href={`/careers/${job.slug}`}
                  className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow group"
                >
                  <h2
                    className="text-lg font-bold mb-3 group-hover:underline"
                    style={{ color: "var(--brand-navy)" }}
                  >
                    {job.title}
                  </h2>
                  <div className="flex flex-wrap gap-3">
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
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
