export const dynamic = "force-dynamic";

import type { Metadata } from "next";
import Link from "next/link";
import {
  FaHeartbeat,
  FaUniversity,
  FaShoppingCart,
  FaLandmark,
  FaIndustry,
  FaBuilding,
  FaSearch,
  FaDraftingCompass,
  FaRocket,
} from "react-icons/fa";
import { getAllIndustries } from "@/lib/data";
import SectionTitle from "@/components/sections/SectionTitle";
import Reveal from "@/components/animations/Reveal";
import { siteConfig } from "@/lib/site-config";

export function generateMetadata(): Metadata {
  return {
    title: "AI Products",
    description:
      "Explore Sandhya IT Consulting's AI-powered products for healthcare, finance, retail, government, and manufacturing sectors.",
    openGraph: {
      title: `AI Products | ${siteConfig.name}`,
      description:
        "Intelligent AI products built for healthcare, finance, retail, government, and manufacturing.",
    },
  };
}

const industryIcons: Record<string, React.ElementType> = {
  healthcare:    FaHeartbeat,
  finance:       FaUniversity,
  retail:        FaShoppingCart,
  government:    FaLandmark,
  manufacturing: FaIndustry,
};

const industryAccents: Record<string, { bg: string; icon: string }> = {
  healthcare:    { bg: "#FFF1F2", icon: "#E11D48" },
  finance:       { bg: "#EFF6FF", icon: "#1D4ED8" },
  retail:        { bg: "#F0FDF4", icon: "#15803D" },
  government:    { bg: "#FFF7ED", icon: "#C2410C" },
  manufacturing: { bg: "#FAF5FF", icon: "#7E22CE" },
};

const approachSteps = [
  {
    icon: FaSearch,
    title: "Assess",
    description:
      "We conduct a thorough analysis of your current technology landscape, pain points, and strategic priorities before recommending any solution.",
  },
  {
    icon: FaDraftingCompass,
    title: "Design",
    description:
      "Our architects craft a tailored AI solution blueprint aligned with your industry's compliance requirements, workflows, and growth trajectory.",
  },
  {
    icon: FaRocket,
    title: "Deploy",
    description:
      "We execute with precision — managing timelines, stakeholders, and quality gates to deliver on time and within scope, every time.",
  },
];

export default async function AiProductsPage() {
  const products = await getAllIndustries();

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
              Intelligent Solutions
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
              Our AI Products
            </h1>
            <p className="text-lg leading-relaxed" style={{ color: "#94A3B8" }}>
              Purpose-built AI products that automate workflows, surface insights,
              and accelerate growth across every sector we serve.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Product cards grid */}
      <section className="py-20 px-4" style={{ backgroundColor: "var(--brand-gray)" }}>
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <SectionTitle
              title="Built for Your Sector"
              subtitle="Each AI product is purpose-engineered for the specific demands of your industry — not a generic off-the-shelf tool."
              centered
            />
          </Reveal>

          {products.length === 0 ? (
            <p
              className="mt-12 text-center text-sm"
              style={{ color: "var(--brand-muted)" }}
            >
              No products found. Run{" "}
              <code className="font-mono bg-gray-100 px-1 rounded">
                npm run db:seed
              </code>{" "}
              to populate the database.
            </p>
          ) : (
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {products.map((product, i) => {
                const Icon =
                  industryIcons[product.slug] ?? FaBuilding;
                const accent =
                  industryAccents[product.slug] ?? {
                    bg: "#F3F4F6",
                    icon: "#374151",
                  };
                return (
                  <Reveal key={product.id} delay={i * 70}>
                    <div className="group flex flex-col h-full bg-white rounded-2xl border border-gray-100 p-8 hover:shadow-lg hover:border-[var(--brand-blue)] transition-all duration-300">
                      <div
                        className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
                        style={{ backgroundColor: accent.bg }}
                      >
                        <Icon size={26} style={{ color: accent.icon }} />
                      </div>

                      <h3
                        className="text-xl font-bold mb-3"
                        style={{ color: "var(--brand-navy)" }}
                      >
                        {product.title}
                      </h3>

                      <p
                        className="text-sm leading-relaxed flex-1"
                        style={{ color: "var(--brand-muted)" }}
                      >
                        {product.description}
                      </p>

                      <span
                        className="inline-flex items-center gap-1 mt-6 text-sm font-semibold cursor-default"
                        style={{ color: "var(--brand-blue)" }}
                      >
                        Learn More →
                      </span>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 px-4" style={{ backgroundColor: "white" }}>
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <SectionTitle
              title="Our Approach"
              subtitle="A structured methodology that ensures every AI deployment delivers measurable value."
              centered
            />
          </Reveal>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {approachSteps.map((step, i) => {
              const Icon = step.icon;
              return (
                <Reveal key={step.title} delay={i * 80}>
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
                      {step.title}
                    </h3>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: "var(--brand-muted)" }}
                    >
                      {step.description}
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
              Ready to deploy AI in your organisation?
            </h2>
            <p className="text-base mb-8" style={{ color: "#94A3B8" }}>
              Our AI specialists are ready to understand your unique context
              and craft a solution that fits.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-7 py-3 text-sm font-semibold text-white rounded-full transition-all duration-200 hover:opacity-90 hover:shadow-lg"
              style={{ backgroundColor: "var(--brand-blue)" }}
            >
              Let&apos;s Talk
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
