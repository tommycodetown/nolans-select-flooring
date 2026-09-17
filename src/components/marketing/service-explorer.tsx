"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { services as catalog } from "@/content/services";
import { cn } from "@/lib/utils";

const homepageServices = [
  {
    slug: "custom-decorative-flooring",
    description: "Herringbone, parquet, borders and intricate layouts executed with close control.",
    position: "center 60%",
  },
  {
    slug: "hardwood-flooring-installation",
    description: "Solid and engineered hardwood installed for apartments, houses and large-scale renovations.",
    position: "center 42%",
  },
  {
    slug: "floor-sanding-refinishing",
    description: "Sanding, staining, bleaching, custom colour work and durable finishing for existing floors.",
    position: "center 55%",
  },
  {
    slug: "floor-repair",
    description: "Board replacement, matching, subfloor correction and practical solutions for damaged flooring.",
    position: "center 48%",
  },
  {
    slug: "lvt-vinyl-flooring",
    description: "Resilient plank flooring for residential, property-management and commercial environments.",
    position: "center 65%",
  },
  {
    slug: "hardwood-stairs",
    description: "New hardwood stairs, tread work and careful matching with adjoining floors.",
    position: "center 58%",
  },
] as const;

const items = homepageServices.map((item, index) => {
  const service = catalog.find((entry) => entry.slug === item.slug);
  if (!service) {
    throw new Error(`Missing service record for ${item.slug}`);
  }

  return {
    number: String(index + 1).padStart(2, "0"),
    title: service.title,
    description: item.description,
    href: `/services/${service.slug}`,
    image: service.heroImage,
    alt: service.heroAlt,
    position: service.imagePosition ?? item.position,
  };
});

export function ServiceExplorer() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = items[activeIndex] ?? items[0];

  return (
    <div className="service-explorer">
      <div className="service-index-col">
        <ul className="service-index">
          {items.map((item, index) => {
            const isActive = index === activeIndex;

            return (
              <li key={item.number}>
                <Link
                  href={item.href}
                  className={cn("service-row", isActive && "service-row--active")}
                  aria-current={isActive ? true : undefined}
                  onMouseEnter={() => setActiveIndex(index)}
                  onFocus={() => setActiveIndex(index)}
                >
                  <span>{item.number}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <div className="service-row-media image-frame">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      sizes="112px"
                      style={{ objectPosition: item.position }}
                    />
                  </div>
                  <span className="service-row-arrow" aria-hidden="true">
                    <ArrowUpRight />
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="service-panel">
        <div className="service-stage image-frame" aria-hidden="true">
          <Image
            key={active.number}
            src={active.image}
            alt=""
            fill
            sizes="(max-width: 760px) 0px, 55vw"
            className="is-active"
            style={{ objectPosition: active.position }}
          />
        </div>
      </div>
    </div>
  );
}
