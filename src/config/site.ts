// Site configuration
export const SITE = {
  title: "Duinz Engineering Services | Australia",
  description:
    "Precision structural steel 3D modeling, shop drawings, and erection detailing services using Tekla Structures. Serving Australian steel fabricators, EPC contractors, and structural consultants.",
  url: "https://duinzengineering.com.au",
  author: "Duinz Engineering Services",
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
  linkedin: "https://www.linkedin.com/company/duinz-engineering-services-pvt-ltd",
  twitter: "https://twitter.com/duinzengineering",
  facebook: "https://facebook.com/duinzengineering",
} as const;

export const CONTACT_INFO = {
  companyName: "Duinz Engineering Services",
  locations: ["42b synnot street werribee, Australia"],
  country: "Australia",
  email: "info@3dstructure.com.au",
  phone: "", // Placeholder — update with AU contact number
} as const;
