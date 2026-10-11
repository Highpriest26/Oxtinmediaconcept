import { media } from "./media";
import type { Equipment } from "./types";

/**
 * Verified production equipment (names/models exactly as supplied in the company profile).
 * Do not add technical specifications that the client has not provided.
 */
export const equipment: Equipment[] = [
  { name: "Yinghe", model: "YH-3200S", category: "Large-format production", image: media.equipment01 },
  { name: "Konica Minolta", model: "C4070", category: "Digital print production", image: media.equipment02 },
  { name: "Heidelberg Offset", model: "KORD 64", category: "Offset printing", image: media.equipment03 },
];
