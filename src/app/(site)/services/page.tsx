"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import {
  FaRobot,
  FaCogs,
  FaBrain,
  FaUsers,
  FaCloud,
  FaChartLine,
  FaEye,
  FaLightbulb,
  FaSitemap,
  FaRocket,
  FaCheck,
} from "react-icons/fa";
import Reveal from "@/components/animations/Reveal";
import { getAllServices } from "@/lib/data";

type Service = Awaited<ReturnType<typeof getAllServices>>[number];

// ── Static data ────────────────────────────────────────────────────────────────

const categoryColors: Record<string, { bg: string; text: string }> = {
  Students:    { bg: "#EFF6FF", text: "#1D4ED8" },
  Business:    { bg: "#F5F3FF", text: "#6D28D9" },
  Staffing:    { bg: "#F0FDF4", text: "#15803D" },
  Engineering: { bg: "#F0FDFA", text: "#0F766E" },
  Consulting:  { bg: "#FFFBEB", text: "#B45309" },
};

const categoryIcons: Record<string, React.ElementType> = {
  "ai-career-automation":   FaRobot,
  "business-automation":    FaCogs,
  "multi-agent-ai":         FaBrain,
  "it-staffing":            FaUsers,
  "cloud-data-engineering": FaCloud,
  "ai-strategy-consulting": FaChartLine,
};

const serviceOutcomes: Record<string, string[]> = {
  "ai-career-automation":   [
    "Resume match score 85+",
    "3x faster job applications",
    "H1B/OPT job filters",
  ],
  "business-automation":    [
    "80% reduction in manual tasks",
    "24/7 automated workflows",
    "Custom AI agents",
  ],
  "multi-agent-ai":         [
    "Production-ready agent systems",
    "Sense→Reason→Orchestrate→Optimize framework",
    "Railway deployed",
  ],
  "it-staffing":            [
    "AI-matched candidates",
    "2 week placement avg",
    "Contract + direct hire",
  ],
  "cloud-data-engineering": [
    "AWS/Azure/GCP certified team",
    "Data pipeline to production",
    "99.9% uptime SLA",
  ],
  "ai-strategy-consulting": [
    "90-day roadmap to production",
    "SMB-focused",
    "Build-once-deploy-many",
  ],
};

// Audience grouping for the filter tabs
const STUDENT_CATEGORIES = new Set(["Students"]);
const BUSINESS_CATEGORIES = new Set(["Business", "Staffing", "Engineering", "Consulting"]);

type Tab = "all" | "business" | "students";

const FRAMEWORK_STEPS = [
  {
    icon: FaEye,
    name: "Sense",
    description: "We audit your current processes and data landscape to understand where AI can create the most impact.",
  },
  {
    icon: FaLightbulb,
    name: "Reason",
    description: "Our team designs the optimal AI architecture — agents, automation flows, and data pipelines — tailored to your goals.",
  },
  {
    icon: FaSitemap,
    name: "Orchestrate",
    description: "We build and deploy multi-agent systems, automation workflows, and integrations that run continuously.",
  },
  {
    icon: FaRocket,
    name: "Optimize",
    description: "Post-launch monitoring, feedback loops, and iteration to continuously improve performance and ROI.",
  },
];

// ── Page component ─────────────────────────────────────────────────────────────

