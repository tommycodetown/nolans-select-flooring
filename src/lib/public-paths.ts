import { projects } from "@/content/projects";
import { services } from "@/content/services";

/** Indexable public routes derived from site content. */
export function getPublicPaths(): readonly string[] {
  return [
    "/",
    "/services",
    ...services.map((service) => `/services/${service.slug}`),
    "/projects",
    ...projects.map((project) => `/projects/${project.slug}`),
    "/about",
    "/contact",
    "/privacy",
  ];
}
