export const dynamic = "force-dynamic";

import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { getAllJobs } from "@/lib/data";
import { FaBriefcase, FaMapMarkerAlt, FaClock, FaPassport } from "react-icons/fa";

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

      {/* AI Products We're Building */}
      <section className="py-20 px-4" style={{ backgroundColor: "white" }}>
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-12">
            <h2
              className="text-3xl md:text-4xl font-bold mb-3"
              style={{ color: "var(--brand-navy)" }}
            >
              AI Products We&apos;re Building
            </h2>
            <p
              className="text-base max-w-2xl mx-auto"
              style={{ color: "var(--brand-muted)" }}
            >
              Join the team behind these next-generation AI solutions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* AI Catering System */}
            <div className="flex flex-col h-full bg-white rounded-2xl border border-gray-100 p-8 shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start justify-between mb-3">
                <h3
                  className="text-lg font-bold leading-snug"
                  style={{ color: "var(--brand-navy)" }}
                >
                  AI Catering System
                </h3>
                <span className="ml-3 flex-shrink-0 inline-block rounded-full px-3 py-1 text-xs font-medium bg-blue-50 text-blue-600">
                  In Development
                </span>
              </div>
              <p className="text-sm mb-5" style={{ color: "var(--brand-muted)" }}>
                Automated catering order intake and fulfillment for restaurants.
              </p>
              <ul className="flex flex-col gap-2.5 text-sm flex-1" style={{ color: "var(--brand-muted)" }}>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "var(--brand-blue)" }} />
                  Online catering order form with menu, pricing, and delivery slots
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "var(--brand-blue)" }} />
                  Auto-routes orders to kitchen + ops via email and SMS
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "var(--brand-blue)" }} />
                  AI-assisted order confirmation and customer follow-up
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "var(--brand-blue)" }} />
                  Centralized dashboard for catering pipeline and revenue
                </li>
              </ul>
              <p className="mt-6 text-xs font-medium" style={{ color: "var(--brand-blue)" }}>
                Target: Independent restaurants and small restaurant groups
              </p>
            </div>

            {/* Property Intelligence */}
            <div className="flex flex-col h-full bg-white rounded-2xl border border-gray-100 p-8 shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start justify-between mb-3">
                <h3
                  className="text-lg font-bold leading-snug"
                  style={{ color: "var(--brand-navy)" }}
                >
                  Property Intelligence
                </h3>
                <span className="ml-3 flex-shrink-0 inline-block rounded-full px-3 py-1 text-xs font-medium bg-blue-50 text-blue-600">
                  In Development
                </span>
              </div>
              <p className="text-sm mb-5" style={{ color: "var(--brand-muted)" }}>
                Multi-agent property research and valuation for buyers, investors, and real estate agents.
              </p>
              <ul className="flex flex-col gap-2.5 text-sm flex-1" style={{ color: "var(--brand-muted)" }}>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "var(--brand-blue)" }} />
                  Live listing search across Zillow, Realtor.com, Trulia, and Homes.com
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "var(--brand-blue)" }} />
                  Neighbourhood market analysis and buyer/seller market classification
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "var(--brand-blue)" }} />
                  AI-generated investment valuations with fair/over/under pricing
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "var(--brand-blue)" }} />
                  One actionable recommendation per property
                </li>
              </ul>
              <p className="mt-6 text-xs font-medium" style={{ color: "var(--brand-blue)" }}>
                Target: Homebuyers, real estate investors, and agents
              </p>
            </div>

            {/* Voice Receptionist */}
            <div className="flex flex-col h-full bg-white rounded-2xl border border-gray-100 p-8 shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start justify-between mb-3">
                <h3
                  className="text-lg font-bold leading-snug"
                  style={{ color: "var(--brand-navy)" }}
                >
                  Voice Receptionist
                </h3>
                <span className="ml-3 flex-shrink-0 inline-block rounded-full px-3 py-1 text-xs font-medium bg-blue-50 text-blue-600">
                  In Development
                </span>
              </div>
              <p className="text-sm mb-5" style={{ color: "var(--brand-muted)" }}>
                24/7 AI voice receptionist that answers calls, books appointments, and captures leads for small and mid-sized businesses.
              </p>
              <ul className="flex flex-col gap-2.5 text-sm flex-1" style={{ color: "var(--brand-muted)" }}>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "var(--brand-blue)" }} />
                  Natural-sounding voice answering on a dedicated business line
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "var(--brand-blue)" }} />
                  Appointment booking integrated with Google Calendar
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "var(--brand-blue)" }} />
                  Lead capture and instant SMS handoff to the business owner
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "var(--brand-blue)" }} />
                  Configurable per industry (clinics, salons, trades, agencies)
                </li>
              </ul>
              <p className="mt-6 text-xs font-medium" style={{ color: "var(--brand-blue)" }}>
                Target: SMBs — clinics, salons, home services, agencies
              </p>
            </div>
          </div>
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
                    <span className="flex items-center gap-1.5 text-xs font-medium rounded-full px-3 py-1 bg-amber-50 text-amber-700">
                      <FaPassport size={10} />
                      Visa sponsorship available
                    </span>
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
