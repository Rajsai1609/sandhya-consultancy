import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import ResumeSubmissionForm from "@/components/forms/ResumeSubmissionForm";

export const metadata: Metadata = {
  title: `IT Staffing Solutions | ${siteConfig.name}`,
  description:
    "Find top IT talent or your next opportunity. Sandhya IT Consulting connects skilled professionals with leading enterprises.",
  openGraph: {
    title: `IT Staffing Solutions | ${siteConfig.name}`,
    description:
      "Find top IT talent or your next opportunity. Sandhya IT Consulting connects skilled professionals with leading enterprises.",
    url: `${siteConfig.url}/staffing`,
    type: "website",
  },
};

const SERVICES = [
  {
    title: "Permanent Placement",
    description:
      "Long-term hires matched to your culture, skills requirements, and growth trajectory.",
  },
  {
    title: "Contract Staffing",
    description:
      "Vetted contractors ready to contribute from day one — scaled to your project timeline.",
  },
  {
    title: "Contract-to-Hire",
    description:
      "Evaluate talent on the job before converting to full-time — reduce hiring risk.",
  },
  {
    title: "Executive Search",
    description:
      "Discreet search for CTO, VP Engineering, and director-level technology leaders.",
  },
  {
    title: "Staff Augmentation",
    description:
      "Supplement your existing team with specialized engineers exactly when you need them.",
  },
  {
    title: "Managed Teams",
    description:
      "End-to-end team assembly and management so you can focus on your core business.",
  },
];

export default function StaffingPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="py-24 text-white text-center"
        style={{ backgroundColor: "var(--brand-navy)" }}
      >
        <div className="container mx-auto px-6 max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            IT Staffing That Delivers
          </h1>
          <p className="text-lg opacity-80">
            Whether you&apos;re building a team or looking for your next role,
            we connect the right people with the right opportunities.
          </p>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-20" style={{ backgroundColor: "var(--brand-gray)" }}>
        <div className="container mx-auto px-6 max-w-6xl">
          <h2
            className="text-3xl font-bold text-center mb-12"
            style={{ color: "var(--brand-navy)" }}
          >
            Our Staffing Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((s) => (
              <div
                key={s.title}
                className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm"
              >
                <h3
                  className="font-bold text-lg mb-2"
                  style={{ color: "var(--brand-navy)" }}
                >
                  {s.title}
                </h3>
                <p className="text-sm" style={{ color: "var(--brand-muted)" }}>
                  {s.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Submit resume */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-2xl">
          <h2
            className="text-3xl font-bold text-center mb-3"
            style={{ color: "var(--brand-navy)" }}
          >
            Submit Your Resume
          </h2>
          <p
            className="text-center mb-10 text-sm"
            style={{ color: "var(--brand-muted)" }}
          >
            Not seeing the right opening? Send us your resume and we&apos;ll
            reach out when a matching opportunity arises.
          </p>
          <ResumeSubmissionForm />
        </div>
      </section>
    </>
  );
}
