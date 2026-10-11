import type { ImageAsset } from "./types";

/**
 * Media library — mirrors the client media manifest (public_use: true assets only).
 *
 * Drop the approved JPG files at these exact paths under /public and rebuild. Until a file
 * exists, the site renders a branded placeholder in its place (see `scripts/scan-images.mjs`).
 *
 * Reference-only assets (team photos/staff cards, company-relations photos) are deliberately
 * NOT listed here and must stay out of /public until the client approves them.
 */
const img = (src: string, alt: string): ImageAsset => ({ src, alt });

export const media = {
  // ---- TECNO ----
  tecnoCommercialFacade01: img("/images/projects/tecno/tecno-commercial-facade-01.jpg", "TECNO commercial façade branding"),
  tecnoRetailComplex01: img("/images/projects/tecno/tecno-retail-complex-01.jpg", "TECNO multi-store retail complex branding"),
  tecnoOutdoorBillboard01: img("/images/projects/tecno/tecno-outdoor-billboard-01.jpg", "TECNO outdoor billboard and façade branding"),
  tecnoOutdoorFacade02: img("/images/projects/tecno/tecno-outdoor-facade-02.jpg", "TECNO outdoor façade and billboard branding"),
  tecnoOnitshaOutdoor01: img("/images/projects/tecno/tecno-onitsha-outdoor-branding-01.jpg", "TECNO outdoor branding, Onitsha-region portfolio"),
  tecnoOppoFacade01: img("/images/projects/tecno/tecno-oppo-commercial-facade-01.jpg", "TECNO and OPPO commercial façade branding"),

  // ---- Infinix ----
  infinixZeroXDisplay01: img("/images/projects/infinix/infinix-zero-x-display-01.jpg", "Infinix Zero X branded display installation"),
  infinixZeroXDisplay02: img("/images/projects/infinix/infinix-zero-x-display-02.jpg", "Infinix Zero X branded display installation, alternate view"),
  infinixRetailStore01: img("/images/projects/infinix/infinix-retail-store-01.jpg", "Infinix retail store branding"),
  infinixBuildingWrap01: img("/images/projects/infinix/infinix-building-wrap-01.jpg", "Infinix commercial building branding"),
  // Note: image also shows Carlcare/Oraimo/Syinix branding — do not infer contracting relationships.
  carlcareFacade01: img("/images/projects/infinix/carlcare-commercial-facade-01.jpg", "Carlcare commercial façade branding with Infinix family branding"),

  // ---- itel ----
  itelOutdoorBillboard01: img("/images/projects/itel/itel-outdoor-billboard-01.jpg", "itel outdoor billboard branding"),
  itelRetailStore01: img("/images/projects/itel/itel-retail-store-01.jpg", "itel retail store branding"),

  // ---- OPPO ----
  oppoTecnoFacade01: img("/images/projects/oppo/tecno-oppo-commercial-facade-01.jpg", "TECNO and OPPO commercial façade branding"),

  // ---- Speedaf ----
  speedafMotorcycle01: img("/images/projects/speedaf/speedaf-motorcycle-branding-01.jpg", "Speedaf branded logistics motorcycle"),

  // ---- Sculpture ----
  sculpture01: img("/images/sculpture/sculpture-01.jpg", "Figurative guitarist sculpture"),
  sculpture02: img("/images/sculpture/sculpture-02.jpg", "Figurative sculpture of an armed person"),
  sculpture03: img("/images/sculpture/sculpture-03.jpg", "Sculpture armature, work in progress"),
  sculpture04: img("/images/sculpture/sculpture-04.jpg", "Series of portrait bust sculptures"),
  sculpture05: img("/images/sculpture/sculpture-05.jpg", "Installed standing figurative sculpture"),
  sculpture06: img("/images/sculpture/sculpture-06.jpg", "Portrait sculpture modelling process"),
  sculpture07: img("/images/sculpture/sculpture-07.jpg", "Standing figure sculpture, work in progress"),

  // ---- Equipment ----
  equipment01: img("/images/equipment/equipment-01.jpg", "Yinghe large-format printing equipment"),
  equipment02: img("/images/equipment/equipment-02.jpg", "Konica Minolta production printing equipment"),
  equipment03: img("/images/equipment/equipment-03.jpg", "Heidelberg offset printing equipment"),
  equipment04: img("/images/equipment/equipment-04.jpg", "Digital production workstation"),
  equipment05: img("/images/equipment/equipment-05.jpg", "Workshop tools and fabrication equipment"),
  equipment06: img("/images/equipment/equipment-06.jpg", "Fabrication power equipment in use"),
  equipment07: img("/images/equipment/equipment-07.jpg", "Workshop equipment"),
  equipment08: img("/images/equipment/equipment-08.jpg", "Workshop equipment"),
  equipment09: img("/images/equipment/equipment-09.jpg", "Workshop equipment"),
  equipment10: img("/images/equipment/equipment-10.jpg", "Workshop equipment"),
  equipment11: img("/images/equipment/equipment-11.jpg", "Workshop equipment"),

  // ---- Workshop ----
  workshop01: img("/images/workshop/workshop-01.jpg", "Workshop and materials storage"),
  workshop02: img("/images/workshop/workshop-02.jpg", "Workshop and materials storage"),
  workshop03: img("/images/workshop/workshop-03.jpg", "Workshop and materials storage"),
  workshop04: img("/images/workshop/workshop-04.jpg", "Workshop and materials storage"),
  workshop05: img("/images/workshop/workshop-05.jpg", "Workshop and materials storage"),
  workshop06: img("/images/workshop/workshop-06.jpg", "Workshop and materials storage"),
  workshop07: img("/images/workshop/workshop-07.jpg", "Workshop and materials storage"),
  workshop08: img("/images/workshop/workshop-08.jpg", "Workshop and materials storage"),
  workshop09: img("/images/workshop/workshop-09.jpg", "Workshop and materials storage"),
} satisfies Record<string, ImageAsset>;

/** Main homepage hero image (the only image loaded with `preload`). */
export const heroImage = media.tecnoCommercialFacade01;

export const workshopGallery: ImageAsset[] = [
  media.equipment04,
  media.equipment05,
  media.equipment06,
  media.workshop01,
  media.workshop02,
  media.workshop03,
  media.equipment07,
  media.workshop04,
  media.workshop05,
  media.equipment08,
  media.workshop06,
  media.workshop07,
  media.equipment09,
  media.workshop08,
  media.workshop09,
  media.equipment10,
  media.equipment11,
];
