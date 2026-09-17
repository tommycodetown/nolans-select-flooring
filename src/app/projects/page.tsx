import type { Metadata } from "next";
import { ContactBand } from "@/components/marketing/contact-band";
import { PageFrame } from "@/components/marketing/page-frame";
import { ProjectEntry } from "@/components/marketing/project-entry";
import { homeProjects, projects } from "@/content/projects";
import { assertProjectRegistry } from "@/lib/project-images";
import { createPageMetadata } from "@/lib/page-metadata";

assertProjectRegistry(projects);

export const metadata: Metadata = createPageMetadata({
  path: "/projects",
  title: "Flooring Projects in New York | Nolan Select Flooring",
  description: "Selected residential, custom and commercial flooring work by Nolan Select Flooring across New York.",
  image: homeProjects[0].featuredImages[0].src,
});

export default function ProjectsPage() {
  return (
    <PageFrame>
      <section className="projects-intro" aria-labelledby="projects-title">
        <div className="shell projects-intro-grid">
          <div className="projects-intro-heading">
            <p className="eyebrow">Projects</p>
            <h1 id="projects-title">Selected flooring projects across New York.</h1>
          </div>
          <p className="projects-intro-lede">
            Residential, commercial and custom flooring work across New York, including installation, refinishing and detailed decorative floors.
          </p>
        </div>
      </section>

      <section className="projects-featured section" aria-label="Project list">
        <div className="shell">
          <div className="project-list">
            {projects.map((project, index) => (
                <ProjectEntry
                  key={project.slug}
                  index={String(index + 1).padStart(2, "0")}
                  title={project.title}
                  href={`/projects/${project.slug}`}
                  description={project.summary}
                  images={project.featuredImages}
                  reverse={index % 2 === 1}
                  layout={
                    project.mediaOrientation === "portrait"
                      ? "portrait"
                      : index % 3 === 2
                        ? "narrow"
                        : undefined
                  }
                />
            ))}
          </div>
        </div>
      </section>

      <ContactBand />
    </PageFrame>
  );
}
