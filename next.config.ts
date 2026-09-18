import type { NextConfig } from "next";

const isProduction = process.env.NODE_ENV === "production";

/**
 * CSP tuned for this static App Router site:
 * - Self-hosted fonts via next/font (no Google Fonts origins)
 * - Local images only (no remotePatterns)
 * - Small inline scripts for scroll restoration and JSON-LD
 * - Tailwind / Next inline styles
 */
const contentSecurityPolicy = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline'",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' blob: data:",
  "font-src 'self'",
  "connect-src 'self'",
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "object-src 'none'",
].join("; ");

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-Frame-Options", value: "DENY" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), payment=(), usb=()",
  },
  ...(isProduction
    ? [{ key: "Content-Security-Policy", value: contentSecurityPolicy }]
    : []),
];

/** Permanent 301 redirects from legacy Squarespace URLs (migration Step 3). */
const squarespaceRedirects = [
  { source: "/home", destination: "/", statusCode: 301 },
  { source: "/gallery", destination: "/projects", statusCode: 301 },
  { source: "/services-store", destination: "/services", statusCode: 301 },
  { source: "/gallery/116-central-park-south", destination: "/projects/116-central-park-south", statusCode: 301 },
  { source: "/gallery/158-franklin-st", destination: "/projects/158-franklin-st", statusCode: 301 },
  { source: "/gallery/roslyn-heights", destination: "/projects/roslyn-heights", statusCode: 301 },
  { source: "/gallery/roslyn-heights-act23", destination: "/projects/wooster-st", statusCode: 301 },
  { source: "/gallery/roslyn-heights-act23-z6cw6", destination: "/projects/the-aro", statusCode: 301 },
  { source: "/gallery/roslyn-heights-pax9f", destination: "/projects/metropolitian-pavilion", statusCode: 301 },
  { source: "/gallery/225-west-86-st", destination: "/projects/225-west", statusCode: 301 },
  { source: "/gallery/belnord-710", destination: "/projects/belnord-apartment-upper-west", statusCode: 301 },
] as const;

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: {
    qualities: [75, 90, 95],
  },
  async redirects() {
    return [...squarespaceRedirects];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
