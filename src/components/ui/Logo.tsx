import Image from "next/image";
import Link from "next/link";
import { branding } from "@/content/branding";
import { cn } from "@/lib/utils";

/** Wordmark generated from branding config until the real logo file is supplied. */
export function Logo({ tone = "dark", className }: { tone?: "dark" | "light"; className?: string }) {
  return (
    <Link
      href="/"
      className={cn("inline-flex min-h-11 items-center", className)}
      aria-label={`${branding.companyName} — home`}
    >
      {branding.logo ? (
        <Image
          src={branding.logo.src}
          alt={branding.logo.alt}
          width={branding.logo.width}
          height={branding.logo.height}
          className="h-9 w-auto"
          preload
        />
      ) : (
        <span className="flex items-center gap-2.5" aria-hidden="true">
          <span className="grid size-9 place-items-center bg-brand font-display text-lg font-black text-white">O</span>
          <span className={cn("font-display text-lg leading-none", tone === "dark" ? "text-ink" : "text-white")}>
            <span className="font-extrabold uppercase tracking-tight">{branding.wordmark.strong}</span>
            <span className={cn("font-medium", tone === "dark" ? "text-brand" : "text-white/70")}>
              {branding.wordmark.light}
            </span>
          </span>
        </span>
      )}
    </Link>
  );
}
