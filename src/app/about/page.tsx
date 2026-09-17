import type { Metadata } from "next";
import Image from "next/image";
import { ContactBand } from "@/components/marketing/contact-band";
import { AboutHero } from "@/components/marketing/about-hero";
import { PageFrame } from "@/components/marketing/page-frame";
import { Reveal } from "@/components/marketing/reveal";
import { imageRoot } from "@/content/services";
import { createPageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = createPageMetadata({ path: "/about", title: "About Nolan Select Flooring | New York Flooring Contractors", description: "Family-run New York flooring contractor established in 1989, with experienced long-standing crews and residential, commercial and custom capability.", image: `${imageRoot}/Aidan stand.png` });

export default function AboutPage() {
  return (
    <PageFrame>
      <AboutHero
        eyebrow="About Nolan"
        title="Built on experience. Carried forward."
        intro="Nolan Select Flooring has been working across New York since 1989. Today, John Nolan runs the business alongside his son Aidan, with a long-standing crew whose experience has been built over decades on the job."
        image={`${imageRoot}/Aidan stand.png`}
        alt="Nolan team members discussing work on a New York job site"
      />
      <section className="about-story section">
        <div className="shell about-story-grid">
        <div className="about-story-media">
          <div className="about-story-photo image-frame">
            <Image
              src={`${imageRoot}/subfloor-preparation.webp`}
              alt="Nolan crew preparing a subfloor on a New York job site"
              fill
              sizes="(max-width: 760px) 100vw, 28vw"
              className="about-story-photo-image"
            />
          </div>
        </div>
        <Reveal className="about-story-copy">
            <h2>The difference shows when the work demands more</h2>
            <div className="about-copy-columns">
              <p>
                We have worked across all types of residential, property management and commercial flooring projects throughout New York. That range of experience matters when existing floors are damaged, site conditions are difficult or the work calls for something beyond a straightforward installation.
              </p>
              <p>
                Some of our crew have been with the company for 25–30 years. Keeping decades of practical flooring knowledge within the team. Allowing our team to always deliver the best quality work no matter what the conditions
              </p>
            </div>
          </Reveal>
        </div>
      </section>
      <section className="working-method section">
        <div className="shell working-method-grid">
          <Reveal className="working-method-images">
            <div className="working-method-photo image-frame">
              <Image
                src={`${imageRoot}/Subfloor.JPG`}
                alt="Nolan crew preparing a subfloor on a New York job site"
                fill
                sizes="(max-width: 760px) 100vw, 420px"
                className="working-method-photo-image"
              />
            </div>
          </Reveal>
          <Reveal className="working-method-copy">
            <h2>Why Nolan Select Flooring</h2>
            <p>
              What sets us apart is our commitment to clients. Every project, no matter the size, is treated with the same level of care and priority. We understand that flooring is not just a surface, it&apos;s the foundation of a home or business. That&apos;s why we focus on delivering results that are not only beautiful, but also durable and long-lasting.
            </p>
            <p>
              Whether you are a landlord, homeowner, or business owner, choosing Nolan Select Flooring means choosing peace of mind. Our team takes the stress out of flooring projects, providing professional guidance every step of the way. With us, you can be confident that the job will be done right, the first time, every time.
            </p>
          </Reveal>
        </div>
      </section>
      <ContactBand />
    </PageFrame>
  );
}
