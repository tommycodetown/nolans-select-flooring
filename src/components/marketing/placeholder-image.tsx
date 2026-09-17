import Image from "next/image";
import { cn } from "@/lib/utils";

type PlaceholderImageProps = {
  label: string;
  src?: string;
  alt?: string;
  objectPosition?: string;
  priority?: boolean;
  quality?: number;
  sizes?: string;
  unoptimized?: boolean;
  aspectRatio?: "square" | "portrait" | "landscape" | "hero";
  className?: string;
};

const aspectClasses = {
  square: "aspect-square",
  portrait: "aspect-[3/4]",
  landscape: "aspect-[4/3]",
  hero: "aspect-[3/2] lg:aspect-[5/6]",
};

export function PlaceholderImage({
  label,
  src,
  alt,
  objectPosition = "center",
  priority = false,
  quality = 90,
  sizes = "(max-width: 1024px) 100vw, 50vw",
  unoptimized = false,
  aspectRatio = "landscape",
  className,
}: PlaceholderImageProps) {
  const altText = alt ?? label;

  return (
    <div
      role={src ? undefined : "img"}
      aria-label={src ? undefined : label}
      className={cn(
        "relative overflow-hidden bg-brand-surface",
        aspectClasses[aspectRatio],
        className
      )}
    >
      {src ? (
        <Image
          key={src}
          src={src}
          alt={altText}
          fill
          priority={priority}
          quality={quality}
          sizes={sizes}
          unoptimized={unoptimized}
          className="object-cover"
          style={{ objectPosition }}
        />
      ) : (
        <>
          <div className="absolute inset-0 bg-[linear-gradient(145deg,var(--brand-surface)_0%,color-mix(in_srgb,var(--brand-primary)_8%,var(--brand-surface))_100%)]" />
          <div className="absolute inset-0 flex items-end p-5">
            <span className="text-xs font-medium uppercase tracking-[0.15em] text-brand-muted">
              {label}
            </span>
          </div>
        </>
      )}
    </div>
  );
}
