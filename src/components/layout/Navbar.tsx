"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/lib/site-config";
import { FaBars, FaTimes, FaCode } from "react-icons/fa";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const isActive = (href: string) => pathname === href;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-md"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 flex-shrink-0"
          >
            <FaCode
              className="text-xl"
              style={{ color: "var(--brand-blue)" }}
            />
            <span
              className="font-bold text-base leading-tight hidden sm:block"
              style={{ color: "var(--brand-navy)" }}
            >
              Sandhya IT Consulting
            </span>
            <span
              className="font-bold text-base leading-tight sm:hidden"
              style={{ color: "var(--brand-navy)" }}
            >
              Sandhya IT
            </span>
          </Link>

          {/* Desktop nav links */}
          <ul className="hidden lg:flex items-center gap-1">
            {siteConfig.navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`relative px-3 py-2 text-sm font-medium transition-colors duration-200 rounded-md hover:text-[var(--brand-blue)] ${
                    isActive(link.href)
                      ? "text-[var(--brand-blue)]"
                      : "text-[var(--brand-text)]"
                  }`}
                >
                  {link.label}
                  {isActive(link.href) && (
                    <span
                      className="absolute bottom-0 left-3 right-3 h-0.5 rounded-full"
                      style={{ backgroundColor: "var(--brand-blue)" }}
                    />
                  )}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop CTA + mobile hamburger */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden lg:inline-flex items-center px-4 py-2 text-sm font-semibold text-white rounded-full transition-all duration-200 hover:opacity-90 hover:shadow-lg"
              style={{ backgroundColor: "var(--brand-blue)" }}
            >
              Get a Quote
            </Link>

            <button
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              className="lg:hidden p-2 rounded-md transition-colors duration-200 hover:bg-gray-100"
              style={{ color: "var(--brand-navy)" }}
            >
              {mobileOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile dropdown */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          mobileOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
        style={{ backgroundColor: "white" }}
      >
        <ul className="px-4 pb-4 pt-2 flex flex-col gap-1 border-t border-gray-100">
          {siteConfig.navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`flex items-center px-3 py-2.5 text-sm font-medium rounded-md transition-colors duration-200 ${
                  isActive(link.href)
                    ? "text-[var(--brand-blue)] bg-blue-50 border-l-2 border-[var(--brand-blue)]"
                    : "text-[var(--brand-text)] hover:bg-gray-50 hover:text-[var(--brand-blue)]"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="pt-2">
            <Link
              href="/contact"
              className="flex items-center justify-center px-4 py-2.5 text-sm font-semibold text-white rounded-full transition-opacity duration-200 hover:opacity-90"
              style={{ backgroundColor: "var(--brand-blue)" }}
            >
              Get a Quote
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
