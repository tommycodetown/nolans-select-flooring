import type { Metadata } from "next";
import Link from "next/link";
import { PageFrame } from "@/components/marketing/page-frame";
import { Reveal } from "@/components/marketing/reveal";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: `Page not found | ${siteConfig.name}`,
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <PageFrame>
      <section className="section not-found">
        <div className="shell not-found-grid">
          <Reveal>
            <p className="eyebrow">404</p>
            <h1>Page not found</h1>
            <p>
              The page you are looking for does not exist or may have moved. Use the links below to continue browsing the site.
            </p>
          </Reveal>
          <Reveal className="not-found-links">
            <Link href="/" className="button button--dark">
              Home
            </Link>
            <Link href="/services" className="button button--dark">
              Services
            </Link>
            <Link href="/contact" className="button button--dark">
              Contact
            </Link>
          </Reveal>
        </div>
      </section>
    </PageFrame>
  );
}
