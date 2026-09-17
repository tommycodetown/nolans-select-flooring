import Link from "next/link";
import { siteConfig } from "@/config/site";
import { services } from "@/content/services";

export function SiteFooter() {
  const pageLinks = siteConfig.footer.links.filter((link) => link.id !== "services");

  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <Link href="/" className="wordmark wordmark--footer"><span>Nolan Select</span><strong>Flooring</strong></Link>
        <p>{siteConfig.footer.tagline}</p>
        <nav className="footer-services" aria-label="Services">
          <Link href="/services" className="footer-nav-label">Services</Link>
          {services.map((service) => (
            <Link href={`/services/${service.slug}`} key={service.slug}>{service.title}</Link>
          ))}
        </nav>
        <nav className="footer-pages" aria-label="Footer navigation">
          {pageLinks.map((link) => <Link href={link.href} key={link.id}>{link.label}</Link>)}
        </nav>
      </div>
      <div className="shell footer-base">
        <span>© {new Date().getFullYear()} Nolan Select Flooring</span>
        <div className="footer-base-meta">
          <span className="footer-license">NYC Home Improvement Contractor | DCWP License #2127844</span>
          <span>Maspeth, Queens, New York</span>
        </div>
      </div>
    </footer>
  );
}
