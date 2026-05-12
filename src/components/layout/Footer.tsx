import Image from "next/image";
import Link from "next/link";
import { FaLinkedin, FaTwitter, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { siteConfig } from "@/lib/site-config";

const serviceLinks = [
  { label: "Cloud Migration", href: "/services/cloud-migration" },
  { label: "Staff Augmentation", href: "/services/staff-augmentation" },
  { label: "DevOps & CI/CD", href: "/services/devops-cicd" },
  { label: "Data & Analytics", href: "/services/data-analytics" },
  { label: "Cybersecurity", href: "/services/cybersecurity" },
  { label: "Application Development", href: "/services/application-development" },
];

const companyLinks = [
  { label: "About", href: "/about" },
  { label: "Careers", href: "/careers" },
  { label: "Academy", href: "/academy" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: "var(--brand-navy)" }}>
      {/* Main grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Col 1 — Brand */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/logo.jpg"
                alt="Sandhya IT Consulting"
                width={56}
                height={56}
                className="h-14 w-14 rounded-full object-cover"
              />
              <span className="font-bold text-white text-base leading-tight">
                Sandhya IT Consulting
              </span>
            </Link>
            <p className="text-sm leading-relaxed" style={{ color: "#94A3B8" }}>
              {siteConfig.tagline}
            </p>
            <div className="flex items-center gap-3 mt-1">
              {siteConfig.social.linkedin && (
                <a
                  href={siteConfig.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="text-gray-400 transition-colors duration-200 hover:text-[var(--brand-blue)]"
                >
                  <FaLinkedin size={20} />
                </a>
              )}
              {siteConfig.social.twitter && (
                <a
                  href={siteConfig.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                  className="text-gray-400 transition-colors duration-200 hover:text-[var(--brand-blue)]"
                >
                  <FaTwitter size={20} />
                </a>
              )}
              {/* Fallback when social links are not yet configured */}
              {!siteConfig.social.linkedin && !siteConfig.social.twitter && (
                <div className="flex gap-3">
                  <span className="text-gray-600 cursor-not-allowed"><FaLinkedin size={20} /></span>
                  <span className="text-gray-600 cursor-not-allowed"><FaTwitter size={20} /></span>
                </div>
              )}
            </div>
          </div>

          {/* Col 2 — Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Services
            </h3>
            <ul className="flex flex-col gap-2">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors duration-200 hover:text-[var(--brand-blue)]"
                    style={{ color: "#94A3B8" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Company */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Company
            </h3>
            <ul className="flex flex-col gap-2">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors duration-200 hover:text-[var(--brand-blue)]"
                    style={{ color: "#94A3B8" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Contact
            </h3>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="flex items-start gap-2 text-sm transition-colors duration-200 hover:text-[var(--brand-blue)]"
                  style={{ color: "#94A3B8" }}
                >
                  <FaEnvelope size={14} className="mt-0.5 flex-shrink-0" />
                  {siteConfig.contact.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`}
                  className="flex items-start gap-2 text-sm transition-colors duration-200 hover:text-[var(--brand-blue)]"
                  style={{ color: "#94A3B8" }}
                >
                  <FaPhone size={14} className="mt-0.5 flex-shrink-0" />
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li>
                <span
                  className="flex items-start gap-2 text-sm"
                  style={{ color: "#94A3B8" }}
                >
                  <FaMapMarkerAlt size={14} className="mt-0.5 flex-shrink-0" />
                  {siteConfig.contact.address}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs" style={{ color: "#64748B" }}>
            &copy; {year} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="/privacy"
              className="text-xs transition-colors duration-200 hover:text-[var(--brand-blue)]"
              style={{ color: "#64748B" }}
            >
              Privacy Policy
            </Link>
            <span style={{ color: "#64748B" }}>·</span>
            <Link
              href="/terms"
              className="text-xs transition-colors duration-200 hover:text-[var(--brand-blue)]"
              style={{ color: "#64748B" }}
            >
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
