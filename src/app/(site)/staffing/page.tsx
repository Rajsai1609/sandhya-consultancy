import type { Metadata } from "next";
import Link from "next/link";
import {
  FaFileAlt,
  FaRobot,
  FaClipboardList,
  FaHandshake,
  FaCheck,
} from "react-icons/fa";
import Reveal from "@/components/animations/Reveal";
import ResumeSubmissionForm from "@/components/forms/ResumeSubmissionForm";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: `AI-Powered IT Staffing | ${siteConfig.name}`,
  description:
    "Find the right IT and AI talent faster with AI candidate matching and automated recruitment workflows. Contract, contract-to-hire, and direct placement.",
  openGraph: {
    title: `AI-Powered IT Staffing | ${siteConfig.name}`,
    description:
      "AI candidate matching and automated recruitment for IT and AI roles.",
    url: `${siteConfig.url}/staffing`,
    type: "website",
  },
};

const HIRING_MODELS = [
  {
    title: "Contract Staffing",
    forLabel: "Immediate project needs",
    timeline: "Place in 1–2 weeks",
    benefits: [
      "Flexible duration",
      "Pre-vetted candidates",
      "AI-matched skills",
    ],
    accentBg: "#EFF6FF",
    accentText: "#1D4ED8",
  },
  {
    title: "Contract-to-Hire",
    forLabel: "Evaluate before committing",
    timeline: "3–6 month trial period",
    benefits: [
      "Reduce hiring risk",
      "Culture fit assessment",
      "Smooth conversion process",
    ],
    accentBg: "#F5F3FF",
    accentText: "#6D28D9",
  },
  {
    title: "Direct Placement",
    forLabel: "Permanent full-time hires",
    timeline: "2–4 week process",
    benefits: [
      "Deep candidate screening",
      "AI skills assessment",
      "90-day placement guarantee",
      "Skilled Worker Visa sponsorship available",
    ],
    accentBg: "#F0FDF4",
    accentText: "#15803D",
  },
];

const PROCESS_STEPS = [
  {
    icon: FaFileAlt,
    step: "01",
    title: "Submit Requirements",
    description: "You describe the role, skills, and team fit you need.",
  },
  {
    icon: FaRobot,
    step: "02",
    title: "AI Candidate Matching",
    description: "Our AI screens and scores candidates against your requirements.",
  },
  {
    icon: FaClipboardList,
    step: "03",
    title: "Interview Shortlist",
    description: "You meet only the top 3–5 candidates — no noise, no time waste.",
  },
  {
    icon: FaHandshake,
    step: "04",
    title: "Hire & Onboard",
    description: "We support the onboarding process to ensure a smooth start.",
  },
];

const ROLES = [
  "Cloud Engineers",
  "DevOps",
  "Data Engineers",
  "AI/ML Engineers",
  "Full Stack Developers",
  "Cybersecurity",
  "Project Managers",
  "Business Analysts",
];

