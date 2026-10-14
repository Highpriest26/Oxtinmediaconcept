import { media } from "./media";
import type { Service } from "./types";

/**
 * Confirmed service categories aligned with the client company profile.
 * `includes` lists are verbatim from the client's company profile.
 */
export const services: Service[] = [
  {
    slug: "billboards-outdoor-advertising",
    title: "Billboards & Outdoor Advertising",
    summary: "Construction and installation of billboards, including LED lighting on billboard structures.",
    description: [
      "We provide end-to-end construction and installation of billboards, engineered for long-term outdoor structural integrity and maximum campaign visibility.",
      "Our capabilities include custom billboard fabrication, structural erection, on-site installation, and integrated LED lighting on billboard structures for 24/7 visibility.",
    ],
    includes: ["Construction and installation of Billboards", "LED Lighting on Billboards"],
    icon: "billboard",
    image: media.itelOutdoorBillboard01,
    quoteProjectType: "Billboards & Outdoor Advertising",
  },
  {
    slug: "branding-signage",
    title: "Branding, Signage & Fabricated Letters",
    summary: "Fabrication and installation of designed letters, signage applications, and window graphics.",
    description: [
      "We fabricate and install designed letters and signage applications that establish clear, professional brand presence across physical locations.",
      "Our work covers fabricated 3D and designed letters, commercial signage, and precision window graphics tailored to brand specifications.",
    ],
    includes: [
      "Fabrication and installation of designed letters",
      "Window Graphic",
    ],
    icon: "signage",
    image: media.tecnoRetailComplex01,
    quoteProjectType: "Branding, Signage & Fabricated Letters",
  },
  {
    slug: "large-format-general-printing",
    title: "Large-Format & General Printing",
    summary: "Large-format printing, Direct Image (D.I), and general printing services.",
    description: [
      "Print production is handled with dedicated equipment to deliver high-resolution large-format printing alongside Direct Image (D.I) and general printing.",
      "We produce quality printed materials for commercial branding, advertising campaigns, and general business needs.",
    ],
    includes: ["Large Format Printing", "Direct Image (D.I) and General Printing"],
    icon: "printer",
    image: media.equipment01,
    quoteProjectType: "Large-Format & General Printing",
  },
  {
    slug: "vehicle-branding",
    title: "Vehicle Branding",
    summary: "Car branding and related branded vehicle graphics within the client-provided service scope.",
    description: [
      "We provide professional car branding solutions that transform single vehicles and commercial fleets into high-impact mobile brand touchpoints.",
      "All vehicle graphics are precision-measured, printed, and applied using weather-resistant materials for lasting visibility on the road.",
    ],
    includes: ["Car Branding"],
    icon: "vehicle",
    image: media.speedafMotorcycle01,
    quoteProjectType: "Vehicle Branding",
  },
  {
    slug: "commercial-finishing",
    title: "Painting & Alco-board Cladding",
    summary: "Painting and Alco-board cladding for branded and commercial environments.",
    description: [
      "We provide professional painting and Alco-board cladding services for commercial buildings, retail façades, and branded spaces.",
      "Our cladding installations and painting deliver durable, weather-tight surfaces and clean architectural finishes that support complete physical brand execution.",
    ],
    includes: ["Painting", "Alco-board Cladding"],
    icon: "roller",
    image: media.workshop01,
    quoteProjectType: "Painting & Alco-board Cladding",
  },
  {
    slug: "sculpture-creative-fabrication",
    title: "Sculpture & Creative Fabrication",
    summary: "Sculpture and related creative fabrication work demonstrated by approved portfolio imagery.",
    description: [
      "Alongside commercial branding, our workshop produces bespoke sculpture work — including figurative statues and portrait busts — from modelling through to installation.",
      "All work is grounded in our proven sculpture portfolio, combining hands-on sculptural craftsmanship with durable physical materials for public, corporate, and commemorative placements.",
    ],
    includes: ["Sculpture"],
    icon: "sculpture",
    image: media.sculpture05,
    quoteProjectType: "Sculpture & Creative Fabrication",
  },
  {
    slug: "graphic-design",
    title: "Graphic Design",
    summary: "Graphic design supporting branding, print production, and approved visual communication work.",
    description: [
      "Our graphic design team develops concepts and prepares production-ready artwork for billboards, signage, large-format printing, and branded collateral.",
      "Accurate graphic design ensures that brand assets, dimensions, and typography translate seamlessly into physical print and fabricated installations.",
    ],
    includes: ["Graphics Design"],
    icon: "pen",
    image: media.equipment04,
    quoteProjectType: "Graphic Design",
  },
];

/** Options for the quote form "Project type" field. */
export const quoteProjectTypes: string[] = [
  "Billboards & Outdoor Advertising",
  "Branding, Signage & Fabricated Letters",
  "Large-Format & General Printing",
  "Vehicle Branding",
  "Painting & Alco-board Cladding",
  "Sculpture & Creative Fabrication",
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