export default function ServicesPage() {
  const [services, setServices] = useState<Service[]>([]);
  const [tab, setTab] = useState<Tab>("all");

  useEffect(() => {
    fetch("/api/services")
      .then((r) => r.json())
      .then((data: Service[]) => setServices(data))
      .catch(() => {});
  }, []);

  const filtered = services.filter((s) => {
    if (tab === "students") return STUDENT_CATEGORIES.has(s.category);
    if (tab === "business") return BUSINESS_CATEGORIES.has(s.category);
    return true;
  });

  function getCategoryStyle(category: string) {
    return categoryColors[category] ?? { bg: "#F3F4F6", text: "#374151" };
  }

  function getIcon(slug: string): React.ElementType {
    return categoryIcons[slug] ?? FaCogs;
  }

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
              "radial-gradient(circle at 70% 30%, var(--brand-blue) 0%, transparent 55%)",
          }}
        />
        <div className="relative max-w-2xl mx-auto">
          <Reveal>
            <p
              className="text-sm font-semibold uppercase tracking-widest mb-4"
              style={{ color: "var(--brand-blue-light)" }}
            >
              What We Do
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
              Our Services
            </h1>
            <p className="text-lg leading-relaxed mb-10" style={{ color: "#94A3B8" }}>
              AI-powered solutions for students and businesses
            </p>

            {/* Filter tabs */}
            <div className="inline-flex rounded-full border border-white/20 p-1 gap-1">
              {(["all", "business", "students"] as Tab[]).map((t) => (
                <button
                  key={t}
                  onClick={() => setTab(t)}
                  className="px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 capitalize"
                  style={
                    tab === t
                      ? { backgroundColor: "var(--brand-blue)", color: "#fff" }
                      : { color: "rgba(255,255,255,0.7)" }
                  }
                >
                  {t === "all" ? "All Services" : t === "business" ? "For Business" : "For Students"}
                </button>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── SECTION 2: SERVICES GRID ── */}
      <section
        className="py-20 px-4"
        style={{ backgroundColor: "var(--brand-gray)" }}
      >
        <div className="max-w-7xl mx-auto">
          {filtered.length === 0 && services.length === 0 ? (
            <p className="text-center text-sm py-12" style={{ color: "var(--brand-muted)" }}>
              Loading services…
            </p>
          ) : filtered.length === 0 ? (
            <p className="text-center text-sm py-12" style={{ color: "var(--brand-muted)" }}>
              No services match this filter.
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((service, i) => {
                const Icon = getIcon(service.slug);
                const { bg, text } = getCategoryStyle(service.category);
                const outcomes = serviceOutcomes[service.slug] ?? [];
                return (
                  <Reveal key={service.id} delay={i * 60}>
                    <div className="group flex flex-col h-full bg-white rounded-2xl border border-gray-100 p-7 hover:shadow-lg hover:border-[var(--brand-blue)] transition-all duration-300">
                      {/* Category badge */}
                      <span
                        className="self-start text-xs font-semibold px-3 py-1 rounded-full mb-5"
                        style={{ backgroundColor: bg, color: text }}
                      >
                        {service.category}
                      </span>

                      {/* Icon */}
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                        style={{ backgroundColor: "#EFF4FF" }}
                      >
                        <Icon size={22} style={{ color: "var(--brand-blue)" }} />
                      </div>

                      {/* Title */}
                      <h3
                        className="text-lg font-bold mb-2"
                        style={{ color: "var(--brand-navy)" }}
                      >
                        {service.title}
                      </h3>

                      {/* Description */}
                      <p
                        className="text-sm leading-relaxed mb-5"
                        style={{ color: "var(--brand-muted)" }}
                      >
                        {service.description}
                      </p>

                      {/* Key outcomes */}
                      {outcomes.length > 0 && (
                        <ul className="flex flex-col gap-2 mb-6 flex-1">
                          {outcomes.map((outcome) => (
                            <li
                              key={outcome}
                              className="flex items-start gap-2 text-xs"
                              style={{ color: "var(--brand-navy)" }}
                            >
                              <FaCheck
                                size={10}
                                className="mt-0.5 shrink-0"
                                style={{ color: text }}
                              />
                              {outcome}
                            </li>
                          ))}
                        </ul>
                      )}

                      {/* CTA */}
                      <Link
                        href={`/services/${service.slug}`}
                        className="inline-flex items-center gap-1 mt-auto text-sm font-semibold transition-all duration-200 hover:gap-2"
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

      {/* ── SECTION 3: HOW WE WORK ── */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <div className="text-center mb-14">
              <p
                className="text-sm font-semibold uppercase tracking-widest mb-3"
                style={{ color: "var(--brand-blue)" }}
              >
                Methodology
              </p>
              <h2
                className="text-3xl sm:text-4xl font-bold"
                style={{ color: "var(--brand-navy)" }}
              >
                Our Framework
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
            {FRAMEWORK_STEPS.map((step, i) => (
              <Reveal key={step.name} delay={i * 80}>
                <div className="relative flex flex-col items-center text-center px-6">
                  {/* Connector line (not on last) */}
                  {i < FRAMEWORK_STEPS.length - 1 && (
                    <div
                      className="hidden lg:block absolute top-7 left-[calc(50%+28px)] right-0 h-px"
                      style={{ backgroundColor: "var(--brand-blue)", opacity: 0.25 }}
                    />
                  )}

                  {/* Step number + icon */}
                  <div
                    className="relative w-14 h-14 rounded-2xl flex items-center justify-center mb-4 z-10"
                    style={{ backgroundColor: "#EFF4FF" }}
                  >
                    <step.icon size={22} style={{ color: "var(--brand-blue)" }} />
                    <span
                      className="absolute -top-2 -right-2 w-5 h-5 rounded-full text-white text-[10px] font-bold flex items-center justify-center"
                      style={{ backgroundColor: "var(--brand-blue)" }}
                    >
                      {i + 1}
                    </span>
                  </div>

                  <h3
                    className="text-base font-bold mb-2"
                    style={{ color: "var(--brand-navy)" }}
                  >
                    {step.name}
                  </h3>
                  <p className="text-xs leading-relaxed" style={{ color: "var(--brand-muted)" }}>
                    {step.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 4: CTA ── */}
      <section
        className="py-16 px-4"
        style={{ backgroundColor: "var(--brand-navy)" }}
      >
        <Reveal>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Not sure which service fits you?
            </h2>
            <p className="text-base mb-8" style={{ color: "#94A3B8" }}>
              Let us assess your goals and recommend the right solution.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full text-sm font-semibold text-white transition-all duration-200 hover:opacity-90 hover:shadow-lg"
              style={{ backgroundColor: "var(--brand-blue)" }}
            >
              Talk to Us
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
