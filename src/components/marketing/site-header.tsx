"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/config/site";

const headerLogoSrc = "/images/nolans-logo-header.png";

type SiteHeaderProps = {
  overlay?: boolean;
  logoSrc?: string;
};

export function SiteHeader(props: SiteHeaderProps) {
  const pathname = usePathname();
  return <SiteHeaderMenu key={pathname} pathname={pathname} {...props} />;
}

function SiteHeaderMenu({
  pathname,
  overlay = true,
  logoSrc = headerLogoSrc,
}: SiteHeaderProps & { pathname: string }) {
  const contactHref = pathname === "/" ? "#contact" : "/contact";
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!overlay) return;

    const onScroll = () => {
      setScrolled(window.scrollY > 12);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [overlay]);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      event.preventDefault();
      setOpen(false);
      menuButtonRef.current?.focus();
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header
      className={[
        "site-header",
        overlay ? "site-header--overlay" : "",
        scrolled ? "site-header--scrolled" : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <nav className="shell header-inner" aria-label="Main navigation">
        <Link href="/" className="header-logo" aria-label="Nolan Select Flooring home">
          <Image
            src={logoSrc}
            alt="Nolan Select Flooring"
            width={397}
            height={207}
            priority
            className="header-logo-image"
          />
        </Link>
        <ul className={`header-nav ${open ? "header-nav--open" : ""}`} id="site-menu">
          {siteConfig.navigation.filter((item) => item.id !== "home").map((item) => (
            <li key={item.id}>
              <Link href={item.href} onClick={() => setOpen(false)}>
                {item.label}
              </Link>
            </li>
          ))}
          <li className="mobile-contact">
            <a href={`tel:${siteConfig.phoneHref}`}>{siteConfig.phone}</a>
          </li>
          <li className="mobile-contact">
            <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
          </li>
        </ul>
        <a className="header-cta" href={contactHref}>
          Discuss a Project
        </a>
        <button
          ref={menuButtonRef}
          className="menu-button"
          type="button"
          aria-expanded={open}
          aria-controls="site-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X aria-hidden /> : <Menu aria-hidden />}
        </button>
      </nav>
    </header>
  );
}
