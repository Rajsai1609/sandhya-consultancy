import type { Metadata } from "next";
import Link from "next/link";
import {
  FaCloud,
  FaUsers,
  FaCodeBranch,
  FaChartBar,
  FaShieldAlt,
  FaLaptopCode,
  FaCog,
} from "react-icons/fa";
import { getAllServices } from "@/lib/data";
import SectionTitle from "@/components/sections/SectionTitle";
import Reveal from "@/components/animations/Reveal";
import { siteConfig } from "@/lib/site-config";

export function generateMetadata(): Metadata {
  return {
    title: "Services",
    description:
      "Explore our comprehensive IT services — cloud migration, staff augmentation, DevOps, data analytics, cybersecurity, and application development.",
    openGraph: {
      title: `Services | ${siteConfig.name}`,
      description:
        "Comprehensive IT solutions tailored to your enterprise needs.",
    },
  };
}

const categoryColors: Record<string, { bg: string; text: string }> = {
  Infrastructure: { bg: "#EFF6FF", text: "#1D4ED8" },
  Staffing:       { bg: "#F0FDF4", text: "#15803D" },
  Engineering:    { bg: "#FFF7ED", text: "#C2410C" },
  Data:           { bg: "#FAF5FF", text: "#7E22CE" },
  Security:       { bg: "#FFF1F2", text: "#BE123C" },
};

const categoryIcons: Record<string, React.ElementType> = {
  "cloud-migration":       FaCloud,
  "staff-augmentation":    FaUsers,
  "devops-cicd":           FaCodeBranch,
  "data-analytics":        FaChartBar,
  "cybersecurity":         FaShieldAlt,
  "application-development": FaLaptopCode,
};

function getCategoryStyle(category: string) {
  return (
    categoryColors[category] ?? { bg: "#F3F4F6", text: "#374151" }
  );
}

function getIcon(slug: string): React.ElementType {
  return categoryIcons[slug] ?? FaCog;
}

export default async function ServicesPage() {
  const services = await getAllServices();

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
              "radial-gradient(circle at 70% 30%, var(--brand-blue) 0%, transparent 50%)",
          }}
        />
        <div className="relative text-center max-w-2xl mx-auto">
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
            <p className="text-lg leading-relaxed" style={{ color: "#94A3B8" }}>
              Comprehensive IT solutions tailored to your needs — from cloud
              infrastructure to staffing and everything in between.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Services grid */}
      <section
        className="py-20 px-4"
        style={{ backgroundColor: "var(--brand-gray)" }}
      >
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <SectionTitle
              title="Explore Our Solutions"
              subtitle="Each service is delivered by specialists with deep domain expertise and a commitment to measurable outcomes."
              centered
            />
          </Reveal>

          {services.length === 0 ? (
            <p
              className="mt-12 text-center text-sm"
              style={{ color: "var(--brand-muted)" }}
            >
              No services found. Run{" "}
              <code className="font-mono bg-gray-100 px-1 rounded">
                npm run db:seed
              </code>{" "}
              to populate the database.
            </p>
          ) : (
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, i) => {
                const Icon = getIcon(service.slug);
                const { bg, text } = getCategoryStyle(service.category);
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
                        <Icon
                          size={22}
                          style={{ color: "var(--brand-blue)" }}
                        />
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
                        className="text-sm leading-relaxed flex-1"
                        style={{ color: "var(--brand-muted)" }}
                      >
                        {service.description}
                      </p>

                      {/* CTA */}
                      <Link
                        href={`/services/${service.slug}`}
                        className="inline-flex items-center gap-1 mt-5 text-sm font-semibold transition-colors duration-200 hover:gap-2 group-hover:text-[var(--brand-blue)]"
                        style={{ color: "var(--brand-blue)" }}
                      >
                        View Details
                        <span className="transition-transform duration-200 group-hover:translate-x-0.5">
                          →
                        </span>
                      </Link>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* CTA banner */}
      <section
        className="py-16 px-4"
        style={{ backgroundColor: "var(--brand-navy)" }}
      >
        <Reveal>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Not sure where to start?
            </h2>
            <p className="text-base mb-8" style={{ color: "#94A3B8" }}>
              Let us assess your current technology landscape and recommend the
              right services for your goals.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-7 py-3 text-sm font-semibold text-white rounded-full transition-all duration-200 hover:opacity-90 hover:shadow-lg"
              style={{ backgroundColor: "var(--brand-blue)" }}
            >
              Get a Free Consultation
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
