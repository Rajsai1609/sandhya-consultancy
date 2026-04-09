import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: `Privacy Policy | ${siteConfig.name}`,
  description: "Read the Privacy Policy for Sandhya IT Consulting.",
  robots: { index: false, follow: false },
};

const SECTIONS = [
  {
    title: "1. Information We Collect",
    content:
      "We collect information you provide directly to us, such as when you fill out a contact form, apply for a job, or submit your resume. This may include your name, email address, phone number, company name, and any other information you choose to provide.",
  },
  {
    title: "2. How We Use Your Information",
    content:
      "We use the information we collect to respond to your inquiries, process job applications, send you relevant communications about our services, and improve our website and offerings. We do not sell your personal information to third parties.",
  },
  {
    title: "3. Information Sharing",
    content:
      "We may share your information with service providers who assist us in operating our website and conducting our business, provided those parties agree to keep this information confidential. We may also disclose your information if required by law.",
  },
  {
    title: "4. Data Retention",
    content:
      "We retain your personal information for as long as necessary to fulfill the purposes for which it was collected, comply with legal obligations, resolve disputes, and enforce our agreements.",
  },
  {
    title: "5. Security",
    content:
      "We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no internet transmission is completely secure.",
  },
  {
    title: "6. Contact Us",
    content: `If you have questions about this Privacy Policy, please contact us at ${siteConfig.contact.email}.`,
  },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="py-20" style={{ backgroundColor: "var(--brand-gray)" }}>
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="bg-white rounded-xl p-10 border border-gray-100 shadow-sm">
          <h1
            className="text-3xl font-bold mb-2"
            style={{ color: "var(--brand-navy)" }}
          >
            Privacy Policy
          </h1>
          <p className="text-sm text-gray-500 mb-10">
            Last updated: {new Date().getFullYear()}
          </p>
          <div className="flex flex-col gap-8">
            {SECTIONS.map((s) => (
              <div key={s.title}>
                <h2
                  className="text-lg font-bold mb-2"
                  style={{ color: "var(--brand-navy)" }}
                >
                  {s.title}
                </h2>
                <p className="text-sm leading-relaxed text-gray-700">
                  {s.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
