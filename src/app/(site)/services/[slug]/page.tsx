import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaCheckCircle, FaArrowRight } from "react-icons/fa";
import { getServiceBySlug, getAllServices } from "@/lib/data";
import Reveal from "@/components/animations/Reveal";
import { siteConfig } from "@/lib/site-config";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  try {
    const services = await getAllServices();
    return services.map((s) => ({ slug: s.slug }));
  } catch {
    return [];
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);
  if (!service) return {};

  return {
    title: service.title,
    description: service.description,
    openGraph: {
      title: `${service.title} | ${siteConfig.name}`,
      description: service.description,
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

function getCategoryStyle(category: string) {
  return categoryColors[category] ?? { bg: "#F3F4F6", text: "#374151" };
}

const keyBenefits = [
  "Reduced operational costs through optimized processes and modern tooling",
  "Faster time-to-market with streamlined delivery pipelines and expert guidance",
  "Enhanced security and compliance posture across your technology stack",
  "Scalable solutions designed to grow with your business requirements",
];

const process = [
  {
    step: 1,
    title: "Discovery & Assessment",
    description:
      "We begin by understanding your current environment, goals, and constraints through in-depth stakeholder interviews and technical reviews.",
  },
  {
    step: 2,
    title: "Strategy & Planning",
    description:
      "Our team designs a tailored roadmap with clear milestones, resource requirements, risk mitigation, and success metrics.",
  },
  {
    step: 3,
    title: "Execution & Continuous Support",
    description:
      "We implement the solution, manage quality at every stage, and provide ongoing support to ensure lasting results.",
  },
];

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const [service, allServices] = await Promise.all([
    getServiceBySlug(slug),
    getAllServices(),
  ]);

  if (!service) notFound();

  const relatedServices = allServices
    .filter((s) => s.slug !== slug)
    .slice(0, 3);

  const { bg, text } = getCategoryStyle(service.category);

  return (
    <div style={{ backgroundColor: "var(--brand-gray)" }} className="min-h-screen">
      {/* Page header */}
      <div
        className="px-4 py-12"
        style={{
          background:
            "linear-gradient(135deg, var(--brand-navy) 0%, #0F2D5E 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs mb-6" style={{ color: "#94A3B8" }}>
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-white transition-colors">Services</Link>
            <span>/</span>
            <span className="text-white">{service.title}</span>
          </nav>
          <div className="flex flex-wrap items-center gap-3">
            <span
              className="text-xs font-semibold px-3 py-1 rounded-full"
              style={{ backgroundColor: bg, color: text }}
            >
              {service.category}
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mt-4 leading-tight">
            {service.title}
          </h1>
        </div>
      </div>

      {/* Body */}
      <div className="max-w-7xl mx-auto px-4 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-10 items-start">

          {/* LEFT — main content */}
          <div className="flex flex-col gap-10">

            {/* Overview */}
            <Reveal>
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <h2
                  className="text-xl font-bold mb-4"
                  style={{ color: "var(--brand-navy)" }}
                >
                  Overview
                </h2>
                <p
                  className="text-base leading-relaxed"
                  style={{ color: "var(--brand-muted)" }}
                >
                  {service.longDesc ?? service.description}
                </p>
              </div>
            </Reveal>

            {/* Key Benefits */}
            <Reveal delay={60}>
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <h2
                  className="text-xl font-bold mb-6"
                  style={{ color: "var(--brand-navy)" }}
                >
                  Key Benefits
                </h2>
                <ul className="flex flex-col gap-4">
                  {keyBenefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <FaCheckCircle
                        size={18}
                        className="flex-shrink-0 mt-0.5"
                        style={{ color: "var(--brand-blue)" }}
                      />
                      <span
                        className="text-sm leading-relaxed"
                        style={{ color: "var(--brand-muted)" }}
                      >
                        {benefit}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            {/* Our Process */}
            <Reveal delay={120}>
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <h2
                  className="text-xl font-bold mb-8"
                  style={{ color: "var(--brand-navy)" }}
                >
                  Our Process
                </h2>
                <ol className="flex flex-col gap-8">
                  {process.map((item) => (
                    <li key={item.step} className="flex gap-5">
                      <div
                        className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white"
                        style={{ backgroundColor: "var(--brand-blue)" }}
                      >
                        {item.step}
                      </div>
                      <div>
                        <h3
                          className="text-base font-semibold mb-1"
                          style={{ color: "var(--brand-navy)" }}
                        >
                          {item.title}
                        </h3>
                        <p
                          className="text-sm leading-relaxed"
                          style={{ color: "var(--brand-muted)" }}
                        >
                          {item.description}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </Reveal>
          </div>

          {/* RIGHT — sidebar */}
          <aside className="flex flex-col gap-6 lg:sticky lg:top-24">

            {/* CTA card */}
            <Reveal direction="right">
              <div
                className="rounded-2xl p-7 text-white"
                style={{
                  background:
                    "linear-gradient(135deg, var(--brand-navy) 0%, #0F2D5E 100%)",
                }}
              >
                <h3 className="text-lg font-bold mb-2">
                  Interested in this service?
                </h3>
                <p className="text-sm mb-6" style={{ color: "#94A3B8" }}>
                  Let&apos;s discuss your requirements and how we can help you
                  achieve your goals.
                </p>
                <Link
                  href={`/contact?service=${encodeURIComponent(service.title)}`}
                  className="flex items-center justify-center gap-2 w-full px-5 py-3 text-sm font-semibold text-white rounded-full transition-all duration-200 hover:opacity-90 hover:shadow-lg"
                  style={{ backgroundColor: "var(--brand-blue)" }}
                >
                  Contact Us About This
                  <FaArrowRight size={12} />
                </Link>
              </div>
            </Reveal>

            {/* Related services */}
            {relatedServices.length > 0 && (
              <Reveal direction="right" delay={80}>
                <div className="bg-white rounded-2xl p-7 shadow-sm">
                  <h3
                    className="text-sm font-bold uppercase tracking-wider mb-5"
                    style={{ color: "var(--brand-navy)" }}
                  >
                    Related Services
                  </h3>
                  <ul className="flex flex-col gap-3">
                    {relatedServices.map((related) => (
                      <li key={related.id}>
                        <Link
                          href={`/services/${related.slug}`}
                          className="flex items-center justify-between group text-sm font-medium transition-colors duration-200 hover:text-[var(--brand-blue)]"
                          style={{ color: "var(--brand-text)" }}
                        >
                          <span>{related.title}</span>
                          <FaArrowRight
                            size={11}
                            className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                            style={{ color: "var(--brand-blue)" }}
                          />
                        </Link>
                        <div
                          className="h-px mt-3"
                          style={{ backgroundColor: "#F3F4F6" }}
                        />
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-1 mt-2 text-xs font-semibold transition-colors duration-200 hover:text-[var(--brand-blue)]"
                    style={{ color: "var(--brand-muted)" }}
                  >
                    View all services <FaArrowRight size={10} />
                  </Link>
                </div>
              </Reveal>
            )}
          </aside>
        </div>
      </div>
    </div>
  );
}
