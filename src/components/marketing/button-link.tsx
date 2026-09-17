import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "outline";
  onClick?: () => void;
};

const variantClasses = {
  primary:
    "h-11 rounded-sm bg-brand-primary px-6 text-xs font-semibold uppercase tracking-[0.12em] text-brand-background hover:bg-[var(--ink-hover)]",
  outline:
    "h-11 rounded-sm border-brand-border bg-transparent px-6 text-xs font-semibold uppercase tracking-[0.12em] text-brand-text hover:bg-brand-surface",
};

export function ButtonLink({
  href,
  children,
  className,
  variant = "primary",
  onClick,
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        buttonVariants({ variant: variant === "outline" ? "outline" : "default" }),
        variantClasses[variant],
        className
      )}
    >
      {children}
    </Link>
  );
}
