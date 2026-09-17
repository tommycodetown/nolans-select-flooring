import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { ContactBand } from "@/components/marketing/contact-band";
import { InternalHero } from "@/components/marketing/internal-hero";
import { PageFrame } from "@/components/marketing/page-frame";
import { SectionSwoopReveal } from "@/components/marketing/section-swoop-reveal";
import { createPageMetadata } from "@/lib/page-metadata";
import { serviceBySlug, services } from "@/content/services";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() { return services.map(({ slug }) => ({ slug })); }
export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = serviceBySlug[slug];
  if (!service) return {};
  return createPageMetadata({ path: `/services/${service.slug}`, title: `${service.title} NYC | Nolan Select Flooring`, description: service.seoDescription, image: service.heroImage });
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = serviceBySlug[slug];
  if (!service) notFound();
  const next = services[(services.indexOf(service) + 1) % services.length];

  return (
    <PageFrame>
      <InternalHero eyebrow={`${service.number} / Services`} title={service.title} intro={service.intro} image={service.heroImage} alt={service.heroAlt} back={{ href: "/services", label: "All services" }} variant={service.mode === "custom" ? "wide" : "split"} objectPosition={service.imagePosition} />

      <section className={`service-handles service-handles--${service.mode} section`}>
        <SectionSwoopReveal key={`${service.slug}-handles`} resetKey={`${service.slug}-handles`} variant="handles" className="shell service-handles-grid">
          <div className="service-handles-copy">
            <h2>{service.handlesTitle}</h2>
            <p>{service.handlesIntro}</p>
          </div>
          <div className="capability-list">
            {service.capabilities.map((capability, index) => (
              <div key={capability.title}>
                <span>0{index + 1}</span>
                <h3>{capability.title}</h3>
                <p>{capability.text}</p>
              </div>
            ))}
          </div>
        </SectionSwoopReveal>
      </section>

      <section className="next-service"><div className="shell"><span className="eyebrow">Next service</span><Link href={`/services/${next.slug}`}><strong>{next.title}</strong><ArrowUpRight aria-hidden /></Link></div></section>
      <ContactBand />
    </PageFrame>
  );
}
