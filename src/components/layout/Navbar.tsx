"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/lib/site-config";
import type { NavLink } from "@/lib/site-config";
import { FaBars, FaTimes, FaCode, FaChevronDown } from "react-icons/fa";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const pathname = usePathname();
  const [prevPathname, setPrevPathname] = useState(pathname);

  // Reset mobile state when route changes (during render avoids useEffect setState)
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    if (mobileOpen) setMobileOpen(false);
    if (mobileExpanded !== null) setMobileExpanded(null);
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) => pathname === href;

  const isParentActive = (link: NavLink): boolean =>
    isActive(link.href) ||
    (link.children?.some((c) => isActive(c.href)) ?? false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
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
            {siteConfig.navLinks.map((link) =>
              link.children ? (
                <li
                  key={link.href}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(link.href)}
                  onMouseLeave={() => setOpenDropdown(null)}
                  onBlur={(e) => {
                    if (!e.currentTarget.contains(e.relatedTarget as Node)) {
                      setOpenDropdown(null);
                    }
                  }}
                >
                  <button
                    aria-haspopup="true"
                    aria-expanded={openDropdown === link.href}
                    onClick={() =>
                      setOpenDropdown((prev) =>
                        prev === link.href ? null : link.href
                      )
                    }
                    onKeyDown={(e) => {
                      if (e.key === "Escape") setOpenDropdown(null);
                    }}
                    className={`flex items-center gap-1.5 px-3 py-2 text-sm font-medium transition-colors duration-200 rounded-md hover:text-[var(--brand-blue)] ${
                      isParentActive(link)
                        ? "text-[var(--brand-blue)]"
                        : "text-[var(--brand-text)]"
                    }`}
                  >
                    {link.label}
                    <FaChevronDown
                      size={10}
                      className={`transition-transform duration-200 ${
                        openDropdown === link.href ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {openDropdown === link.href && (
                    <div
                      role="menu"
                      className="absolute top-full left-0 mt-1 w-52 rounded-xl shadow-lg border border-gray-100 bg-white py-1 z-50"
                    >
                      <Link
                        href={link.href}
                        role="menuitem"
                        className="block px-4 py-2.5 text-sm font-medium text-[var(--brand-text)] hover:text-[var(--brand-blue)] hover:bg-blue-50 transition-colors duration-150"
                      >
                        {link.label}
                      </Link>
                      {link.children.map((child) =>
                        child.external ? (
                          <a
                            key={child.href}
                            href={child.href}
                            role="menuitem"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 px-4 py-2.5 text-sm font-medium text-[var(--brand-text)] hover:text-[var(--brand-blue)] hover:bg-blue-50 transition-colors duration-150"
                          >
                            {child.label}
                            <span className="text-xs opacity-60">↗</span>
                          </a>
                        ) : (
                          <Link
                            key={child.href}
                            href={child.href}
                            role="menuitem"
                            className="block px-4 py-2.5 text-sm font-medium text-[var(--brand-text)] hover:text-[var(--brand-blue)] hover:bg-blue-50 transition-colors duration-150"
                          >
                            {child.label}
                          </Link>
                        )
                      )}
                    </div>
                  )}
                </li>
              ) : (
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
              )
            )}
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
          {siteConfig.navLinks.map((link) =>
            link.children ? (
              <li key={link.href}>
                <button
                  onClick={() =>
                    setMobileExpanded((prev) =>
                      prev === link.href ? null : link.href
                    )
                  }
                  aria-haspopup="true"
                  aria-expanded={mobileExpanded === link.href}
                  className={`flex items-center justify-between w-full px-3 py-2.5 text-sm font-medium rounded-md transition-colors duration-200 ${
                    isParentActive(link)
                      ? "text-[var(--brand-blue)] bg-blue-50 border-l-2 border-[var(--brand-blue)]"
                      : "text-[var(--brand-text)] hover:bg-gray-50 hover:text-[var(--brand-blue)]"
                  }`}
                >
                  {link.label}
                  <FaChevronDown
                    size={10}
                    className={`transition-transform duration-200 ${
                      mobileExpanded === link.href ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {mobileExpanded === link.href && (
                  <ul className="ml-3 mt-1 flex flex-col gap-0.5 border-l-2 border-gray-100 pl-3">
                    <li>
                      <Link
                        href={link.href}
                        className="flex items-center px-2 py-2 text-sm text-[var(--brand-text)] hover:text-[var(--brand-blue)] transition-colors duration-200"
                      >
                        {link.label}
                      </Link>
                    </li>
                    {link.children.map((child) => (
                      <li key={child.href}>
                        {child.external ? (
                          <a
                            href={child.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 px-2 py-2 text-sm text-[var(--brand-text)] hover:text-[var(--brand-blue)] transition-colors duration-200"
                          >
                            {child.label}
                            <span className="text-xs opacity-60">↗</span>
                          </a>
                        ) : (
                          <Link
                            href={child.href}
                            className="flex items-center px-2 py-2 text-sm text-[var(--brand-text)] hover:text-[var(--brand-blue)] transition-colors duration-200"
                          >
                            {child.label}
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ) : (
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
            )
          )}
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
