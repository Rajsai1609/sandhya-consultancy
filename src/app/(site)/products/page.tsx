import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { FaCheckCircle } from "react-icons/fa";

export const metadata: Metadata = {
  title: `Products | ${siteConfig.name}`,
  description:
    "Enterprise-ready software products by Sandhya IT Consulting — IT Asset Management, HR Staffing CRM, Security Compliance, and more.",
  openGraph: {
    title: `Products | ${siteConfig.name}`,
    description:
      "Enterprise-ready software products by Sandhya IT Consulting — IT Asset Management, HR Staffing CRM, Security Compliance, and more.",
    url: `${siteConfig.url}/products`,
    type: "website",
  },
};

const PRODUCTS = [
  {
    name: "IT Asset Management",
    tagline: "Complete visibility into your IT estate",
    description:
      "Track every hardware and software asset across your organization from procurement to retirement.",
    features: [
      "Automated asset discovery and inventory",
      "License compliance tracking",
      "Lifecycle and depreciation management",
      "Integration with ServiceNow and Jira",
    ],
  },
  {
    name: "Employee Onboarding",
    tagline: "Get new hires productive from day one",
    description:
      "Streamline IT onboarding with automated provisioning, task checklists, and self-service portals.",
    features: [
      "Automated account provisioning",
      "Onboarding task workflows",
      "Equipment request and tracking",
      "Integration with Active Directory & Okta",
    ],
  },
  {
    name: "Security Compliance Dashboard",
    tagline: "Stay audit-ready at all times",
    description:
      "Continuous compliance monitoring for SOC 2, ISO 27001, HIPAA, and other frameworks.",
    features: [
      "Real-time compliance posture scoring",
      "Policy and evidence management",
      "Automated control testing",
      "Audit-ready reports on demand",
    ],
  },
  {
    name: "HR & Staffing CRM",
    tagline: "End-to-end talent pipeline management",
    description:
      "Manage candidates, track placements, and automate client communication in one platform.",
    features: [
      "Candidate sourcing and pipeline",
      "Placement tracking and billing",
      "Client portal with real-time updates",
      "Reporting and commission automation",
    ],
  },
];

export default function ProductsPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="py-24 text-white text-center"
        style={{ backgroundColor: "var(--brand-navy)" }}
      >
        <div className="container mx-auto px-6 max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Enterprise Software Products
          </h1>
          <p className="text-lg opacity-80">
            Purpose-built tools that solve real enterprise IT challenges — ready
            to deploy and scale with your organization.
          </p>
        </div>
      </section>

      {/* Products */}
      <section className="py-20" style={{ backgroundColor: "var(--brand-gray)" }}>
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PRODUCTS.map((p) => (
              <div
                key={p.name}
                className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm flex flex-col"
              >
                <h2
                  className="text-xl font-bold mb-1"
                  style={{ color: "var(--brand-navy)" }}
                >
                  {p.name}
                </h2>
                <p
                  className="text-sm font-medium mb-3"
                  style={{ color: "var(--brand-blue)" }}
                >
                  {p.tagline}
                </p>
                <p
                  className="text-sm mb-5"
                  style={{ color: "var(--brand-muted)" }}
                >
                  {p.description}
                </p>
                <ul className="flex flex-col gap-2 mb-6 flex-1">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-gray-700">
                      <FaCheckCircle
                        size={13}
                        className="mt-0.5 shrink-0"
                        style={{ color: "var(--brand-blue)" }}
                      />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="text-sm font-semibold text-center rounded-lg px-4 py-2.5 transition-colors"
                  style={{ backgroundColor: "var(--brand-navy)", color: "#fff" }}
                >
                  Request Demo
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
