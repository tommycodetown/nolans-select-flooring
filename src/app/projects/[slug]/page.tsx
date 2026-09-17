import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { ContactBand } from "@/components/marketing/contact-band";
import { PageFrame } from "@/components/marketing/page-frame";
import { Reveal } from "@/components/marketing/reveal";
import { projectBySlug, projects } from "@/content/projects";
import { assertProjectRegistry, getProjectDetailImages } from "@/lib/project-images";
import { createPageMetadata } from "@/lib/page-metadata";
import { cn } from "@/lib/utils";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  assertProjectRegistry(projects);
  return projects.map(({ slug }) => ({ slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projectBySlug[slug];
  if (!project) return {};

  return createPageMetadata({
    path: `/projects/${slug}`,
    title: `${project.title} | Nolan Select Flooring Project`,
    description: project.summary,
    image: project.featuredImages[0].src,
  });
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projectBySlug[slug];
  if (!project) notFound();

  const images = getProjectDetailImages(project);
  const [hero, ...gallery] = images;
  const next = projects[(projects.indexOf(project) + 1) % projects.length];
  const isPortrait = project.mediaOrientation === "portrait";

  if (!hero || !next) notFound();

  return (
    <PageFrame>
      <section className={cn("project-detail-hero", isPortrait && "project-detail-hero--portrait")}>
        <div className="shell project-detail-heading">
          <Reveal>
            <Link className="back-link" href="/projects">
              <ArrowLeft aria-hidden />
              All projects
            </Link>
            <p className="eyebrow">{project.category}</p>
            <h1>{project.title}</h1>
          </Reveal>
          <Reveal>
            <p>{project.summary}</p>
          </Reveal>
        </div>
        <div className="project-detail-main image-frame">
          <Image src={hero.src} alt={hero.alt} fill priority sizes="100vw" />
        </div>
      </section>

      <section className="project-detail-body section">
        <div className="shell project-detail-grid">
          <div className={cn("project-detail-images", isPortrait && "project-detail-images--portrait")}>
            {gallery.map((image, index) => (
              <Reveal
                key={image.src}
                className={cn(
                  "project-detail-secondary",
                  !isPortrait && (index + 1) % 3 === 0 && "project-detail-secondary--wide",
                )}
              >
                <div className="image-frame">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes={
                      isPortrait
                        ? "(max-width: 760px) 100vw, 42vw"
                        : (index + 1) % 3 === 0
                          ? "(max-width: 760px) 100vw, 58vw"
                          : "(max-width: 760px) 100vw, 28vw"
                    }
                    style={image.position ? { objectPosition: image.position } : undefined}
                  />
                </div>
                <span>{String(index + 2).padStart(2, "0")}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="next-project">
        <div className="shell">
          <p className="eyebrow">Next project</p>
          <Link href={`/projects/${next.slug}`}>
            <span>{next.title}</span>
            <ArrowUpRight aria-hidden />
          </Link>
        </div>
      </section>

      <ContactBand />
    </PageFrame>
  );
}
