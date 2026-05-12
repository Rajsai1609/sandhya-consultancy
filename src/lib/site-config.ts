export type NavChild = {
  label: string;
  href: string;
  external?: boolean;
};

export type NavLink = {
  label: string;
  href: string;
  children?: NavChild[];
};

export const siteConfig = {
  name: "Sandhya IT Consulting",
  tagline: "AI-Powered Staffing, Consulting & Career Automation",
  description:
    "AI-Powered Staffing, Consulting & Career Automation. We help students land jobs with AI and help businesses scale with intelligent automation.",
  url:
    process.env.NEXT_PUBLIC_SITE_URL || "https://sandhyaitconsulting.com",
  contact: {
    email: "info@sandhyaitconsulting.com",
    phone: "+44 7448 332830",
    address: "London, United Kingdom",
    businessHours: "Mon–Fri 9am–6pm GMT",
  },
  social: {
    linkedin: "",
    twitter: "",
    facebook: "",
  },
  navLinks: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "AI Products", href: "/ai-products" },
    { label: "Academy", href: "/academy" },
    { label: "Careers", href: "/careers" },
    { label: "For Employees", href: "/for-employees" },
    { label: "Staffing", href: "/staffing" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ] as NavLink[],
};

export type SiteConfig = typeof siteConfig;
