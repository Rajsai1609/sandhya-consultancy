import type { Metadata } from "next";
import Link from "next/link";
import { FaClock, FaLayerGroup, FaHammer, FaUserTie, FaBriefcase, FaQuoteLeft } from "react-icons/fa";
import Reveal from "@/components/animations/Reveal";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: `AI & Automation Academy | ${siteConfig.name}`,
  description:
    "Hands-on AI and automation training for students and professionals. Learn Agentic AI, Multi-Agent Systems, Cloud, and more.",
  openGraph: {
    title: `AI & Automation Academy | ${siteConfig.name}`,
    description:
      "Hands-on AI and automation training for students and professionals.",
    url: `${siteConfig.url}/academy`,
    type: "website",
  },
};

const WHY = [
  {
    icon: FaHammer,
    title: "Learn by Building",
    description:
      "Real AI systems, not just theory. Every program ends with a production-ready project you can ship and showcase.",
  },
  {
    icon: FaUserTie,
    title: "Industry Mentors",
    description:
      "Taught by practitioners actively building production AI — not academics. Get advice that's current and battle-tested.",
  },
  {
    icon: FaBriefcase,
    title: "Career Support",
    description:
      "Job placement assistance and resume AI tools included. We don't stop at training — we help you land the role.",
  },
];

const TRACKS = [
  {
    title: "Agentic AI Fundamentals",
    duration: "8 weeks",
    level: "Beginner",
    levelColor: { bg: "#F0FDF4", text: "#15803D" },
    description:
      "Build AI agents that reason, plan, and take actions. Covers Claude API, tool use, and agent loops.",
    tools: ["Claude API", "Python", "LangChain"],
  },
  {
    title: "Multi-Agent Systems",
    duration: "10 weeks",
    level: "Intermediate",
    levelColor: { bg: "#FFF7ED", text: "#C2410C" },
    description:
      "Design and deploy multi-agent architectures. Learn orchestration, agent communication, and production deployment.",
    tools: ["CrewAI", "AutoGen", "Railway", "Supabase"],
  },
  {
    title: "Workflow Automation",
    duration: "6 weeks",
    level: "Beginner",
    levelColor: { bg: "#F0FDF4", text: "#15803D" },
    description:
      "Automate business processes end-to-end using no-code and low-code tools.",
    tools: ["Make.com", "n8n", "Zapier", "Airtable"],
  },
  {
    title: "Cloud Computing",
    duration: "12 weeks",
    level: "Beginner–Advanced",
    levelColor: { bg: "#EFF6FF", text: "#1D4ED8" },
    description:
      "AWS, Azure, and GCP fundamentals through to advanced cloud architecture and DevOps.",
    tools: ["AWS", "Azure", "GCP", "Terraform", "Docker"],
  },
  {
    title: "Data Engineering",
    duration: "10 weeks",
    level: "Intermediate",
    levelColor: { bg: "#FFF7ED", text: "#C2410C" },
    description:
      "Build production data pipelines, warehouses, and analytics systems.",
    tools: ["Python", "SQL", "Apache Spark", "dbt", "BigQuery"],
  },
  {
    title: "AI Career Accelerator",
    duration: "4 weeks",
    level: "All levels",
    levelColor: { bg: "#F5F3FF", text: "#6D28D9" },
    description:
      "AI-powered job search strategy. Resume tailoring agent, LinkedIn optimization, interview prep, Graduate Visa & Skilled Worker Visa guidance.",
    tools: ["ResumeAI Agent", "Job Scraper", "Claude AI"],
  },
];

const STATS = [
  { value: "500+", label: "Students Placed" },
  { value: "85%",  label: "Placed within 90 days" },
  { value: "£45K", label: "Avg starting salary" },
];

