// Site configuration
export const SITE = {
  title: 'Esskay Structures',
  description: 'Precision structural steel 3D modeling, shop drawings, and erection detailing services using Tekla Structures.',
  url: 'https://yourdomain.com',
  author: 'Esskay Structures',
} as const;

export const NAVIGATION = [
  { name: 'About us', href: '/about' },
  { name: 'Projects', href: '/projects' },
  { name: 'Services', href: '/services' },
  { name: 'Contact', href: '/contact' },
] as const;

export const SOCIAL_LINKS = {
  linkedin: 'https://linkedin.com/company/yourcompany',
  twitter: 'https://twitter.com/yourcompany',
  facebook: 'https://facebook.com/yourcompany',
} as const;

