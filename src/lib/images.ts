import availableImages from "@/content/generated/available-images.json";
import type { ImageAsset } from "@/content/types";

/**
 * Image availability is computed at build time by `scripts/scan-images.mjs`.
 * Works in both Server and Client Components (plain JSON import, no fs access at runtime).
 */
const available = new Set<string>(availableImages as string[]);

export function isImageAvailable(src: string | null | undefined): boolean {
  return !!src && available.has(src);
}

export function availableOnly(images: ImageAsset[]): ImageAsset[] {
  return images.filter((i) => isImageAvailable(i.src));
}

/** First image that actually exists, else the first declared image (for placeholder labelling). */
export function pickImage(images: (ImageAsset | null | undefined)[]): ImageAsset | null {
  const list = images.filter(Boolean) as ImageAsset[];
  return list.find((i) => isImageAvailable(i.src)) ?? list[0] ?? null;
}
