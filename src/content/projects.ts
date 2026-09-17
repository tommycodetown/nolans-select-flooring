import { projectImage, slugFromFolder, type ProjectImage } from "@/lib/project-images";

export type ProjectMediaOrientation = "landscape" | "portrait";

export type Project = {
  folder: string;
  slug: string;
  title: string;
  category: string;
  summary: string;
  featured: readonly [string, string, string];
  featuredImages: ProjectImage[];
  mediaOrientation: ProjectMediaOrientation;
  relatedService: { label: string; href: string };
};

type ProjectDefinition = {
  folder: string;
  category: string;
  summary: string;
  featured: readonly [string, string, string];
  featuredAlts: readonly [string, string, string];
  featuredPositions?: readonly [string?, string?, string?];
  mediaOrientation?: ProjectMediaOrientation;
  relatedService: { label: string; href: string };
};

function defineProject(definition: ProjectDefinition): Project {
  return {
    folder: definition.folder,
    slug: slugFromFolder(definition.folder),
    title: definition.folder,
    category: definition.category,
    summary: definition.summary,
    featured: definition.featured,
    featuredImages: definition.featured.map((filename, index) => ({
      src: projectImage(definition.folder, filename),
      alt: definition.featuredAlts[index] ?? `Photograph from ${definition.folder}`,
      position: definition.featuredPositions?.[index],
    })),
    mediaOrientation: definition.mediaOrientation ?? "landscape",
    relatedService: definition.relatedService,
  };
}

