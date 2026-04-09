export const siteConfig = {
  name: "Sandhya IT Consulting",
  tagline: "Technology Solutions That Drive Business Forward",
  description:
    "Expert IT consulting, staffing, and technology services for enterprises",
  url:
    process.env.NEXT_PUBLIC_SITE_URL || "https://sandhyaitconsulting.com",
  contact: {
    email: "info@sandhyaitconsulting.com",
    phone: "+1 (XXX) XXX-XXXX",
    address: "Your address here",
  },
  social: {
    linkedin: "",
    twitter: "",
    facebook: "",
  },
  navLinks: [
    { label: "Services", href: "/services" },
    { label: "Industries", href: "/industries" },
    { label: "Staffing", href: "/staffing" },
    { label: "Products", href: "/products" },
    { label: "Academy", href: "/academy" },
    { label: "Careers", href: "/careers" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
