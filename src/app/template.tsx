"use client";

import { useLayoutEffect } from "react";
import { usePathname } from "next/navigation";
import { scrollToTop } from "@/lib/scroll-page";

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useLayoutEffect(() => {
    if (!window.location.hash) {
      scrollToTop();
    }
  }, [pathname]);

  return (
    <div key={pathname} className="page-enter">
      {children}
    </div>
  );
}
