const LOCAL_DEV_FALLBACK = "http://localhost:3000";

function normalizeOrigin(url: string): string {
  return url.replace(/\/+$/, "");
}

/** Production origin from SITE_URL; localhost fallback for local development only. */
export function getSiteUrl(): string {
  const configured = process.env.SITE_URL?.trim();

  if (configured) {
    return normalizeOrigin(configured);
  }

  if (process.env.NODE_ENV === "development") {
    return LOCAL_DEV_FALLBACK;
  }

  throw new Error(
    "SITE_URL must be set for production builds. Use the canonical site origin with no trailing slash, e.g. https://www.example.com",
  );
}

/** Canonical absolute homepage URL (origin with trailing slash). */
export function getHomepageUrl(): string {
  return toAbsoluteUrl("/");
}

/** Build an absolute URL from a site path or return an already-absolute URL unchanged. */
export function toAbsoluteUrl(path: string): string {
  if (/^https?:\/\//i.test(path)) {
    return path;
  }

  const base = getSiteUrl();
  if (path === "/" || path === "") {
    return `${base}/`;
  }

  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${base}${normalizedPath}`;
}
