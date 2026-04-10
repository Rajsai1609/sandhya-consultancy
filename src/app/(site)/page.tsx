export const dynamic = "force-dynamic";

import type { Metadata } from "next";
import Link from "next/link";
import { FaBriefcase, FaMapMarkerAlt, FaClock, FaCheck } from "react-icons/fa";
import { getAllServices, getAllJobs } from "@/lib/data";
import Reveal from "@/components/animations/Reveal";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: `${siteConfig.name} | ${siteConfig.tagline}`,
  description: siteConfig.description,
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    type: "website",
  },
};

const categoryColors: Record<string, { bg: string; text: string }> = {
  Students:   { bg: "#EFF6FF", text: "#1D4ED8" },
  Business:   { bg: "#F5F3FF", text: "#6D28D9" },
  Staffing:   { bg: "#F0FDF4", text: "#15803D" },
  Engineering: { bg: "#F0FDFA", text: "#0F766E" },
  Consulting: { bg: "#FFFBEB", text: "#B45309" },
};

function getCategoryStyle(category: string) {
  return categoryColors[category] ?? { bg: "#F3F4F6", text: "#374151" };
}

const stats = [
  { value: "500+", label: "Students Placed" },
  { value: "50+",  label: "Business Clients" },
  { value: "6",    label: "AI-Powered Services" },
  { value: "98%",  label: "Satisfaction" },
];

const academyTracks = [
  "Agentic AI",
  "Multi-Agent Systems",
  "Cloud Computing",
  "Data Engineering",
];

const studentFeatures = [
  "Resume AI Agent",
  "Job Scraping & Matching",
  "Visa-Sponsored Roles Available",
  "Career Coaching",
];

const businessFeatures = [
  "Multi-Agent Systems",
  "Workflow Automation",
  "IT Staffing",
  "AI Strategy",
];

