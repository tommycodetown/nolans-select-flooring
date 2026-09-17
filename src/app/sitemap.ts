import type { MetadataRoute } from "next";
import { getPublicPaths } from "@/lib/public-paths";
import { toAbsoluteUrl } from "@/lib/site-url";

export default function sitemap(): MetadataRoute.Sitemap {
  return getPublicPaths().map((path) => ({
    url: toAbsoluteUrl(path),
  }));
}
