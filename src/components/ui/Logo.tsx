import Image from "next/image";
import Link from "next/link";
import { branding } from "@/content/branding";
import { cn } from "@/lib/utils";

/** Wordmark generated from branding config until the real logo file is supplied. */
export function Logo({ tone = "dark", className }: { tone?: "dark" | "light"; className?: string }) {
  return (
    <Link
      href="/"
      className={cn("inline-flex min-h-11 items-center gap-2.5 sm:gap-3 group", className)}
      aria-label={`${branding.companyName} — home`}
    >
      <div className="relative size-10 shrink-0 overflow-hidden rounded-full ring-2 ring-brand/20 shadow-xs transition-transform group-hover:scale-105">
        <Image
          src={branding.logo?.src ?? "/images/brand/oxtin-logo-emblem.png"}
          alt={branding.logo?.alt ?? branding.companyName}
          width={48}
          height={48}
          className="size-full object-cover"
          preload
        />
      </div>
      <span className={cn("font-display leading-tight", tone === "dark" ? "text-ink" : "text-white")}>
        <span className="font-extrabold uppercase tracking-tight text-base sm:text-lg block">
          {branding.wordmark.strong}
        </span>
        <span
          className={cn(
            "text-xs sm:text-[13px] font-semibold tracking-wide block -mt-0.5",
            tone === "dark" ? "text-brand" : "text-white/75"
          )}
        >
          {branding.wordmark.light}
        </span>
      </span>
    </Link>
  );
}
