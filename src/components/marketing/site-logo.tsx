import Image, { type StaticImageData } from "next/image";
import { cn } from "@/lib/utils";

/** Default intrinsic dimensions suited to a typical site header logo slot. */
const DEFAULT_LOGO_WIDTH = 160;
const DEFAULT_LOGO_HEIGHT = 40;

type SiteLogoProps = {
  src: string | StaticImageData;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
};

export function SiteLogo({
  src,
  alt,
  width = DEFAULT_LOGO_WIDTH,
  height = DEFAULT_LOGO_HEIGHT,
  className,
  priority = false,
}: SiteLogoProps) {
  return (
    <span
      className={cn(
        "inline-flex max-h-10 shrink-0 items-center",
        className,
      )}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        className="h-auto w-auto max-h-full max-w-full object-contain"
      />
    </span>
  );
}
