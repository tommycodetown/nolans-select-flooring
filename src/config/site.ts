export const siteConfig = {
  name: "Nolan Select Flooring",
  legalName: "Nolan Treanor Select Floors LLC",
  description: "Established New York flooring contractor for hardwood installation, refinishing, repair, stairs, LVT and custom decorative work.",
  email: "John@NolanTFloors.com",
  phone: "212-879-2436",
  phoneHref: "+12128792436",
  location: "Maspeth, Queens, New York",
  socialImage: "/images/nolans floors photos/pic 1.webp",
  navigation: [
    { id: "home", label: "Home", href: "/" },
    { id: "services", label: "Services", href: "/services" },
    { id: "projects", label: "Projects", href: "/projects" },
    { id: "about", label: "About", href: "/about" },
    { id: "contact", label: "Contact", href: "/contact" },
  ] as readonly { id: string; label: string; href: string }[],
  primaryCta: {
    label: "Call 212-879-2436",
    href: "/contact",
  },
  footer: {
    tagline: "Flooring contractors serving New York City and the tri-state area",
    links: [
      { id: "services", label: "Services", href: "/services" },
      { id: "projects", label: "Projects", href: "/projects" },
      { id: "about", label: "About", href: "/about" },
      { id: "contact", label: "Contact", href: "/contact" },
      { id: "privacy", label: "Privacy", href: "/privacy" },
    ] as readonly { id: string; label: string; href: string }[],
  },
};
