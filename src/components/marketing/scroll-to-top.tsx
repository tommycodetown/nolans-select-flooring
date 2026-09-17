"use client";

import { useLayoutEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { scrollToHash, scrollToTop } from "@/lib/scroll-page";

export function ScrollToTop() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useLayoutEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  useLayoutEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      scrollToHash(hash);
      return;
    }

    scrollToTop();
  }, [pathname, searchParams]);

  return null;
}
