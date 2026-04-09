import type { Metadata } from "next";
import { FaLightbulb, FaHandshake, FaStar, FaUsers } from "react-icons/fa";
import SectionTitle from "@/components/sections/SectionTitle";
import Reveal from "@/components/animations/Reveal";
import { siteConfig } from "@/lib/site-config";

export function generateMetadata(): Metadata {
  return {
    title: "About Us",
    description:
      "Learn about Sandhya IT Consulting — our mission, story, values, and the team driving technology solutions for enterprises.",
    openGraph: {
      title: `About Us | ${siteConfig.name}`,
      description:
        "Learn about Sandhya IT Consulting — our mission, story, values, and the team driving technology solutions for enterprises.",
    },
  };
}

const coreValues = [
  {
    icon: FaLightbulb,
    title: "Innovation",
    description:
      "We embrace emerging technologies and creative thinking to deliver solutions that keep our clients ahead of the curve.",
  },
  {
    icon: FaStar,
    title: "Excellence",
    description:
      "We hold ourselves to the highest standards — every engagement, every deliverable, every interaction.",
  },
  {
    icon: FaHandshake,
    title: "Integrity",
    description:
      "Transparency and honesty are the foundation of every client relationship we build and maintain.",
  },
  {
    icon: FaUsers,
    title: "Partnership",
    description:
      "We succeed when our clients succeed — we invest deeply in understanding your goals and growing alongside you.",
  },
];

const teamPlaceholders = [
  { name: "Team Member", role: "Chief Executive Officer" },
  { name: "Team Member", role: "Chief Technology Officer" },
  { name: "Team Member", role: "VP of Client Services" },
];

export default function AboutPage() {
  return (
    <>
      {/* 1. HERO */}
      <section
        className="relative flex items-center justify-center min-h-[480px] px-4"
        style={{
          background:
            "linear-gradient(135deg, var(--brand-navy) 0%, #0F2D5E 50%, #1A3A72 100%)",
        }}
      >
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, var(--brand-blue) 0%, transparent 50%), radial-gradient(circle at 80% 20%, var(--brand-blue-light) 0%, transparent 40%)",
          }}
        />
        <div className="relative text-center max-w-3xl mx-auto">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-widest mb-4"
              style={{ color: "var(--brand-blue-light)" }}>
              Our Story
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
              About Sandhya IT Consulting
            </h1>
            <p className="text-lg leading-relaxed" style={{ color: "#94A3B8" }}>
              Empowering enterprises with the technology expertise, talent, and
              strategy needed to thrive in an ever-changing digital landscape.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 2. OUR STORY */}
      <section className="py-20 px-4" style={{ backgroundColor: "white" }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <Reveal direction="left">
            <h2
              className="text-4xl sm:text-5xl font-bold leading-tight"
              style={{ color: "var(--brand-navy)" }}
            >
              Who We Are
            </h2>
          </Reveal>
          <Reveal direction="right" delay={100}>
            <div className="flex flex-col gap-5" style={{ color: "var(--brand-muted)" }}>
              <p className="text-base leading-relaxed">
                Sandhya IT Consulting was founded with a singular purpose: to
                bridge the gap between business ambition and technology
                capability. Over the years, we have grown into a trusted partner
                for enterprises across healthcare, finance, retail, government,
                and manufacturing — delivering solutions that are scalable,
                secure, and built to last.
              </p>
              <p className="text-base leading-relaxed">
                Our team brings deep expertise across cloud infrastructure,
                application development, cybersecurity, data analytics, and IT
                staffing. We don&apos;t believe in one-size-fits-all answers. Every
                engagement begins with listening — understanding your goals,
                constraints, and the unique context of your industry — before
                recommending a path forward.
              </p>
              <p className="text-base leading-relaxed">
                From Fortune 500 enterprises to fast-growing mid-market
                companies, we have helped organizations modernize their
                infrastructure, accelerate their software delivery, and build
                the in-house talent pipelines they need to compete. Technology
                moves fast; we make sure you move faster.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 3. CORE VALUES */}
      <section className="py-20 px-4" style={{ backgroundColor: "var(--brand-gray)" }}>
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <SectionTitle
              title="Our Core Values"
              subtitle="The principles that guide every decision we make and every relationship we build."
              centered
            />
          </Reveal>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {coreValues.map((value, i) => {
              const Icon = value.icon;
              return (
                <Reveal key={value.title} delay={i * 80}>
                  <div className="flex gap-5 p-7 rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div
                      className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: "#EFF4FF" }}
                    >
                      <Icon size={20} style={{ color: "var(--brand-blue)" }} />
                    </div>
                    <div>
                      <h3
                        className="text-lg font-semibold mb-1"
                        style={{ color: "var(--brand-navy)" }}
                      >
                        {value.title}
                      </h3>
                      <p className="text-sm leading-relaxed" style={{ color: "var(--brand-muted)" }}>
                        {value.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. OUR TEAM */}
      <section className="py-20 px-4" style={{ backgroundColor: "white" }}>
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <SectionTitle
              title="Meet Our Team"
              subtitle="The experienced professionals driving results for our clients every day."
              centered
            />
          </Reveal>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {teamPlaceholders.map((member, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="flex flex-col items-center text-center p-8 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow duration-300">
                  {/* Avatar placeholder */}
                  <div
                    className="w-20 h-20 rounded-full mb-4 flex items-center justify-center text-2xl font-bold text-white"
                    style={{
                      background:
                        "linear-gradient(135deg, var(--brand-blue) 0%, var(--brand-navy) 100%)",
                    }}
                  >
                    {member.name[0]}
                  </div>
                  <h3
                    className="text-base font-semibold"
                    style={{ color: "var(--brand-navy)" }}
                  >
                    {member.name}
                  </h3>
                  <p className="text-sm mt-1" style={{ color: "var(--brand-muted)" }}>
                    {member.role}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. TECHNOLOGY PARTNERS */}
      <section className="py-20 px-4" style={{ backgroundColor: "var(--brand-gray)" }}>
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <SectionTitle
              title="Technology Partners"
              subtitle="We work with industry-leading platforms to deliver best-in-class solutions."
              centered
            />
          </Reveal>
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {Array.from({ length: 6 }).map((_, i) => (
              <Reveal key={i} delay={i * 60}>
                <div
                  className="flex items-center justify-center h-20 rounded-xl border border-gray-200 bg-white text-xs font-medium hover:shadow-sm transition-shadow duration-200"
                  style={{ color: "var(--brand-muted)" }}
                >
                  Partner Logo
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
