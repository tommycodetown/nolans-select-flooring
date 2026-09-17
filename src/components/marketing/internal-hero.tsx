import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export function InternalHero({
  eyebrow,
  title,
  intro,
  image,
  alt,
  back,
  variant = "split",
  quality = 90,
  sizes = "(max-width: 760px) 100vw, 58vw",
  unoptimized = false,
  objectPosition,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  image: string;
  alt: string;
  back?: { href: string; label: string };
  variant?: "split" | "wide";
  quality?: number;
  sizes?: string;
  unoptimized?: boolean;
  objectPosition?: string;
}) {
  return (
    <section className={`internal-hero internal-hero--${variant}`}>
      <div className="internal-hero-copy">
        {back && <Link href={back.href} className="back-link"><ArrowLeft aria-hidden />{back.label}</Link>}
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p>{intro}</p>
      </div>
      <div className="internal-hero-image image-frame">
        <Image src={image} alt={alt} fill priority quality={quality} sizes={sizes} unoptimized={unoptimized} style={objectPosition ? { objectPosition } : undefined} />
      </div>
    </section>
  );
}
