import type { Metadata } from "next";
import { toAbsoluteUrl } from "@/lib/site-url";

type PageMetadataOptions = {
  path: `/${string}` | "/";
  title: string;
  description: string;
  image?: string;
};

export function createPageMetadata({
  path,
  title,
  description,
  image,
}: PageMetadataOptions): Metadata {
  const images = image ? [{ url: image }] : undefined;
  const canonicalUrl = toAbsoluteUrl(path);

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      type: "website",
      title,
      description,
      url: canonicalUrl,
      ...(images ? { images } : {}),
    },
    twitter: {
      card: image ? "summary_large_image" : "summary",
      title,
      description,
      ...(image ? { images: [image] } : {}),
    },
  };
}
