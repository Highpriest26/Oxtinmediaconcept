import { media } from "./media";
import type { Service } from "./types";

/**
 * Confirmed service categories (implementation spec v2 → confirmed_services).
 * `includes` lists are verbatim from the client's company profile.
 */
export const services: Service[] = [
  {
    slug: "billboards-outdoor-advertising",
    title: "Billboards & Outdoor Advertising",
    summary: "Construction, branding and installation of billboard structures and outdoor advertising assets.",
    description: [
      "Outdoor advertising has to hold up to scale, weather and distance. We build, brand and install billboard structures and outdoor campaign assets so your message is visible where it matters.",
      "From the structure itself to LED lighting and campaign artwork, the work is handled from production through installation.",
    ],
    includes: ["Billboard construction", "Billboard installation", "LED lighting on billboards", "Outdoor campaign branding"],
    icon: "billboard",
    image: media.itelOutdoorBillboard01,
    quoteProjectType: "Billboard / Outdoor Advertising",
  },
  {
    slug: "branding-signage",
    title: "Branding & Signage",
    summary: "Custom physical branding for commercial spaces, façades, retail environments and signage systems.",
    description: [
      "Your storefront and façade are often the first contact a customer has with your brand. We fabricate and install signage and brand elements that make commercial spaces instantly recognisable.",
      "Work ranges from designed letters and commercial signage to window graphics and full storefront and façade branding.",
    ],
    includes: [
      "Fabrication and installation of designed letters",
      "Commercial signage",
      "Window graphics",
      "Retail/storefront branding",
      "Façade branding",
    ],
    icon: "signage",
    image: media.tecnoRetailComplex01,
    quoteProjectType: "Branding & Signage",
  },
  {
    slug: "large-format-printing",
    title: "Large-Format & General Printing",
    summary: "Large-format, direct image and general printing for campaigns, retail displays and corporate branding.",
    description: [
      "Print production is handled in-house on our own equipment, covering large-format output for campaigns and displays as well as general and offset printing.",
      "This keeps production close to installation, so print and physical branding work together on every job.",
    ],
    includes: ["Large-format printing", "Direct Image (D.I.) printing", "General printing", "Campaign print production"],
    icon: "printer",
    image: media.equipment01,
    quoteProjectType: "Large-Format Printing",
  },
  {
    slug: "vehicle-branding",
    title: "Vehicle Branding",
    summary: "Commercial vehicle branding and branded fleet applications for mobile visibility.",
    description: [
      "Branded vehicles carry your identity everywhere they go. We apply vehicle branding for individual cars and commercial fleets.",
    ],
    includes: ["Car branding", "Fleet branding"],
    icon: "vehicle",
    image: media.speedafMotorcycle01,
    quoteProjectType: "Vehicle Branding",
  },
  {
    slug: "commercial-finishing",
    title: "Commercial Finishing",
    summary: "Finishing services that support complete brand implementation across commercial environments.",
    description: [
      "A brand installation is only as good as the surfaces around it. Our finishing services support complete brand implementation, including painting and Alco-board cladding.",
    ],
    includes: ["Painting", "Alco-board cladding"],
    icon: "roller",
    image: media.workshop01,
    quoteProjectType: "Commercial Finishing",
  },
  {
    slug: "sculpture-creative-fabrication",
    title: "Sculpture & Creative Fabrication",
    summary: "Custom sculptural and physical creative work for public, commercial and commemorative installations.",
    description: [
      "Alongside commercial branding, we create sculptural work — figures, busts and custom creative pieces for public, commercial and commemorative settings.",
      "Each piece is developed from armature and modelling through to finished, installed work.",
    ],
    includes: ["Sculpture", "Busts and figures", "Custom physical creative fabrication"],
    icon: "sculpture",
    image: media.sculpture05,
    quoteProjectType: "Sculpture / Creative Fabrication",
  },
  {
    slug: "graphic-design",
    title: "Graphic Design",
    summary: "Design support for visual branding, production artwork, print and campaign implementation.",
    description: [
      "Good production starts with good artwork. Our design team supports visual branding and prepares production-ready artwork for print, signage and campaigns.",
    ],
    includes: ["Graphic design", "Production-ready artwork"],
    icon: "pen",
    image: media.equipment04,
    quoteProjectType: "Graphic Design",
  },
];

/** Options for the quote form "Project type" field. */
export const quoteProjectTypes: string[] = [
  "Billboard / Outdoor Advertising",
  "Branding & Signage",
  "Large-Format Printing",
  "Vehicle Branding",
  "Commercial Finishing",
  "Sculpture / Creative Fabrication",
  "Graphic Design",
  "Other",
];

export const quoteTimelines: string[] = [
  "As soon as possible",
  "Within 1 month",
  "1–3 months",
  "More than 3 months",
  "Not sure yet",
];
