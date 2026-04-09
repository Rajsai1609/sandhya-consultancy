import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: `Terms and Conditions | ${siteConfig.name}`,
  description: "Read the Terms and Conditions for Sandhya IT Consulting.",
  robots: { index: false, follow: false },
};

const SECTIONS = [
  {
    title: "1. Acceptance of Terms",
    content:
      "By accessing or using the Sandhya IT Consulting website and services, you agree to be bound by these Terms and Conditions. If you do not agree, please do not use our services.",
  },
  {
    title: "2. Use of Services",
    content:
      "You agree to use our services only for lawful purposes and in a manner that does not infringe the rights of others. You must not misuse our services or attempt to access them using a method other than the interface we provide.",
  },
  {
    title: "3. Intellectual Property",
    content:
      "All content on this website, including text, graphics, logos, and software, is the property of Sandhya IT Consulting and is protected by applicable intellectual property laws. You may not reproduce or distribute any content without our written permission.",
  },
  {
    title: "4. Limitation of Liability",
    content:
      "To the maximum extent permitted by law, Sandhya IT Consulting shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of or inability to use our services.",
  },
  {
    title: "5. Modifications",
    content:
      "We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting. Your continued use of our services after any changes constitutes your acceptance of the new Terms.",
  },
  {
    title: "6. Contact Us",
    content: `If you have questions about these Terms, please contact us at ${siteConfig.contact.email}.`,
  },
];

export default function TermsAndConditionsPage() {
  return (
    <div className="py-20" style={{ backgroundColor: "var(--brand-gray)" }}>
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="bg-white rounded-xl p-10 border border-gray-100 shadow-sm">
          <h1
            className="text-3xl font-bold mb-2"
            style={{ color: "var(--brand-navy)" }}
          >
            Terms and Conditions
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
