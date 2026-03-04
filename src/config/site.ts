// Site configuration
export const SITE = {
  title: "Duinz Engineering Services Pvt Ltd",
  description:
    "Precision structural steel 3D modeling, shop drawings, and erection detailing services using Tekla Structures.",
  url: "https://duinzengineering.com",
  author: "Duinz Engineering Services Pvt Ltd",
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
  companyName: "Duinz Engineering Services Pvt Ltd",
  locations: ["Tiruchirappalli, India"],
  country: "India",
  email: "info@duinzengineering.com",
  phone: "+91 000 000 0000", // Placeholder as not provided
} as const;
