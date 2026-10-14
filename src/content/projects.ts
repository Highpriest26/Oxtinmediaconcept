import { media } from "./media";
import type { PortfolioFilter, Project } from "./types";

/**
 * Portfolio — version 1 uses VISUAL BRAND PORTFOLIO GROUPS.
 *
 * The client has approved these photos for public display and approved naming the visible
 * brands. Detailed per-project metadata (dates, locations, scope, materials, results) has NOT
 * been supplied, so those fields are intentionally left undefined and are not rendered.
 *
 * To add a verified case study later: add a new entry with `kind: "case-study"`,
 * `detailsStatus: "VERIFIED_CASE_STUDY"` and fill in the case-study fields — the project
 * detail page renders every populated field automatically.
 */
export const projects: Project[] = [
  {
    id: "p-tecno",
    slug: "tecno-branding-portfolio",
    kind: "brand-portfolio",
    title: "TECNO Retail, Façade & Outdoor Branding",
    brand: "TECNO",
    category: "Branding, Signage & Fabricated Letters",
    filters: ["retail-signage", "outdoor"],
    serviceSlugs: ["branding-signage", "billboards-outdoor-advertising"],
    shortDescription:
      "Building façades, retail locations, outdoor branding and signage for TECNO, from our approved portfolio.",
    workShown: ["Commercial façade branding", "Multi-store retail branding", "Outdoor billboard branding", "Signage"],
    images: [
      media.tecnoCommercialFacade01,
      media.tecnoRetailComplex01,
      media.tecnoOutdoorBillboard01,
      media.tecnoOutdoorFacade02,
      media.tecnoOnitshaOutdoor01,
      media.tecnoOppoFacade01,
    ],
    featured: true,
    detailsStatus: "VISUAL_PORTFOLIO_ONLY_UNTIL_MORE_PROJECT_DATA",
    isPlaceholder: false,
  },
  {
    id: "p-infinix",
    slug: "infinix-branding-portfolio",
    kind: "brand-portfolio",
    title: "Infinix Retail & Display Branding",
    brand: "Infinix",
    category: "Branding, Signage & Fabricated Letters",
    filters: ["retail-signage"],
    serviceSlugs: ["branding-signage"],
    shortDescription: "Infinix retail branding and branded display installations, from our approved portfolio.",
    workShown: ["Branded display installation", "Retail store branding", "Commercial building branding", "Façade branding"],
    images: [
      media.infinixZeroXDisplay01,
      media.infinixZeroXDisplay02,
      media.infinixRetailStore01,
      media.infinixBuildingWrap01,
      media.carlcareFacade01,
    ],
    featured: true,
    detailsStatus: "VISUAL_PORTFOLIO_ONLY_UNTIL_MORE_PROJECT_DATA",
    isPlaceholder: false,
  },
  {
    id: "p-itel",
    slug: "itel-branding-portfolio",
    kind: "brand-portfolio",
    title: "itel Outdoor & Retail Branding",
    brand: "itel",
    category: "Billboards & Outdoor Advertising",
    filters: ["outdoor", "retail-signage"],
    serviceSlugs: ["billboards-outdoor-advertising", "branding-signage"],
    shortDescription: "Outdoor billboard and retail store branding for itel, from our approved portfolio.",
    workShown: ["Outdoor billboard branding", "Retail store branding"],
    images: [media.itelOutdoorBillboard01, media.itelRetailStore01],
    featured: true,
    detailsStatus: "VISUAL_PORTFOLIO_ONLY_UNTIL_MORE_PROJECT_DATA",
    isPlaceholder: false,
  },
  {
    id: "p-sculpture",
    slug: "sculpture-portfolio",
    kind: "brand-portfolio",
    title: "Sculpture & Figurative Works",
    brand: null,
    category: "Sculpture & Creative Fabrication",
    filters: ["sculpture"],
    serviceSlugs: ["sculpture-creative-fabrication"],
    shortDescription: "Completed and work-in-progress figurative sculptures, busts and installed pieces.",
    workShown: ["Figurative sculpture", "Portrait busts", "Armature and modelling", "Installed sculpture"],
    images: [
      media.sculpture08,
      media.sculpture05,
      media.sculpture01,
      media.sculpture04,
      media.sculpture02,
      media.sculpture06,
      media.sculpture03,
      media.sculpture07,
    ],
    featured: true,
    detailsStatus: "VISUAL_PORTFOLIO_ONLY_UNTIL_MORE_PROJECT_DATA",
    isPlaceholder: false,
  },
  {
    id: "p-oppo",
    slug: "oppo-commercial-branding",
    kind: "brand-portfolio",
    title: "OPPO Commercial Branding",
    brand: "OPPO",
    category: "Branding, Signage & Fabricated Letters",
    filters: ["retail-signage"],
    serviceSlugs: ["branding-signage"],
    shortDescription: "Commercial façade branding featuring OPPO, from our approved portfolio.",
    workShown: ["Commercial façade branding"],
    images: [media.oppoTecnoFacade01],
    featured: false,
    detailsStatus: "VISUAL_PORTFOLIO_ONLY_UNTIL_MORE_PROJECT_DATA",
    isPlaceholder: false,
  },
  {
    id: "p-speedaf",
    slug: "speedaf-vehicle-branding",
    kind: "brand-portfolio",
    title: "Speedaf Vehicle Branding",
    brand: "Speedaf",
    category: "Vehicle Branding",
    filters: ["vehicle"],
    serviceSlugs: ["vehicle-branding"],
    shortDescription: "Branded logistics motorcycle for Speedaf, from our approved portfolio.",
    workShown: ["Fleet / motorcycle branding"],
    images: [media.speedafMotorcycle01],
    featured: false,
    detailsStatus: "VISUAL_PORTFOLIO_ONLY_UNTIL_MORE_PROJECT_DATA",
    isPlaceholder: false,
  },
];

/** Slug of the project used for the homepage "Featured Brand Portfolio" story. */
export const featuredStorySlug = "tecno-branding-portfolio";

export const portfolioFilters: { id: PortfolioFilter; label: string }[] = [
  { id: "outdoor", label: "Outdoor" },
  { id: "retail-signage", label: "Retail & Signage" },
  { id: "printing", label: "Printing" },
  { id: "vehicle", label: "Vehicle Branding" },
  { id: "sculpture", label: "Sculpture" },
];

/** Brands approved for public naming (shown in the "Selected Brands" strip). */
export const selectedBrands: string[] = ["TECNO", "Infinix", "itel", "OPPO", "Speedaf"];
