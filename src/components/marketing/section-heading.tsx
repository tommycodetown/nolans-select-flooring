import { cn } from "@/lib/utils";
import { Overline } from "./overline";

type SectionHeadingProps = {
  overline?: string;
  headline: string;
  headlineEmphasis?: string;
  subheadline?: string;
  align?: "left" | "center";
  size?: "default" | "compact";
  as?: "h1" | "h2";
  className?: string;
};

function HeadlineText({
  headline,
  emphasis,
  size,
  as: Heading = "h2",
}: {
  headline: string;
  emphasis?: string;
  size: "default" | "compact";
  as?: "h1" | "h2";
}) {
  const sizeClasses = {
    compact: "text-xl font-semibold sm:text-2xl",
    default: "text-[2rem] font-semibold sm:text-[2.375rem] lg:text-[3rem]",
  }[size];

  if (!emphasis || !headline.includes(emphasis)) {
    return (
      <Heading
        className={cn(
          "font-heading font-semibold leading-[1.02] tracking-tight text-brand-text",
          headline.includes("\n") && "whitespace-pre-line",
          sizeClasses
        )}
      >
        {headline}
      </Heading>
    );
  }

  const [before, after] = headline.split(emphasis);

  return (
    <Heading
      className={cn(
        "font-heading font-semibold leading-[1.02] tracking-tight text-brand-text",
        headline.includes("\n") && "whitespace-pre-line",
        sizeClasses
      )}
    >
      {before}
      <span className="font-semibold">{emphasis}</span>
      {after}
    </Heading>
  );
}

export function SectionHeading({
  overline,
  headline,
  headlineEmphasis,
  subheadline,
  align = "left",
  size = "default",
  as = "h2",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {overline && <Overline className="mb-5">{overline}</Overline>}
      <HeadlineText
        headline={headline}
        emphasis={headlineEmphasis}
        size={size}
        as={as}
      />
      {subheadline && (
        <p className="mt-4 text-sm font-medium leading-snug text-brand-muted sm:text-base">
          {subheadline}
        </p>
      )}
    </div>
  );
}