export default function AcademyPage() {
  return (
    <>
      {/* ── SECTION 1: HERO ── */}
      <section
        className="relative flex items-center justify-center min-h-[520px] px-4 py-24 text-center"
        style={{
          background:
            "linear-gradient(135deg, var(--brand-navy) 0%, #0F2D5E 55%, #1A3A72 100%)",
        }}
      >
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 65% 35%, var(--brand-blue) 0%, transparent 55%)",
          }}
        />
        <div className="relative max-w-2xl mx-auto">
          <Reveal>
            <div className="flex justify-center gap-3 mb-6">
              <span className="px-4 py-1.5 rounded-full text-xs font-semibold text-white border border-white/20"
                style={{ backgroundColor: "rgba(255,255,255,0.08)" }}>
                For Students
              </span>
              <span className="px-4 py-1.5 rounded-full text-xs font-semibold text-white border border-white/20"
                style={{ backgroundColor: "rgba(255,255,255,0.08)" }}>
                For Professionals
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
              AI &amp; Automation Academy
            </h1>
            <p className="text-lg leading-relaxed mb-10" style={{ color: "#94A3B8" }}>
              Hands-on training for the AI era — learn by building real systems
            </p>
            <a
              href="#programs"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full text-sm font-semibold text-white transition-all duration-200 hover:opacity-90 hover:shadow-lg"
              style={{ backgroundColor: "var(--brand-blue)" }}
            >
              View Programs
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── SECTION 2: WHY OUR ACADEMY ── */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <div className="text-center mb-12">
              <p
                className="text-sm font-semibold uppercase tracking-widest mb-3"
                style={{ color: "var(--brand-blue)" }}
              >
                Why Train With Us
              </p>
              <h2
                className="text-3xl sm:text-4xl font-bold"
                style={{ color: "var(--brand-navy)" }}
              >
                Built for the AI Era
              </h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {WHY.map((item, i) => (
              <Reveal key={item.title} delay={i * 80}>
                <div className="text-center px-4">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5"
                    style={{ backgroundColor: "#EFF4FF" }}
                  >
                    <item.icon size={24} style={{ color: "var(--brand-blue)" }} />
                  </div>
                  <h3
                    className="text-lg font-bold mb-2"
                    style={{ color: "var(--brand-navy)" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--brand-muted)" }}>
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 3: PROGRAM TRACKS ── */}
      <section
        id="programs"
        className="py-20 px-4"
        style={{ backgroundColor: "var(--brand-gray)" }}
      >
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="text-center mb-12">
              <p
                className="text-sm font-semibold uppercase tracking-widest mb-3"
                style={{ color: "var(--brand-blue)" }}
              >
                Curriculum
              </p>
              <h2
                className="text-3xl sm:text-4xl font-bold"
                style={{ color: "var(--brand-navy)" }}
              >
                Our Programs
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TRACKS.map((track, i) => (
              <Reveal key={track.title} delay={i * 60}>
                <div className="group flex flex-col h-full bg-white rounded-2xl border border-gray-100 p-7 hover:shadow-lg hover:border-[var(--brand-blue)] transition-all duration-300">
                  {/* Badges row */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    <span className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-blue-50 text-blue-700">
                      <FaClock size={10} />
                      {track.duration}
                    </span>
                    <span
                      className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full"
                      style={{
                        backgroundColor: track.levelColor.bg,
                        color: track.levelColor.text,
                      }}
                    >
                      <FaLayerGroup size={10} />
                      {track.level}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    className="text-lg font-bold mb-2"
                    style={{ color: "var(--brand-navy)" }}
                  >
                    {track.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="text-sm leading-relaxed flex-1 mb-5"
                    style={{ color: "var(--brand-muted)" }}
                  >
                    {track.description}
                  </p>

                  {/* Tools */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {track.tools.map((tool) => (
                      <span
                        key={tool}
                        className="text-xs font-medium px-2.5 py-1 rounded-md bg-gray-100 text-gray-600"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-sm font-semibold text-white transition-all duration-200 hover:opacity-90"
                    style={{ backgroundColor: "var(--brand-blue)" }}
                  >
                    Enroll Now
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 4: STUDENT SUCCESS ── */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <div className="text-center mb-12">
              <p
                className="text-sm font-semibold uppercase tracking-widest mb-3"
                style={{ color: "var(--brand-blue)" }}
              >
                Results
              </p>
              <h2
                className="text-3xl sm:text-4xl font-bold"
                style={{ color: "var(--brand-navy)" }}
              >
                Student Outcomes
              </h2>
            </div>
          </Reveal>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center mb-14">
            {STATS.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 80}>
                <p
                  className="text-5xl font-bold mb-2"
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

          {/* Testimonial placeholder */}
          <Reveal>
            <div className="max-w-2xl mx-auto bg-gray-50 rounded-2xl border border-gray-100 p-8">
              <FaQuoteLeft size={24} className="mb-4" style={{ color: "var(--brand-blue)" }} />
              <p className="text-base leading-relaxed italic mb-6" style={{ color: "var(--brand-navy)" }}>
                &ldquo;The AI Career Accelerator completely changed how I approached my job search.
                Within 6 weeks I had 3 offers — including an H1B-sponsored role I never thought
                I&apos;d land.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white"
                  style={{ backgroundColor: "var(--brand-blue)" }}
                >
                  S
                </div>
                <div>
                  <p className="text-sm font-semibold" style={{ color: "var(--brand-navy)" }}>
                    Student, Cohort 3
                  </p>
                  <p className="text-xs" style={{ color: "var(--brand-muted)" }}>
                    Now: AI Engineer @ Fortune 500
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── SECTION 5: FINAL CTA ── */}
      <section
        className="py-20 px-4"
        style={{ backgroundColor: "var(--brand-navy)" }}
      >
        <Reveal>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready to start your AI career?
            </h2>
            <p className="text-base mb-10" style={{ color: "#94A3B8" }}>
              Apply today and join the next cohort. Seats are limited.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full text-sm font-semibold text-white transition-all duration-200 hover:opacity-90 hover:shadow-lg"
              style={{ backgroundColor: "var(--brand-blue)" }}
            >
              Apply Now
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
