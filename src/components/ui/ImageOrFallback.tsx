import Image from "next/image";
import type { ImageAsset } from "@/content/types";
import { isImageAvailable } from "@/lib/images";
import { cn } from "@/lib/utils";
import { Icon } from "./Icon";

/**
 * Renders an optimized `next/image` (fill mode) when the file exists in /public, otherwise a
 * branded placeholder. The parent must be `relative` and sized (e.g. with an aspect ratio).
 *
 * In development the placeholder shows the expected file path so assets can be dropped in.
 */
export function ImageOrFallback({
  image,
  sizes,
  preload = false,
  className,
  tone = "dark",
  label,
  decorative = false,
}: {
  image: ImageAsset | null | undefined;
  sizes: string;
  preload?: boolean;
  className?: string;
  tone?: "dark" | "light";
  label?: string;
  /** Background usage: the fallback is an empty branded panel hidden from assistive tech. */
  decorative?: boolean;
}) {
  if (image && isImageAvailable(image.src)) {
    return (
      <Image
        src={image.src}
        alt={decorative ? "" : image.alt}
        fill
        sizes={sizes}
        preload={preload}
        className={cn("object-cover", className)}
      />
    );
  }

  if (decorative) {
    return <div aria-hidden="true" className={cn("absolute inset-0 bg-brand-dark bg-grid", className)} />;
  }

  const isDev = process.env.NODE_ENV !== "production";
  return (
    <div
      role="img"
      aria-label={image ? `${image.alt} (photo coming soon)` : "Photo coming soon"}
      className={cn(
        "absolute inset-0 flex flex-col items-center justify-center gap-3 overflow-hidden p-4 text-center",
        tone === "dark" ? "bg-brand-dark bg-grid text-white/70" : "bg-surface text-muted",
        className,
      )}
    >
      <Icon name="image" className="size-7 opacity-60" />
      <span className="max-w-[28ch] text-xs font-medium tracking-wide">
        {label ?? image?.alt ?? "Photo coming soon"}
      </span>
      {isDev && image ? (
        <code className="max-w-full truncate rounded bg-black/30 px-2 py-1 text-[10px] text-white/80">{image.src}</code>
      ) : null}
    </div>
  );
}
