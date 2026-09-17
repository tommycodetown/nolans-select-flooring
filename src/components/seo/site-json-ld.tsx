import { getSiteJsonLd } from "@/lib/structured-data";

export function SiteJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(getSiteJsonLd()).replace(/</g, "\\u003c"),
      }}
    />
  );
}