export default async function HomePage() {
  const [services, jobs] = await Promise.all([
    getAllServices(),
    getAllJobs("open"),
  ]);

  const openJobs = jobs.slice(0, 3);

  return (
    <>
      {/* ── SECTION 1: HERO ── */}
      <section
        className="relative flex items-center justify-center min-h-[600px] px-4 py-24 text-center"
        style={{
          background:
            "linear-gradient(135deg, var(--brand-navy) 0%, #0F2D5E 55%, #1A3A72 100%)",
        }}
      >
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 70% 30%, var(--brand-blue) 0%, transparent 55%)",
          }}
        />
        <div className="relative max-w-3xl mx-auto">
          <Reveal>
            <p
              className="text-sm font-semibold uppercase tracking-widest mb-5"
              style={{ color: "var(--brand-blue-light)" }}
            >
              AI-Powered · Staffing · Consulting · Career Automation
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              AI-Powered Staffing,{" "}
              <br className="hidden sm:block" />
              Consulting &amp; Career Automation
            </h1>
            <p className="text-lg sm:text-xl leading-relaxed mb-10" style={{ color: "#94A3B8" }}>
              We help students land jobs with AI — and help businesses scale
              with intelligent automation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/academy"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full text-sm font-semibold text-white transition-all duration-200 hover:opacity-90 hover:shadow-lg"
                style={{ backgroundColor: "var(--brand-blue)" }}
              >
                I&apos;m a Student
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full text-sm font-semibold text-white border border-white/40 transition-all duration-200 hover:bg-white/10"
              >
                I&apos;m a Business
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── SECTION 2: TWO AUDIENCE SPLIT ── */}
      <section className="py-20 px-4" style={{ backgroundColor: "var(--brand-gray)" }}>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Students card */}
          <Reveal direction="left">
            <div className="flex flex-col h-full bg-white rounded-2xl border border-blue-100 p-8 shadow-sm hover:shadow-md transition-shadow">
              <span className="self-start text-xs font-semibold px-3 py-1 rounded-full mb-5 bg-blue-50 text-blue-700">
                For Students
              </span>
              <h2
                className="text-2xl font-bold mb-3"
                style={{ color: "var(--brand-navy)" }}
              >
                Launch Your Tech Career
              </h2>
              <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--brand-muted)" }}>
                AI-powered resume tailoring, job search automation, interview
                prep, and career intelligence. Land offers 3x faster.
              </p>
              <ul className="flex flex-col gap-2 mb-8">
                {studentFeatures.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm" style={{ color: "var(--brand-navy)" }}>
                    <FaCheck size={12} className="text-blue-600 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href="/academy"
                className="mt-auto inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-semibold text-white transition-all duration-200 hover:opacity-90"
                style={{ backgroundColor: "var(--brand-blue)" }}
              >
                Explore Career Programs
              </Link>
            </div>
          </Reveal>

          {/* Business card */}
          <Reveal direction="right">
            <div className="flex flex-col h-full bg-white rounded-2xl border border-purple-100 p-8 shadow-sm hover:shadow-md transition-shadow">
              <span className="self-start text-xs font-semibold px-3 py-1 rounded-full mb-5 bg-purple-50 text-purple-700">
                For Businesses
              </span>
              <h2
                className="text-2xl font-bold mb-3"
                style={{ color: "var(--brand-navy)" }}
              >
                Automate &amp; Scale Your Business
              </h2>
              <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--brand-muted)" }}>
                Custom AI agents, workflow automation, and multi-agent systems
                that work 24/7 so your team doesn&apos;t have to.
              </p>
              <ul className="flex flex-col gap-2 mb-8">
                {businessFeatures.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm" style={{ color: "var(--brand-navy)" }}>
                    <FaCheck size={12} className="text-purple-600 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href="/services"
                className="mt-auto inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-semibold text-white transition-all duration-200 hover:opacity-90"
                style={{ backgroundColor: "#7C3AED" }}
              >
                Explore Business Services
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── SECTION 3: SERVICES GRID ── */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="text-center mb-12">
              <p
                className="text-sm font-semibold uppercase tracking-widest mb-3"
                style={{ color: "var(--brand-blue)" }}
              >
                What We Do
              </p>
              <h2
                className="text-3xl sm:text-4xl font-bold"
                style={{ color: "var(--brand-navy)" }}
              >
                Our Services
              </h2>
            </div>
          </Reveal>

          {services.length === 0 ? (
            <p className="text-center text-sm" style={{ color: "var(--brand-muted)" }}>
              No services found. Run{" "}
              <code className="font-mono bg-gray-100 px-1 rounded">npm run db:seed</code> to
              populate the database.
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, i) => {
                const { bg, text } = getCategoryStyle(service.category);
                return (
                  <Reveal key={service.id} delay={i * 60}>
                    <div className="group flex flex-col h-full bg-white rounded-2xl border border-gray-100 p-7 hover:shadow-lg hover:border-[var(--brand-blue)] transition-all duration-300">
                      <span
                        className="self-start text-xs font-semibold px-3 py-1 rounded-full mb-5"
                        style={{ backgroundColor: bg, color: text }}
                      >
                        {service.category}
                      </span>
                      <h3
                        className="text-lg font-bold mb-2"
                        style={{ color: "var(--brand-navy)" }}
                      >
                        {service.title}
                      </h3>
                      <p
                        className="text-sm leading-relaxed flex-1"
                        style={{ color: "var(--brand-muted)" }}
                      >
                        {service.description}
                      </p>
                      <Link
                        href={`/services/${service.slug}`}
                        className="inline-flex items-center gap-1 mt-5 text-sm font-semibold transition-colors duration-200 hover:gap-2"
                        style={{ color: "var(--brand-blue)" }}
                      >
                        Learn More →
                      </Link>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* ── SECTION 4: ACADEMY HIGHLIGHT ── */}
      <section
        className="py-20 px-4"
        style={{
          background:
            "linear-gradient(135deg, var(--brand-navy) 0%, #0F2D5E 60%, #1A3A72 100%)",
        }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <Reveal>
            <p
              className="text-sm font-semibold uppercase tracking-widest mb-4"
              style={{ color: "var(--brand-blue-light)" }}
            >
              Academy
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Learn Agentic AI &amp; Automation
            </h2>
            <p className="text-base mb-8" style={{ color: "#94A3B8" }}>
              Hands-on training programs designed for the AI era
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {academyTracks.map((track) => (
                <span
                  key={track}
                  className="px-4 py-2 rounded-full text-sm font-medium text-white border border-white/20"
                  style={{ backgroundColor: "rgba(255,255,255,0.08)" }}
                >
                  {track}
                </span>
              ))}
            </div>
            <Link
              href="/academy"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full text-sm font-semibold text-white transition-all duration-200 hover:opacity-90 hover:shadow-lg"
              style={{ backgroundColor: "var(--brand-blue)" }}
            >
              View All Programs
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ── SECTION 5: STATS ROW ── */}
      <section className="py-16 px-4" style={{ backgroundColor: "#F1F5F9" }}>
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 80}>
              <p
                className="text-4xl font-bold mb-1"
                style={{ color: "var(--brand-blue)" }}
              >
                {stat.value}
              </p>
              <p className="text-sm font-medium" style={{ color: "var(--brand-navy)" }}>
                {stat.label}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── SECTION 6: OPEN JOBS ── */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <div className="flex items-center justify-between mb-8">
              <div>
                <p
                  className="text-sm font-semibold uppercase tracking-widest mb-1"
                  style={{ color: "var(--brand-blue)" }}
                >
                  Careers
                </p>
                <h2
                  className="text-3xl font-bold"
                  style={{ color: "var(--brand-navy)" }}
                >
                  We&apos;re Hiring
                </h2>
              </div>
              <Link
                href="/careers"
                className="text-sm font-semibold hidden sm:inline-flex items-center gap-1 transition-colors hover:underline"
                style={{ color: "var(--brand-blue)" }}
              >
                View All Jobs →
              </Link>
            </div>
          </Reveal>

          {openJobs.length === 0 ? (
            <p className="text-sm text-center py-8" style={{ color: "var(--brand-muted)" }}>
              No open positions right now. Check back soon.
            </p>
          ) : (
            <div className="flex flex-col gap-4">
              {openJobs.map((job, i) => (
                <Reveal key={job.id} delay={i * 60}>
                  <Link
                    href={`/careers/${job.slug}`}
                    className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow group flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
                  >
                    <div>
                      <h3
                        className="text-base font-bold mb-2 group-hover:underline"
                        style={{ color: "var(--brand-navy)" }}
                      >
                        {job.title}
                      </h3>
                      <div className="flex flex-wrap gap-2">
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
                    </div>
                    <span
                      className="text-sm font-semibold shrink-0"
                      style={{ color: "var(--brand-blue)" }}
                    >
                      Apply →
                    </span>
                  </Link>
                </Reveal>
              ))}
            </div>
          )}

          <div className="mt-6 sm:hidden text-center">
            <Link
              href="/careers"
              className="text-sm font-semibold"
              style={{ color: "var(--brand-blue)" }}
            >
              View All Jobs →
            </Link>
          </div>
        </div>
      </section>

      {/* ── SECTION 7: FINAL CTA BANNER ── */}
      <section
        className="py-20 px-4"
        style={{ backgroundColor: "var(--brand-navy)" }}
      >
        <Reveal>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-base mb-10" style={{ color: "#94A3B8" }}>
              Whether you&apos;re a student ready to launch your career or a
              business ready to scale — we&apos;re here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/academy"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full text-sm font-semibold text-white transition-all duration-200 hover:opacity-90 hover:shadow-lg"
                style={{ backgroundColor: "var(--brand-blue)" }}
              >
                For Students
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full text-sm font-semibold text-white border border-white/40 transition-all duration-200 hover:bg-white/10"
              >
                For Business
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
