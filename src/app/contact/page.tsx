import type { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { PageFrame } from "@/components/marketing/page-frame";
import { Reveal } from "@/components/marketing/reveal";
import { siteConfig } from "@/config/site";
import { imageRoot } from "@/content/services";
import { createPageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = createPageMetadata({ path: "/contact", title: "Contact Nolan Select Flooring | Maspeth, Queens", description: "Call or email Nolan Select Flooring to discuss flooring work in New York City, Long Island, Westchester, New Jersey and the wider tri-state area.", image: `${imageRoot}/pic 1.webp` });

export default function ContactPage() {
  return (
    <PageFrame>
      <section className="contact-page-hero"><div className="shell contact-page-grid"><Reveal><h1>Contact Us</h1><p>At Nolan Select Flooring, we believe great communication is just as important as great craftsmanship. Whether you&apos;re planning a full flooring installation, need repairs, or simply want expert advice, our team is here to help.</p></Reveal><Reveal className="contact-page-actions"><a href={`tel:${siteConfig.phoneHref}`}><span><Phone aria-hidden />Phone</span><strong>{siteConfig.phone}</strong><ArrowUpRight aria-hidden /></a><a href={`mailto:${siteConfig.email}`}><span><Mail aria-hidden />Email</span><strong>{siteConfig.email}</strong><ArrowUpRight aria-hidden /></a></Reveal></div></section>
      <section className="contact-location"><div className="contact-location-image image-frame"><Image src={`${imageRoot}/pic 1.webp`} alt="Completed hardwood flooring in a New York residence" fill sizes="(max-width: 760px) 100vw, 58vw" /></div><div className="contact-location-copy"><MapPin aria-hidden /><p className="eyebrow">Based in Maspeth, Queens</p><h2>Serving New York and the surrounding region</h2><p>Core service area: New York City, Long Island, Westchester and nearby New Jersey.</p><p>Wider capability includes Connecticut, farther upstate New York and the broader tri-state area where appropriate.</p></div></section>
    </PageFrame>
  );
}
