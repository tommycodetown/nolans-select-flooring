import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ContactBand } from "@/components/marketing/contact-band";
import { PageFrame } from "@/components/marketing/page-frame";
import { Reveal } from "@/components/marketing/reveal";
import { createPageMetadata } from "@/lib/page-metadata";
import { imageRoot, services } from "@/content/services";

export const metadata: Metadata = createPageMetadata({
  path: "/services",
  title: "Flooring Services in New York | Nolan Select Flooring",
  description: "Explore Nolan Select Flooring services: hardwood installation, sanding and refinishing, repair, LVT, hardwood stairs, and custom decorative flooring.",
  image: `${imageRoot}/Hardwood Flooring Installation.webp`,
});

export default function ServicesPage() {
  return (
    <PageFrame>
      <section className="services-hero" aria-labelledby="services-hero-title">
        <div className="services-hero-media image-frame">
          <Image src={`${imageRoot}/video.webp`} alt="Nolan team reviewing a decorative floor layout on site" fill priority sizes="100vw" />
          <div className="services-hero-overlay" aria-hidden="true" />
          <div className="shell services-hero-copy">
            <h1 id="services-hero-title">Flooring services for projects of every scale</h1>
          </div>
        </div>
      </section>

      <section className="services-index section" aria-labelledby="services-index-title">
        <div className="shell">
          <Reveal className="services-index-intro">
            <h2 id="services-index-title">Choose the work the project needs.</h2>
            <div className="services-index-lede">
              <p>We handle the full job, from subfloor preparation through to the final finish.</p>
              <p>We handle all residential, commercial, managed property work, and detailed custom flooring.</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="services-routes section" aria-label="Service list">
        <div className="shell">
          <div className="service-route-list">
            {services.map((service) => (
              <Reveal className="service-route" key={service.slug}>
                <Link href={`/services/${service.slug}`} className="service-route-media image-frame"><Image src={service.heroImage} alt={service.heroAlt} fill sizes="(max-width: 760px) 100vw, 28vw" style={service.imagePosition ? { objectPosition: service.imagePosition } : undefined} /></Link>
                <span>{service.number}</span>
                <div><h2><Link href={`/services/${service.slug}`}>{service.title}</Link></h2><p>{service.intro}</p></div>
                <Link href={`/services/${service.slug}`} aria-label={`Explore ${service.title}`} className="route-arrow"><ArrowUpRight aria-hidden /></Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="capability-band section" aria-labelledby="capability-band-title">
        <div className="shell capability-band-grid">
          <Reveal className="capability-band-photo">
            <Image
              src={`${imageRoot}/Levelling .jpg`}
              alt="Installers laying wood sleepers to level a subfloor"
              width={414}
              height={414}
              sizes="(max-width: 760px) 100vw, 480px"
              style={{ width: "100%", height: "auto" }}
            />
          </Reveal>
          <Reveal className="capability-band-copy">
            <p className="eyebrow">Supporting capability</p>
            <h2 id="capability-band-title">More than the finished floor</h2>
            <div className="capability-columns">
              <div>
                <h3>Subfloor work</h3>
                <p>Preparation, repair and leveling where the existing conditions require it.</p>
              </div>
              <div>
                <h3>Existing floor integration</h3>
                <p>Matching new work into existing flooring, thresholds, adjoining rooms and stairs.</p>
              </div>
              <div>
                <h3>Custom finishing</h3>
                <p>Custom finishing for floors that require a particular colour, character or finish.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <ContactBand />
    </PageFrame>
  );
}
