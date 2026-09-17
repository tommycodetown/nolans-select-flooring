"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { waitForScrollTop } from "@/lib/scroll-page";

type SectionSwoopVariant = "handles" | "services";

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function isInRevealViewport(node: HTMLElement) {
  const rect = node.getBoundingClientRect();
  return rect.top < window.innerHeight * 0.9 && rect.bottom > 0;
}

function setRevealState(
  node: HTMLElement,
  state: { armed: boolean; visible: boolean },
) {
  node.classList.toggle("section-swoop-reveal--armed", state.armed);
  node.classList.toggle("section-swoop-reveal--visible", state.visible);
}

export function SectionSwoopReveal({
  children,
  className,
  variant,
  resetKey,
}: {
  children: React.ReactNode;
  className?: string;
  variant: SectionSwoopVariant;
  resetKey?: string;
}) {
  const pathname = usePathname();
  const ref = useRef<HTMLDivElement>(null);
  const revealKey = resetKey ?? pathname;

  useLayoutEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (prefersReducedMotion()) {
      setRevealState(node, { armed: false, visible: true });
      return;
    }

    setRevealState(node, {
      armed: true,
      visible: isInRevealViewport(node),
    });
  }, [revealKey]);

  useEffect(() => {
    const node = ref.current;
    if (!node || prefersReducedMotion()) return;
    if (node.classList.contains("section-swoop-reveal--visible")) return;

    let observer: IntersectionObserver | null = null;
    let cancelWait = () => {};

    const observe = () => {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            node.classList.add("section-swoop-reveal--visible");
            observer?.disconnect();
          }
        },
        { rootMargin: "0px 0px -10%", threshold: 0.12 },
      );

      observer.observe(node);
    };

    cancelWait = waitForScrollTop(observe);

    return () => {
      cancelWait();
      observer?.disconnect();
    };
  }, [revealKey]);

  return (
    <div
      ref={ref}
      className={cn(
        "section-swoop-reveal",
        `section-swoop-reveal--${variant}`,
        className,
      )}
    >
      {children}
    </div>
  );
}
