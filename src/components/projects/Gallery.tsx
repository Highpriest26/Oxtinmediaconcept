"use client";

import { useState } from "react";
import type { ImageAsset } from "@/content/types";
import { isImageAvailable } from "@/lib/images";
import { cn } from "@/lib/utils";
import { Icon } from "../ui/Icon";
import { ImageOrFallback } from "../ui/ImageOrFallback";
import { Lightbox } from "./Lightbox";

/**
 * Responsive gallery. Available images open in the lightbox; missing images render as
 * placeholders (not clickable).
 *
 * - `strip`: horizontal scroll-snap on mobile, grid from md upwards (project pages)
 * - `masonry`: CSS-columns masonry (homepage showcase)
 */
export function Gallery({
  images,
  layout = "strip",
  label,
}: {
  images: ImageAsset[];
  layout?: "strip" | "masonry";
  label: string;
}) {
  const viewable = images.filter((i) => isImageAvailable(i.src));
  const [index, setIndex] = useState<number | null>(null);
  const close = () => setIndex(null);

  if (images.length === 0) return null;

  const masonryAspects = ["aspect-[4/5]", "aspect-[4/3]", "aspect-square", "aspect-[3/4]", "aspect-[5/4]"];

  return (
    <>
      <ul
        aria-label={label}
        className={cn(
          layout === "strip" && "grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3",
          layout === "masonry" && "columns-1 gap-4 sm:columns-2 md:columns-3 md:gap-6 [&>li]:mb-4 md:[&>li]:mb-6",
        )}
      >
        {images.map((image, i) => {
          const isViewable = isImageAvailable(image.src);
          const viewIndex = viewable.findIndex((v) => v.src === image.src);
          const aspect =
            layout === "masonry"
              ? masonryAspects[i % masonryAspects.length]
              : i === 0 && images.length > 2
                ? "aspect-[16/10] sm:aspect-[16/9]"
                : "aspect-[4/3]";
          return (
            <li
              key={`${image.src}-${i}`}
              className={cn(
                "group relative break-inside-avoid overflow-hidden rounded-2xl bg-brand-dark shadow-sm ring-1 ring-white/10",
                layout === "strip" && i === 0 && images.length > 2 && "sm:col-span-2",
                aspect,
              )}
            >
              <ImageOrFallback
                image={image}
                sizes={
                  layout === "masonry"
                    ? "(min-width: 768px) 33vw, 50vw"
                    : i === 0 && images.length > 2
                      ? "(min-width: 1024px) 66vw, (min-width: 768px) 100vw, 85vw"
                      : "(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 85vw"
                }
                className="transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              />

              {isViewable ? (
                <button
                  type="button"
                  onClick={() => setIndex(viewIndex)}
                  className="absolute inset-0 z-10 block size-full cursor-zoom-in focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                  aria-label={`View larger: ${image.alt}`}
                >
                  <span className="sr-only">View larger: {image.alt}</span>
                  <span
                    aria-hidden="true"
                    className="absolute bottom-3 right-3 grid size-10 place-items-center rounded-full bg-white/90 text-ink shadow-md opacity-0 transition-all duration-200 group-hover:opacity-100 group-focus-visible:opacity-100 group-hover:scale-110"
                  >
                    <Icon name="expand" className="size-4" />
                  </span>
                </button>
              ) : null}
            </li>
          );
        })}
      </ul>
      {viewable.length > 0 ? (
        <Lightbox images={viewable} index={index} onIndexChange={setIndex} onClose={close} />
      ) : null}
    </>
  );
}
