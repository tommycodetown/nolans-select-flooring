export function getHeaderOffset() {
  if (typeof window === "undefined") return 76;
  return window.matchMedia("(max-width: 760px)").matches ? 66 : 76;
}

export function scrollToTop() {
  const root = document.documentElement;
  const previous = root.style.scrollBehavior;

  root.style.scrollBehavior = "auto";
  window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  root.scrollTop = 0;
  document.body.scrollTop = 0;
  root.style.scrollBehavior = previous;
}

export function scrollToHash(hash: string) {
  const id = hash.replace(/^#/, "");
  if (!id) {
    scrollToTop();
    return;
  }

  const target = document.getElementById(id);
  if (!target) {
    scrollToTop();
    return;
  }

  const top = target.getBoundingClientRect().top + window.scrollY - getHeaderOffset();
  window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
}

export function isInternalRouteLink(anchor: HTMLAnchorElement) {
  if (anchor.target === "_blank") return false;

  const href = anchor.getAttribute("href");
  if (!href || href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:")) {
    return false;
  }

  const url = new URL(href, window.location.href);
  return url.origin === window.location.origin && url.pathname !== window.location.pathname;
}

export function waitForScrollTop(callback: () => void) {
  let frame = 0;

  const check = () => {
    if (window.scrollY > 0 && !window.location.hash) {
      frame = window.requestAnimationFrame(check);
      return;
    }

    callback();
  };

  frame = window.requestAnimationFrame(check);

  return () => {
    window.cancelAnimationFrame(frame);
  };
}