export const projects: Project[] = [
  defineProject({
    folder: "116 Central Park South",
    category: "Custom hardwood flooring",
    summary: "A fresh new look for this Central Park apartment. Quality flooring, expert installation. This texturised chevron adds a finish our clients can be proud of. Central Park NYC",
    featured: ["DSC09341.JPG", "DSC09374.JPG", "DSC09343.JPG"],
    featuredAlts: [
      "Chevron hardwood floor facing the park at 116 Central Park South",
      "Chevron hardwood running the length of a hallway at 116 Central Park South",
      "Finished chevron floor in a second room at 116 Central Park South",
    ],
    relatedService: { label: "Custom & Decorative Flooring", href: "/services/custom-decorative-flooring" },
  }),
  defineProject({
    folder: "158 Franklin St",
    category: "Hardwood flooring",
    summary: "A stunning hardwood floor like this starts with craftsmanship and ends with perfection. After meticulous installation, we sanded the entire surface evenly and applied a high-quality stain that brings out the wood's natural warmth and depth.",
    featured: ["DSC_3151.JPG", "DSC_3063.JPG", "DSC_3357.JPG"],
    featuredAlts: [
      "Finished hardwood floor in a loft room at 158 Franklin St",
      "Dark stain being applied to hardwood at 158 Franklin St",
      "Finished hardwood hallway at 158 Franklin St",
    ],
    relatedService: { label: "Floor Sanding & Refinishing", href: "/services/floor-sanding-refinishing" },
  }),
  defineProject({
    folder: "225 West",
    category: "Custom hardwood flooring",
    summary: "Herringbone hardwood through a residential interior, including the kitchen and the transition back to straight laid boards.",
    featured: ["DSC_3754.JPG", "DSC_3818.JPG", "DSC_3857.JPG"],
    featuredAlts: [
      "Herringbone hardwood floor in a finished room at 225 West",
      "Herringbone hardwood running through the kitchen at 225 West",
      "Herringbone-to-straight floor transition at 225 West",
    ],
    relatedService: { label: "Custom & Decorative Flooring", href: "/services/custom-decorative-flooring" },
  }),
  defineProject({
    folder: "Belnord Apartment Upper West",
    category: "Custom hardwood flooring",
    summary: "Chevron hardwood through a residential apartment, with a framed border in the hallway and adjoining rooms.",
    featured: ["DSC09482.JPG", "DSC09469.JPG", "DSC09467.JPG"],
    featuredAlts: [
      "Chevron hardwood hallway at the Belnord Apartment Upper West",
      "Chevron floor with a straight-laid border at the Belnord Apartment Upper West",
      "Finished chevron floor in an adjoining room at the Belnord Apartment Upper West",
    ],
    relatedService: { label: "Custom & Decorative Flooring", href: "/services/custom-decorative-flooring" },
  }),
  defineProject({
    folder: "Metropolitian Pavilion",
    category: "Commercial flooring",
    summary: "A full resanding and restaining brought the floors back to life with a fresh, consistent finish. The updated surface is now event-ready and built to handle high foot traffic.",
    featured: ["DSC_7170-HDR.png", "DSC_7191-HDR.png", "DSC_7205-HDR.png"],
    featuredAlts: [
      "Completed hardwood floor looking down the hall at Metropolitian Pavilion",
      "Polished commercial floor among the columns at Metropolitian Pavilion",
      "Wide view across the finished floor at Metropolitian Pavilion",
    ],
    relatedService: { label: "Floor Sanding & Refinishing", href: "/services/floor-sanding-refinishing" },
  }),
  defineProject({
    folder: "Roslyn Heights",
    category: "Residential hardwood flooring",
    summary: "Every plank in this floor was installed with precision, then sanded to a seamless smoothness before being stained to the client's preferred shade. The result is a timeless design that elevates the overall feel of the home.",
    featured: ["4239858529707644145.jpg", "4285863346819406278.jpg", "1069389127548385288.jpg"],
    featuredAlts: [
      "Light hardwood floor and stair at Roslyn Heights",
      "Finished light hardwood room at Roslyn Heights",
      "Hardwood-to-tile threshold at Roslyn Heights",
    ],
    featuredPositions: [undefined, undefined, "center 42%"],
    mediaOrientation: "portrait",
    relatedService: { label: "Hardwood Flooring Installation", href: "/services/hardwood-flooring-installation" },
  }),
  defineProject({
    folder: "The Aro",
    category: "Hardwood flooring",
    summary: "The existing floors were sanded back to raw timber in this Beautiful Penthouse, revealing the natural character of the wood. A new stain and finish were applied to deliver a refreshed, polished result.",
    featured: ["DSC00298-HDR.jpg", "DSC00343-HDR.jpg", "DSC00373-HDR.jpg"],
    featuredAlts: [
      "Wide-plank hardwood in the living room at The Aro",
      "Hardwood floor beside the stair at The Aro",
      "Hardwood floor running through the kitchen at The Aro",
    ],
    relatedService: { label: "Hardwood Flooring Installation", href: "/services/hardwood-flooring-installation" },
  }),
  defineProject({
    folder: "Twix hills Rd",
    category: "Custom hardwood flooring",
    summary: "Decorative parquet in a formal room, with wide-plank hardwood on the landing and adjoining spaces.",
    featured: ["DSC09597.JPG", "DSC09652.JPG", "DSC09601.JPG"],
    featuredAlts: [
      "Decorative parquet floor at Twix hills Rd",
      "Wide-plank hardwood on the landing at Twix hills Rd",
      "Parquet joinery detail at Twix hills Rd",
    ],
    relatedService: { label: "Custom & Decorative Flooring", href: "/services/custom-decorative-flooring" },
  }),
  defineProject({
    folder: "Wooster St",
    category: "Hardwood flooring",
    summary: "The existing floors were sanded back to raw timber, revealing the natural character of the wood. A new stain and finish were applied to deliver a refreshed, polished result.",
    featured: ["DSC_6693-HDR.png", "DSC_6718-HDR.png", "DSC_6708-HDR.png"],
    featuredAlts: [
      "Wide-plank hardwood through the open loft at Wooster St",
      "Hardwood floor at the kitchen and spiral stair at Wooster St",
      "Loft floor with the spiral stair in the foreground at Wooster St",
    ],
    relatedService: { label: "Hardwood Flooring Installation", href: "/services/hardwood-flooring-installation" },
  }),
];

export const projectBySlug = Object.fromEntries(projects.map((project) => [project.slug, project])) as Record<string, Project>;

const homeProjectSlugs = ["the-aro", "wooster-st", "belnord-apartment-upper-west"] as const;

export const homeProjects = homeProjectSlugs.map((slug) => {
  const project = projectBySlug[slug];
  if (!project) {
    throw new Error(`Homepage project missing: ${slug}`);
  }
  return project;
});
