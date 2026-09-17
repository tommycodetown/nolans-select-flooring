import projectImageManifest from "@/lib/project-image-manifest.json";

export const PROJECTS_IMAGE_ROOT = "/images/projects";

export type ProjectImage = {
  src: string;
  alt: string;
  position?: string;
};

type ProjectImageSource = {
  folder: string;
  slug: string;
  featured: readonly string[];
};

function assertSafeSegment(value: string, label: string) {
  if (!value || value !== value.trim()) {
    throw new Error(`Invalid project ${label}: empty or untrimmed value`);
  }

  if (value.includes("/") || value.includes("\\") || value.includes("..") || value.includes("\0")) {
    throw new Error(`Invalid project ${label}: ${value}`);
  }
}

export function slugFromFolder(folder: string) {
  assertSafeSegment(folder, "folder");

  return folder
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function projectImage(folder: string, filename: string) {
  assertSafeSegment(folder, "folder");
  assertSafeSegment(filename, "filename");

  const src = `${PROJECTS_IMAGE_ROOT}/${folder}/${filename}`;
  const prefix = `${PROJECTS_IMAGE_ROOT}/${folder}/`;

  if (!src.startsWith(prefix)) {
    throw new Error(`Project image escaped its folder: ${src}`);
  }

  return src;
}

export function listProjectGallery(folder: string) {
  assertSafeSegment(folder, "folder");

  const gallery = projectImageManifest[folder as keyof typeof projectImageManifest];

  if (!gallery) {
    throw new Error(`Project folder missing: ${folder}`);
  }

  return [...gallery];
}

export function assertProjectRegistry(projects: readonly ProjectImageSource[]) {
  const slugs = new Set<string>();
  const featuredSources = new Set<string>();

  for (const project of projects) {
    if (project.slug !== slugFromFolder(project.folder)) {
      throw new Error(`Project slug does not match folder: ${project.folder}`);
    }

    if (slugs.has(project.slug)) {
      throw new Error(`Duplicate project slug: ${project.slug}`);
    }

    slugs.add(project.slug);

    if (project.featured.length !== 3) {
      throw new Error(`Project ${project.folder} must feature exactly 3 photos`);
    }

    const gallery = new Set(listProjectGallery(project.folder));

    for (const filename of project.featured) {
      if (!gallery.has(filename)) {
        throw new Error(`Featured file missing from ${project.folder}: ${filename}`);
      }

      const src = projectImage(project.folder, filename);

      if (featuredSources.has(src)) {
        throw new Error(`Featured image reused across projects: ${src}`);
      }

      featuredSources.add(src);
    }
  }
}

export function getProjectDetailImages(project: {
  folder: string;
  title: string;
  featured: readonly string[];
  featuredImages: readonly ProjectImage[];
}) {
  const featured = new Set(project.featured);
  const remaining: ProjectImage[] = listProjectGallery(project.folder)
    .filter((filename) => !featured.has(filename))
    .map((filename) => ({
      src: projectImage(project.folder, filename),
      alt: `Photograph from ${project.title}`,
    }));

  return [...project.featuredImages, ...remaining];
}
