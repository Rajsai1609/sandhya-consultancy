"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FaChartBar,
  FaBriefcase,
  FaFileAlt,
  FaCode,
  FaExternalLinkAlt,
} from "react-icons/fa";

const navLinks = [
  { label: "Dashboard", href: "/admin", icon: FaChartBar, exact: true },
  { label: "Jobs", href: "/admin/jobs", icon: FaBriefcase, exact: false },
  { label: "Applications", href: "/admin/applications", icon: FaFileAlt, exact: false },
];

function Sidebar() {
  const pathname = usePathname();

  return (
    <aside
      className="fixed top-0 left-0 h-screen w-60 flex flex-col z-50"
      style={{ backgroundColor: "var(--brand-navy)" }}
    >
      {/* Brand */}
      <div className="flex items-center gap-2.5 px-6 py-5 border-b border-white/10">
        <FaCode size={18} style={{ color: "var(--brand-blue)" }} />
        <span className="text-base font-bold text-white tracking-wide">
          SIC Admin
        </span>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 py-4 flex flex-col gap-1">
        {navLinks.map(({ label, href, icon: Icon, exact }) => {
          const isActive = exact ? pathname === href : pathname.startsWith(href);
          return (
            <Link
              key={href}
              href={href}
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors duration-150"
              style={{
                backgroundColor: isActive ? "rgba(26,108,246,0.18)" : "transparent",
                color: isActive ? "var(--brand-blue-light)" : "#94A3B8",
              }}
            >
              <Icon size={15} />
              {label}
            </Link>
          );
        })}
      </nav>

      {/* View Site */}
      <div className="px-3 pb-5 border-t border-white/10 pt-4">
        <Link
          href="/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors duration-150 hover:bg-white/5"
          style={{ color: "#64748B" }}
        >
          <FaExternalLinkAlt size={13} />
          View Site
        </Link>
      </div>
    </aside>
  );
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex" style={{ backgroundColor: "#F1F5F9" }}>
      <Sidebar />
      <main className="flex-1 ml-60 p-8 min-h-screen">{children}</main>
    </div>
  );
}
