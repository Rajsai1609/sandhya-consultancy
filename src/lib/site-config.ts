export const siteConfig = {
  name: "Sandhya IT Consulting",
  tagline: "AI-Powered Staffing, Consulting & Career Automation",
  description:
    "We help students land jobs faster with AI career automation, and help businesses scale with intelligent automation and multi-agent systems.",
  url:
    process.env.NEXT_PUBLIC_SITE_URL || "https://sandhyaitconsulting.com",
  contact: {
    email: "info@sandhyaitconsulting.com",
    phone: "+44 (XXX) XXX-XXXX",
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
    { label: "Academy", href: "/academy" },
    { label: "Careers", href: "/careers" },
    { label: "Staffing", href: "/staffing" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
