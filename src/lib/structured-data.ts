import { siteConfig } from "@/config/site";
import { services } from "@/content/services";
import { getHomepageUrl, toAbsoluteUrl } from "@/lib/site-url";

const areaServed = [
  { "@type": "City" as const, name: "New York City" },
  { "@type": "Place" as const, name: "Long Island, New York" },
  { "@type": "AdministrativeArea" as const, name: "Westchester County, New York" },
  { "@type": "AdministrativeArea" as const, name: "New Jersey" },
  { "@type": "State" as const, name: "Connecticut" },
  { "@type": "AdministrativeArea" as const, name: "Upstate New York" },
];

export function getSiteJsonLd() {
  const siteUrl = getHomepageUrl();
  const organizationId = `${siteUrl}#organization`;

  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": organizationId,
    name: siteConfig.name,
    url: siteUrl,
    description: siteConfig.description,
    telephone: siteConfig.phoneHref,
    email: siteConfig.email,
    foundingDate: "1989",
    logo: toAbsoluteUrl("/images/nolans-logo-header.png"),
    image: toAbsoluteUrl(siteConfig.socialImage),
    areaServed,
    makesOffer: services.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.title,
        description: service.seoDescription,
        url: toAbsoluteUrl(`/services/${service.slug}`),
      },
    })),
  };
}
