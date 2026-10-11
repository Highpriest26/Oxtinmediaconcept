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
          layout === "strip" &&
            "no-scrollbar -mx-5 flex snap-x snap-mandatory gap-3 overflow-x-auto px-5 md:mx-0 md:grid md:grid-cols-2 md:gap-4 md:overflow-visible md:px-0 lg:grid-cols-3",
          layout === "masonry" && "columns-2 gap-3 md:columns-3 md:gap-4 [&>li]:mb-3 md:[&>li]:mb-4",
        )}
      >
        {images.map((image, i) => {
          const isViewable = isImageAvailable(image.src);
          const viewIndex = viewable.findIndex((v) => v.src === image.src);
          const aspect =
            layout === "masonry"
              ? masonryAspects[i % masonryAspects.length]
              : i === 0 && images.length > 2
                ? "aspect-[4/3] md:aspect-[16/9] lg:aspect-auto"
                : "aspect-[4/3]";
          return (
            <li
              key={`${image.src}-${i}`}
              className={cn(
                "relative break-inside-avoid overflow-hidden bg-surface",
                layout === "strip" && "w-[82%] shrink-0 snap-start sm:w-[60%] md:w-auto",
                layout === "strip" && i === 0 && images.length > 2 && "md:col-span-2 lg:row-span-2",
                aspect,
              )}
            >
              {isViewable ? (
                <button
                  type="button"
                  onClick={() => setIndex(viewIndex)}
                  className="group absolute inset-0 block size-full cursor-zoom-in"
                  aria-label={`View larger: ${image.alt}`}
                >
                  <ImageOrFallback
                    image={image}
                    sizes={layout === "masonry" ? "(min-width: 768px) 33vw, 50vw" : "(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 82vw"}
                    className="transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <span className="absolute bottom-3 right-3 grid size-10 place-items-center bg-white/90 text-ink opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
                    <Icon name="expand" className="size-4" />
                  </span>
                </button>
              ) : (
                <ImageOrFallback image={image} sizes="33vw" />
              )}
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
