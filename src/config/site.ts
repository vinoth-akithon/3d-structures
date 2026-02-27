// Site configuration
export const SITE = {
  title: "Duinz",
  description:
    "Precision structural steel 3D modeling, shop drawings, and erection detailing services using Tekla Structures.",
  url: "https://vinoth-akithon.github.io/steel_detail",
  author: "Duinz",
} as const;

export const NAVIGATION = [
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Services", href: "/services" },
  { name: "Technology", href: "/technology" },
  { name: "Careers", href: "/careers" },
  { name: "Contact", href: "/contact" },
] as const;

export const SOCIAL_LINKS = {
  linkedin: "https://linkedin.com/company/duinz-engineering",
  twitter: "https://twitter.com/duinzengineering",
  facebook: "https://facebook.com/duinzengineering",
} as const;

export const CONTACT_INFO = {
  companyName: "Duinz Engineering Services Pvt Ltd",
  locations: ["Tiruchirappalli", "Pattukkottai", "Kochi"],
  country: "India",
  email: "info@duinz.com",
  phone: "+91 000 000 0000", // Placeholder as not provided
} as const;
