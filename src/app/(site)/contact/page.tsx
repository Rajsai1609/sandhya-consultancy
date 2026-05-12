import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import ContactForm from "@/components/forms/ContactForm";

export const metadata: Metadata = {
  title: `Contact Us | ${siteConfig.name}`,
  description:
    "Get in touch with Sandhya IT Consulting. We're ready to discuss your technology needs and how we can help.",
  openGraph: {
    title: `Contact Us | ${siteConfig.name}`,
    description:
      "Get in touch with Sandhya IT Consulting. We're ready to discuss your technology needs and how we can help.",
    url: `${siteConfig.url}/contact`,
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="py-24 text-white text-center"
        style={{ backgroundColor: "var(--brand-navy)" }}
      >
        <div className="container mx-auto px-6 max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h1>
          <p className="text-lg opacity-80">
            Have a project in mind? We&apos;d love to hear from you.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact info */}
            <div className="flex flex-col gap-8">
              <div>
                <h2
                  className="text-xl font-bold mb-6"
                  style={{ color: "var(--brand-navy)" }}
                >
                  Contact Information
                </h2>
                <div className="flex flex-col gap-5">
                  <div className="flex items-start gap-3">
                    <FaEnvelope
                      size={16}
                      className="mt-1 shrink-0"
                      style={{ color: "var(--brand-blue)" }}
                    />
                    <div>
                      <p className="text-sm font-medium text-gray-900">Email</p>
                      <a
                        href={`mailto:${siteConfig.contact.email}`}
                        className="text-sm"
                        style={{ color: "var(--brand-blue)" }}
                      >
                        {siteConfig.contact.email}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <FaPhone
                      size={16}
                      className="mt-1 shrink-0"
                      style={{ color: "var(--brand-blue)" }}
                    />
                    <div>
                      <p className="text-sm font-medium text-gray-900">Phone</p>
                      <a
                        href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`}
                        className="text-sm"
                        style={{ color: "var(--brand-blue)" }}
                      >
                        {siteConfig.contact.phone}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <FaMapMarkerAlt
                      size={16}
                      className="mt-1 shrink-0"
                      style={{ color: "var(--brand-blue)" }}
                    />
                    <div>
                      <p className="text-sm font-medium text-gray-900">Address</p>
                      <p className="text-sm text-gray-600">
                        {siteConfig.contact.address}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
