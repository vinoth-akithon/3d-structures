// Site configuration
export const SITE = {
  title: "3D Structure | Australia",
  description:
    "Precision structural steel 3D modeling, shop drawings, and erection detailing services using Tekla Structures. Serving Australian steel fabricators, EPC contractors, and structural consultants.",
  url: "https://3dstructure.com.au",
  author: "3D Structure",
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
  linkedin: "https://www.linkedin.com/company/3dstructure",
  twitter: "https://twitter.com/3dstructure",
  facebook: "https://facebook.com/3dstructure",
} as const;

export const CONTACT_INFO = {
  companyName: "3D Structure",
  locations: ["42b synnot street werribee, Australia"],
  country: "Australia",
  email: "info@3dstructure.com.au",
  phone: "", // Placeholder — update with AU contact number
} as const;
