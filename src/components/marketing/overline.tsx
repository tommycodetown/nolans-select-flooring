import { cn } from "@/lib/utils";

type OverlineProps = {
  children: React.ReactNode;
  className?: string;
};

export function Overline({ children, className }: OverlineProps) {
  return (
    <p
      className={cn(
        "text-xs font-medium uppercase tracking-[0.2em] text-brand-accent",
        className
      )}
    >
      {children}
    </p>
  );
}
