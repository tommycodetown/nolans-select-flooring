import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Building2, Calendar, MapPin } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { SiteHeader } from "@/components/marketing/site-header";
import { SiteFooter } from "@/components/marketing/site-footer";
import { ContactBand } from "@/components/marketing/contact-band";
import { ProjectEntry } from "@/components/marketing/project-entry";
import { Reveal } from "@/components/marketing/reveal";
import { SectionSwoopReveal } from "@/components/marketing/section-swoop-reveal";
import { ServiceExplorer } from "@/components/marketing/service-explorer";
import { siteConfig } from "@/config/site";
import { homeProjects } from "@/content/projects";
import { createPageMetadata } from "@/lib/page-metadata";

const homeProjectLayouts: Array<{ reverse?: boolean; layout?: "pair" | "narrow" }> = [
  {},
  { reverse: true },
  { layout: "narrow" },
];

const imageRoot = "/images/nolans floors photos";
type HeroStat =
  | { label: string; icon: LucideIcon }
  | { label: string; iconSrc: string };

const heroStats: HeroStat[] = [
  { icon: Calendar, label: "Since 1989" },
  { icon: Building2, label: "Residential & Commercial" },
  { iconSrc: "/images/icons/custom-flooring.png?v=4", label: "Custom Flooring" },
  { icon: MapPin, label: "Regional Coverage" },
];

export const metadata: Metadata = createPageMetadata({
  path: "/",
  title: "Nolan Select Flooring | New York Flooring Contractor",
  description: siteConfig.description,
  image: `${imageRoot}/1hero.JPG`,
});

