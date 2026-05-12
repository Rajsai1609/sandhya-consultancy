import type { Metadata } from "next";
import Link from "next/link";
import {
  FaBriefcase,
  FaGraduationCap,
  FaRocket,
  FaHandshake,
  FaChartLine,
  FaArrowRight,
} from "react-icons/fa";
import SectionTitle from "@/components/sections/SectionTitle";
import Reveal from "@/components/animations/Reveal";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "For Employees",
  description:
    "Resources, tools, and AI-powered career support for employees and consultants at Sandhya IT Consulting.",
  openGraph: {
    title: `For Employees | ${siteConfig.name}`,
    description:
      "Empower your career with AI tools, training resources, and consultant support from Sandhya IT Consulting.",
  },
};

const resources = [
  {
    icon: FaRocket,
    title: "AI-Powered Placement",
    description:
      "Intelligent role matching that aligns your skills, experience, and visa status with the right opportunities across our client network.",
    href: "/careers",
    external: false,
    cta: "View Open Roles",
  },
  {
    icon: FaGraduationCap,
    title: "Academy",
    description:
      "Structured learning programmes to sharpen your technical skills, earn certifications, and stay ahead in a fast-moving market.",
    href: "/academy",
    external: false,
    cta: "Explore Academy",
  },
  {
    icon: FaBriefcase,
    title: "Open Roles",
    description:
      "Browse current openings across our consulting network. We match the right talent to the right opportunity.",
    href: "/careers",
    external: false,
    cta: "View Careers",
  },
];

const benefits = [
  {
    icon: FaHandshake,
    title: "Dedicated Support",
    description:
      "A dedicated consultant manager looks after your placement, welfare, and long-term career progression.",
  },
  {
    icon: FaChartLine,
    title: "Career Growth",
    description:
      "Regular performance reviews, mentoring sessions, and a clear pathway to senior and leadership roles.",
  },
  {
    icon: FaGraduationCap,
    title: "Continuous Learning",
    description:
      "Funded certifications, access to our Academy, and structured learning time built into your engagement.",
  },
];

export default function ForEmployeesPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative flex items-center justify-center min-h-[360px] px-4"
        style={{
          background:
            "linear-gradient(135deg, var(--brand-navy) 0%, #0F2D5E 50%, #1A3A72 100%)",
        }}
      >
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 30% 60%, var(--brand-blue) 0%, transparent 50%)",
          }}
        />
        <div className="relative text-center max-w-2xl mx-auto">
          <Reveal>
            <p
              className="text-sm font-semibold uppercase tracking-widest mb-4"
              style={{ color: "var(--brand-blue-light)" }}
            >
              Employee Resources
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
              Built for You
            </h1>
            <p className="text-lg leading-relaxed" style={{ color: "#94A3B8" }}>
              Tools, resources, and AI-powered support to help every employee
              and consultant thrive — in their current role and beyond.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Resources grid */}
      <section className="py-20 px-4" style={{ backgroundColor: "var(--brand-gray)" }}>
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <SectionTitle
              title="Your Career Toolkit"
              subtitle="Everything you need to grow, learn, and land your next opportunity."
              centered
            />
          </Reveal>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {resources.map((resource, i) => {
              const Icon = resource.icon;
              return (
                <Reveal key={resource.title} delay={i * 70}>
                  <div className="flex flex-col h-full bg-white rounded-2xl border border-gray-100 p-8 hover:shadow-lg hover:border-[var(--brand-blue)] transition-all duration-300">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
                      style={{ backgroundColor: "#EFF4FF" }}
                    >
                      <Icon size={26} style={{ color: "var(--brand-blue)" }} />
                    </div>
                    <h3
                      className="text-xl font-bold mb-3"
                      style={{ color: "var(--brand-navy)" }}
                    >
                      {resource.title}
                    </h3>
                    <p
                      className="text-sm leading-relaxed flex-1"
                      style={{ color: "var(--brand-muted)" }}
                    >
                      {resource.description}
                    </p>
                    {resource.external ? (
                      <a
                        href={resource.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 mt-6 text-sm font-semibold transition-colors duration-200 hover:opacity-80"
                        style={{ color: "var(--brand-blue)" }}
                      >
                        {resource.cta}
                        <FaArrowRight size={11} />
                      </a>
                    ) : (
                      <Link
                        href={resource.href}
                        className="inline-flex items-center gap-1.5 mt-6 text-sm font-semibold transition-colors duration-200 hover:opacity-80"
                        style={{ color: "var(--brand-blue)" }}
                      >
                        {resource.cta}
                        <FaArrowRight size={11} />
                      </Link>
                    )}
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-4" style={{ backgroundColor: "white" }}>
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <SectionTitle
              title="Why Work With Us"
              subtitle="We invest in the people who power our clients' success."
              centered
            />
          </Reveal>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {benefits.map((benefit, i) => {
              const Icon = benefit.icon;
              return (
                <Reveal key={benefit.title} delay={i * 80}>
                  <div className="flex flex-col items-center text-center p-8 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow duration-300">
                    <div
                      className="w-14 h-14 rounded-full flex items-center justify-center mb-5"
                      style={{ backgroundColor: "#EFF4FF" }}
                    >
                      <Icon size={22} style={{ color: "var(--brand-blue)" }} />
                    </div>
                    <h3
                      className="text-lg font-bold mb-3"
                      style={{ color: "var(--brand-navy)" }}
                    >
                      {benefit.title}
                    </h3>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: "var(--brand-muted)" }}
                    >
                      {benefit.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-16 px-4"
        style={{ backgroundColor: "var(--brand-navy)" }}
      >
        <Reveal>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to take the next step?
            </h2>
            <p className="text-base mb-8" style={{ color: "#94A3B8" }}>
              Whether you&apos;re exploring opportunities or want to know more
              about employee resources, our team is here to help.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-7 py-3 text-sm font-semibold text-white rounded-full transition-all duration-200 hover:opacity-90 hover:shadow-lg"
              style={{ backgroundColor: "var(--brand-blue)" }}
            >
              Get in Touch
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
