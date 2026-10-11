import Link from "next/link";
import { cn } from "@/lib/utils";
import { Icon } from "./Icon";

type Variant = "primary" | "accent" | "outline" | "outline-light" | "ghost-light" | "light";

const base =
  "inline-flex min-h-12 items-center justify-center gap-2 px-6 text-sm font-semibold tracking-wide transition-colors duration-200 select-none disabled:cursor-not-allowed disabled:opacity-60";

const variants: Record<Variant, string> = {
  primary: "bg-brand text-white hover:bg-brand-dark",
  accent: "bg-accent text-white hover:bg-[color-mix(in_oklab,var(--brand-accent),black_15%)]",
  outline: "border border-ink/20 text-ink hover:border-ink hover:bg-ink hover:text-white",
  "outline-light": "border border-white/40 text-white hover:border-white hover:bg-white hover:text-ink",
  "ghost-light": "text-white hover:text-white/80 px-0",
  light: "bg-white text-brand-dark hover:bg-surface",
};

export function buttonClass(variant: Variant = "primary", className?: string) {
  return cn(base, variants[variant], className);
}

export function ButtonLink({
  href,
  children,
  variant = "primary",
  arrow = false,
  className,
  external = false,
}: {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  arrow?: boolean;
  className?: string;
  external?: boolean;
}) {
  const content = (
    <>
      {children}
      {arrow ? <Icon name="arrow-right" className="size-4" /> : null}
    </>
  );
  if (external) {
    return (
      <a href={href} className={buttonClass(variant, className)} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }
  return (
    <Link href={href} className={buttonClass(variant, className)}>
      {content}
    </Link>
  );
}
