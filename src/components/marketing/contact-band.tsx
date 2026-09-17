import { ArrowUpRight, Mail, Phone } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Reveal } from "./reveal";

export function ContactBand() {
  return (
    <section className="contact section" id="contact" aria-labelledby="contact-title">
      <div className="shell contact-grid">
        <Reveal>
          <p className="eyebrow eyebrow--light">Start a conversation</p>
          <h2 id="contact-title">Tell us what the project needs.</h2>
          <p>For a repair, a full installation or technically detailed custom work, speak directly with us by phone or email.</p>
        </Reveal>
        <Reveal className="contact-actions">
          <a href={`tel:${siteConfig.phoneHref}`}><span><Phone aria-hidden />Call</span><strong>{siteConfig.phone}</strong><ArrowUpRight aria-hidden /></a>
          <a href={`mailto:${siteConfig.email}`}><span><Mail aria-hidden />Email</span><strong>{siteConfig.email}</strong><ArrowUpRight aria-hidden /></a>
        </Reveal>
      </div>
    </section>
  );
}
