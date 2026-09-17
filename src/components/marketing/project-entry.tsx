"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export type ProjectEntryProps = {
  index: string;
  title: string;
  href: string;
  description: string;
  images: { src: string; alt: string; position?: string }[];
  reverse?: boolean;
  layout?: "pair" | "trio" | "narrow" | "portrait";
};

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function isInRevealViewport(node: HTMLElement) {
  const rect = node.getBoundingClientRect();
  return rect.top < window.innerHeight * 0.94 && rect.bottom > 0;
}

function setRevealState(
  node: HTMLElement,
  state: { armed: boolean; visible: boolean },
) {
  node.classList.toggle("project-entry-reveal--armed", state.armed);
  node.classList.toggle("project-entry-reveal--visible", state.visible);
}

export function ProjectEntry({
  index,
  title,
  href,
  description,
  images,
  reverse,
  layout = "pair",
}: ProjectEntryProps) {
  const ref = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (prefersReducedMotion()) {
      setRevealState(node, { armed: false, visible: true });
      return;
    }

    if (isInRevealViewport(node)) {
      setRevealState(node, { armed: false, visible: true });
      return;
    }

    setRevealState(node, { armed: true, visible: false });
  }, []);

  useEffect(() => {
    const node = ref.current;
    if (!node || prefersReducedMotion()) return;
    if (node.classList.contains("project-entry-reveal--visible")) return;

    let observer: IntersectionObserver | null = null;

    observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.classList.add("project-entry-reveal--visible");
          observer?.disconnect();
        }
      },
      { rootMargin: "0px 0px -8%", threshold: 0.1 },
    );

    observer.observe(node);
    return () => observer?.disconnect();
  }, []);

  const isPortrait = layout === "portrait";
  const [main, ...rest] = images;
  const supporting = rest.slice(0, layout === "trio" ? 3 : 2);
  const portraitImages = images.slice(0, 3);

  return (
    <article
      ref={ref}
      className={cn(
        "project-entry project-entry-reveal",
        reverse && "project-entry--reverse project-entry-reveal--from-right",
        layout !== "pair" && `project-entry--${layout}`,
      )}
    >
      <div className="project-copy project-reveal-copy">
        <span className="project-num">{index}</span>
        <h3>
          <Link href={href}>{title}</Link>
        </h3>
        <p className="project-blurb">{description}</p>
        <Link className="text-link" href={href}>
          View project
          <ArrowUpRight aria-hidden />
        </Link>
      </div>
      <div className="project-media">
        {isPortrait ? (
          <div className="project-portrait-triptych">
            {portraitImages.map((image, imageIndex) => (
              <div
                className={cn("image-frame project-portrait-frame project-reveal-support", `project-reveal-support--${imageIndex + 1}`)}
                key={image.src}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 760px) 46vw, 18vw"
                  style={image.position ? { objectPosition: image.position } : undefined}
                />
              </div>
            ))}
          </div>
        ) : (
          <>
            <div className="project-main image-frame project-reveal-main">
              <Image
                src={main.src}
                alt={main.alt}
                fill
                sizes="(max-width: 760px) 100vw, 52vw"
                style={main.position ? { objectPosition: main.position } : undefined}
              />
            </div>
            <div className="project-supporting">
              {supporting.map((image, imageIndex) => (
                <div
                  className={cn("image-frame project-reveal-support", `project-reveal-support--${imageIndex + 1}`)}
                  key={image.src}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 760px) 46vw, 20vw"
                    style={image.position ? { objectPosition: image.position } : undefined}
                  />
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </article>
  );
}
