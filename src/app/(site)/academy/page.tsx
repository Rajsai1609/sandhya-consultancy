import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { FaClock, FaGraduationCap, FaLaptopCode, FaCheckCircle } from "react-icons/fa";

export const metadata: Metadata = {
  title: `IT Academy | ${siteConfig.name}`,
  description:
    "Accelerate your IT career with Sandhya IT Academy. Intensive training programs in Cloud, DevOps, Cybersecurity, and Data Engineering.",
  openGraph: {
    title: `IT Academy | ${siteConfig.name}`,
    description:
      "Accelerate your IT career with Sandhya IT Academy. Intensive training programs in Cloud, DevOps, Cybersecurity, and Data Engineering.",
    url: `${siteConfig.url}/academy`,
    type: "website",
  },
};

const PROGRAMS = [
  {
    title: "Cloud Architecture",
    duration: "12 weeks",
    icon: "☁️",
    description:
      "Master AWS, Azure, and GCP. Design fault-tolerant, scalable cloud systems for enterprise workloads.",
    topics: [
      "Multi-cloud architecture patterns",
      "Infrastructure as Code (Terraform)",
      "Cloud cost optimization",
      "Security and compliance in the cloud",
    ],
  },
  {
    title: "DevOps Engineering",
    duration: "10 weeks",
    icon: "⚙️",
    description:
      "Bridge development and operations with modern CI/CD pipelines, containers, and orchestration.",
    topics: [
      "Docker and Kubernetes",
      "CI/CD with GitHub Actions & Jenkins",
      "Monitoring with Prometheus & Grafana",
      "GitOps and ArgoCD",
    ],
  },
  {
    title: "Cybersecurity",
    duration: "8 weeks",
    icon: "🛡️",
    description:
      "Protect enterprise systems with hands-on threat modeling, penetration testing, and incident response.",
    topics: [
      "OWASP Top 10 and threat modeling",
      "Penetration testing fundamentals",
      "Security Operations Center (SOC)",
      "Compliance frameworks (SOC2, HIPAA)",
    ],
  },
  {
    title: "Data Engineering",
    duration: "10 weeks",
    icon: "📊",
    description:
      "Build modern data pipelines and analytics platforms that power business intelligence at scale.",
    topics: [
      "Apache Spark and Kafka",
      "Data warehouse design (Snowflake, BigQuery)",
      "ETL/ELT pipeline development",
      "Data quality and governance",
    ],
  },
];

const WHY_US = [
  {
    title: "Industry Practitioners",
    description:
      "Every instructor has 10+ years of real-world enterprise experience — no theory-only teachers.",
  },
  {
    title: "Hands-On Projects",
    description:
      "Build production-grade projects for your portfolio. Graduate with work you can showcase.",
  },
  {
    title: "Job Placement Support",
    description:
      "Leverage our staffing network for direct access to hiring managers at top enterprises.",
  },
];

export default function AcademyPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="py-24 text-white text-center"
        style={{ backgroundColor: "var(--brand-navy)" }}
      >
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="flex justify-center mb-4">
            <FaGraduationCap size={48} style={{ color: "var(--brand-blue-light)" }} />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Sandhya IT Academy
          </h1>
          <p className="text-lg opacity-80">
            Intensive, practitioner-led training programs designed to launch
            and accelerate enterprise IT careers.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-block rounded-full px-8 py-3 text-sm font-semibold text-white transition-colors"
              style={{ backgroundColor: "var(--brand-blue)" }}
            >
              Enroll Today
            </Link>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-20" style={{ backgroundColor: "var(--brand-gray)" }}>
        <div className="container mx-auto px-6 max-w-6xl">
          <h2
            className="text-3xl font-bold text-center mb-12"
            style={{ color: "var(--brand-navy)" }}
          >
            Training Programs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PROGRAMS.map((p) => (
              <div
                key={p.title}
                className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="text-3xl">{p.icon}</span>
                    <h3
                      className="text-xl font-bold mt-2"
                      style={{ color: "var(--brand-navy)" }}
                    >
                      {p.title}
                    </h3>
                  </div>
                  <span className="flex items-center gap-1.5 text-xs font-semibold rounded-full px-3 py-1.5 bg-blue-50 text-blue-700">
                    <FaClock size={10} />
                    {p.duration}
                  </span>
                </div>
                <p
                  className="text-sm mb-4"
                  style={{ color: "var(--brand-muted)" }}
                >
                  {p.description}
                </p>
                <ul className="flex flex-col gap-2">
                  {p.topics.map((t) => (
                    <li key={t} className="flex items-start gap-2 text-sm text-gray-700">
                      <FaCheckCircle
                        size={13}
                        className="mt-0.5 shrink-0"
                        style={{ color: "var(--brand-blue)" }}
                      />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Train With Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2
            className="text-3xl font-bold text-center mb-12"
            style={{ color: "var(--brand-navy)" }}
          >
            Why Train With Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {WHY_US.map((w) => (
              <div key={w.title} className="text-center">
                <FaLaptopCode
                  size={32}
                  className="mx-auto mb-4"
                  style={{ color: "var(--brand-blue)" }}
                />
                <h3
                  className="font-bold text-lg mb-2"
                  style={{ color: "var(--brand-navy)" }}
                >
                  {w.title}
                </h3>
                <p className="text-sm" style={{ color: "var(--brand-muted)" }}>
                  {w.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-20 text-white text-center"
        style={{ backgroundColor: "var(--brand-blue)" }}
      >
        <div className="container mx-auto px-6 max-w-2xl">
          <h2 className="text-3xl font-bold mb-4">Ready to Level Up?</h2>
          <p className="opacity-90 mb-8">
            Contact us today to learn about upcoming cohorts, pricing, and
            enrollment requirements.
          </p>
          <Link
            href="/contact"
            className="inline-block rounded-full px-8 py-3 text-sm font-semibold transition-colors"
            style={{ backgroundColor: "var(--brand-navy)", color: "#fff" }}
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