export default function Home() {
  return (
    <>
      <main id="main-content">
        <SiteHeader />
        <div className="hero-shell">
          <section className="hero hero--fullscreen" aria-labelledby="hero-title">
            <div className="hero-bg" aria-hidden="true">
              <Image
                src={`${imageRoot}/1hero.JPG`}
                alt=""
                fill
                priority
                quality={90}
                sizes="100vw"
                className="hero-bg-image"
              />
              <div className="hero-overlay" />
            </div>

            <div className="hero-content">
              <p className="hero-badge">Serving New York Since 1989</p>
              <h1 id="hero-title">
                New York’s{" "}
                <span className="hero-title-phrase">flooring specialists</span>
              </h1>
              <p className="hero-lede hero-lede--light">
                Flooring installation, repair, sanding and refinishing for contractors, property managers, commercial clients and homeowners across New York City and the surrounding region.
              </p>
              <div className="hero-actions">
                <a className="button button--accent" href="#contact">
                  Discuss a Project
                  <ArrowRight aria-hidden />
                </a>
                <a className="button button--ghost" href="#projects">View Our Work</a>
              </div>
            </div>

            <div className="hero-stats" aria-label="Company highlights">
              {heroStats.map((stat) => (
                <div className="hero-stat" key={stat.label}>
                  {"iconSrc" in stat ? (
                    <span
                      className="hero-stat-icon--custom"
                      style={{
                        WebkitMaskImage: `url("${stat.iconSrc}")`,
                        maskImage: `url("${stat.iconSrc}")`,
                      }}
                      aria-hidden
                    />
                  ) : (
                    <stat.icon aria-hidden />
                  )}
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </section>
        </div>

        <section className="positioning section" id="positioning" aria-labelledby="positioning-title">
          <div className="shell">
            <Reveal className="positioning-panel">
              <div className="positioning-media image-frame">
                <Image
                  src={`${imageRoot}/743925910_18113759659943407_461696079384583261_n.jpg`}
                  alt="Nolan crew finishing a patterned hardwood floor"
                  fill
                  quality={95}
                  sizes="(max-width: 800px) 100vw, 414px"
                  className="positioning-image"
                />
              </div>
              <div className="positioning-copy">
                <h2 id="positioning-title" className="positioning-heading">Capability built<br />over decades</h2>
                <div className="positioning-rule" aria-hidden="true" />
                <p className="positioning-body">Since 1989, we bring the same care and attention to every job, from small repairs to large renovations and detailed custom floors. Our long standing crews have decades of hands on experience, bringing a professional standard of workmanship from preparation through to the final finish.</p>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="services section" id="services" aria-labelledby="services-title">
          <SectionSwoopReveal variant="services" className="shell">
            <div className="section-intro">
              <div><h2 id="services-title">Complete Flooring Services</h2></div>
            </div>
            <ServiceExplorer />
          </SectionSwoopReveal>
        </section>

        <section className="projects section" id="projects" aria-labelledby="projects-title">
          <div className="shell">
            <Reveal className="projects-heading">
              <div>
                <h2 id="projects-title">Recent Projects</h2>
              </div>
              <div className="projects-heading-meta">
                <Link className="text-link" href="/projects">
                  All projects
                  <ArrowUpRight aria-hidden />
                </Link>
              </div>
            </Reveal>
            <div className="project-list">
              {homeProjects.map((project, index) => {
                const layout = homeProjectLayouts[index] ?? {};
                return (
                  <ProjectEntry
                    key={project.slug}
                    index={String(index + 1).padStart(2, "0")}
                    title={project.title}
                    href={`/projects/${project.slug}`}
                    description={project.summary}
                    images={project.featuredImages}
                    reverse={layout.reverse}
                    layout={layout.layout}
                  />
                );
              })}
            </div>
          </div>
        </section>

        <section className="process section" id="how-we-work" aria-labelledby="process-title">
          <div className="shell">
            <Reveal className="process-intro">
              <p className="eyebrow">How we work</p>
              <h2 id="process-title">A Clear Path<br />From Discussion to Completion</h2>
            </Reveal>
            <Reveal>
              <ol className="process-steps">
                <li className="process-step">
                  <span className="process-num">01</span>
                  <h3>Discuss the Project</h3>
                  <p>Understand the property, flooring requirements, priorities and expected timeline.</p>
                </li>
                <li className="process-step">
                  <span className="process-num">02</span>
                  <h3>Review the Scope</h3>
                  <p>Assess the space, materials and work required before confirming the project approach.</p>
                </li>
                <li className="process-step">
                  <span className="process-num">03</span>
                  <h3>Deliver the Work</h3>
                  <p>Our experienced crews carry out the job to a high standard, from preparation through to the final finish.</p>
                </li>
                <li className="process-step">
                  <span className="process-num">04</span>
                  <h3>Final Review</h3>
                  <p>Review the completed flooring and address any remaining project details.</p>
                </li>
              </ol>
            </Reveal>
          </div>
        </section>

        <section className="proof section" id="about" aria-labelledby="proof-title">
          <div className="shell proof-grid">
            <Reveal className="proof-image image-frame"><Image src={`${imageRoot}/Aidan stand.png`} alt="Two Nolan team members discussing work on site" fill sizes="(max-width: 800px) 100vw, 38vw" /></Reveal>
            <Reveal className="proof-copy">
              <p className="eyebrow">Why Nolan</p>
              <h2 id="proof-title">Over three decades in New York flooring.</h2>
              <p>Founded in 1989, Nolan Select Flooring has worked across residential and commercial projects throughout New York for more than 35 years. Today, John Nolan and his team continue to handle everything from repairs and installation to detailed sanding, staining and refinishing work.</p>
              <dl className="proof-points">
                <div><dt>1989</dt><dd>Established in New York</dd></div>
                <div><dt>35+ years</dt><dd>Working in residential and commercial flooring</dd></div>
                <div><dt>Fully insured</dt><dd>For projects across New York</dd></div>
              </dl>
            </Reveal>
          </div>
        </section>

        <section className="service-area" aria-labelledby="area-title">
          <div className="shell area-grid">
            <p className="eyebrow eyebrow--light">Based in Maspeth, Queens</p>
            <h2 id="area-title">Working across New York City and the tri-state area.</h2>
            <p>NYC · Long Island · Westchester · New Jersey · Connecticut</p>
          </div>
        </section>

        <ContactBand />
      </main>
      <SiteFooter />
    </>
  );
}