export default function StaffingPage() {
  return (
    <>
      {/* ── SECTION 1: HERO ── */}
      <section
        className="relative flex items-center justify-center min-h-[420px] px-4 py-24 text-center"
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
            <p
              className="text-sm font-semibold uppercase tracking-widest mb-4"
              style={{ color: "var(--brand-blue-light)" }}
            >
              IT Staffing
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
              AI-Powered IT Staffing
            </h1>
            <p className="text-lg leading-relaxed" style={{ color: "#94A3B8" }}>
              Find the right talent faster with AI candidate matching and
              automated recruitment workflows
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── SECTION 2: THREE HIRING MODELS ── */}
      <section
        className="py-20 px-4"
        style={{ backgroundColor: "var(--brand-gray)" }}
      >
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="text-center mb-12">
              <p
                className="text-sm font-semibold uppercase tracking-widest mb-3"
                style={{ color: "var(--brand-blue)" }}
              >
                Engagement Models
              </p>
              <h2
                className="text-3xl sm:text-4xl font-bold"
                style={{ color: "var(--brand-navy)" }}
              >
                Three Ways to Hire
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {HIRING_MODELS.map((model, i) => (
              <Reveal key={model.title} delay={i * 80}>
                <div className="flex flex-col h-full bg-white rounded-2xl border border-gray-100 p-7 hover:shadow-lg transition-shadow duration-300">
                  {/* Title */}
                  <h3
                    className="text-xl font-bold mb-3"
                    style={{ color: "var(--brand-navy)" }}
                  >
                    {model.title}
                  </h3>

                  {/* For + timeline */}
                  <div className="flex flex-col gap-1.5 mb-6">
                    <span
                      className="self-start text-xs font-semibold px-3 py-1 rounded-full"
                      style={{
                        backgroundColor: model.accentBg,
                        color: model.accentText,
                      }}
                    >
                      For: {model.forLabel}
                    </span>
                    <span
                      className="self-start text-xs font-medium px-3 py-1 rounded-full bg-gray-100"
                      style={{ color: "var(--brand-muted)" }}
                    >
                      Timeline: {model.timeline}
                    </span>
                  </div>

                  {/* Benefits */}
                  <ul className="flex flex-col gap-2 flex-1">
                    {model.benefits.map((b) => (
                      <li
                        key={b}
                        className="flex items-center gap-2 text-sm"
                        style={{ color: "var(--brand-navy)" }}
                      >
                        <FaCheck
                          size={11}
                          className="shrink-0"
                          style={{ color: model.accentText }}
                        />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 3: AI-POWERED RECRUITING ── */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <div className="text-center mb-14">
              <p
                className="text-sm font-semibold uppercase tracking-widest mb-3"
                style={{ color: "var(--brand-blue)" }}
              >
                Our Process
              </p>
              <h2
                className="text-3xl sm:text-4xl font-bold"
                style={{ color: "var(--brand-navy)" }}
              >
                How Our AI Makes Hiring Faster
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
            {PROCESS_STEPS.map((s, i) => (
              <Reveal key={s.step} delay={i * 80}>
                <div className="relative flex flex-col items-center text-center px-6">
                  {/* Connector */}
                  {i < PROCESS_STEPS.length - 1 && (
                    <div
                      className="hidden lg:block absolute top-7 left-[calc(50%+28px)] right-0 h-px"
                      style={{ backgroundColor: "var(--brand-blue)", opacity: 0.2 }}
                    />
                  )}

                  {/* Icon */}
                  <div
                    className="relative w-14 h-14 rounded-2xl flex items-center justify-center mb-4 z-10"
                    style={{ backgroundColor: "#EFF4FF" }}
                  >
                    <s.icon size={22} style={{ color: "var(--brand-blue)" }} />
                    <span
                      className="absolute -top-2 -right-2 w-5 h-5 rounded-full text-white text-[10px] font-bold flex items-center justify-center"
                      style={{ backgroundColor: "var(--brand-blue)" }}
                    >
                      {i + 1}
                    </span>
                  </div>

                  <h3
                    className="text-sm font-bold mb-1.5"
                    style={{ color: "var(--brand-navy)" }}
                  >
                    {s.title}
                  </h3>
                  <p
                    className="text-xs leading-relaxed"
                    style={{ color: "var(--brand-muted)" }}
                  >
                    {s.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 4: ROLES WE STAFF ── */}
      <section
        className="py-16 px-4"
        style={{ backgroundColor: "var(--brand-gray)" }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <p
              className="text-sm font-semibold uppercase tracking-widest mb-3"
              style={{ color: "var(--brand-blue)" }}
            >
              Specializations
            </p>
            <h2
              className="text-2xl font-bold mb-8"
              style={{ color: "var(--brand-navy)" }}
            >
              Roles We Staff
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {ROLES.map((role) => (
                <span
                  key={role}
                  className="px-4 py-2 rounded-full text-sm font-medium border"
                  style={{
                    backgroundColor: "#fff",
                    color: "var(--brand-navy)",
                    borderColor: "#E2E8F0",
                  }}
                >
                  {role}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── SECTION 5: RESUME SUBMISSION ── */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-2xl mx-auto">
          <Reveal>
            <div className="text-center mb-10">
              <p
                className="text-sm font-semibold uppercase tracking-widest mb-3"
                style={{ color: "var(--brand-blue)" }}
              >
                Job Seekers
              </p>
              <h2
                className="text-3xl font-bold mb-3"
                style={{ color: "var(--brand-navy)" }}
              >
                Are You a Job Seeker?
              </h2>
              <p className="text-sm leading-relaxed" style={{ color: "var(--brand-muted)" }}>
                Submit your resume and our AI will match you to open roles.
              </p>
            </div>
          </Reveal>
          <ResumeSubmissionForm />
        </div>
      </section>

      {/* ── SECTION 6: EMPLOYER CTA ── */}
      <section
        className="py-16 px-4"
        style={{ backgroundColor: "var(--brand-navy)" }}
      >
        <Reveal>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Looking to hire?
            </h2>
            <p className="text-base mb-8" style={{ color: "#94A3B8" }}>
              Tell us what you need and we&apos;ll have AI-matched candidates
              in your inbox within 48 hours.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full text-sm font-semibold text-white transition-all duration-200 hover:opacity-90 hover:shadow-lg"
              style={{ backgroundColor: "var(--brand-blue)" }}
            >
              Start Hiring
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
