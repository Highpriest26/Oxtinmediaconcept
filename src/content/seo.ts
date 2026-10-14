import type { PageSeo } from "./types";

/** Base URL for canonical/OG URLs. Set NEXT_PUBLIC_SITE_URL in production (e.g. on Vercel). */
export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(/\/$/, "");

export const seo = {
  siteName: "Oxtinmediaconcept Limited",
  titleTemplate: "%s | Oxtinmediaconcept",
  home: {
    title: "Oxtinmediaconcept Limited | Branding, Printing, Billboards, Signage & Sculpture",
    description:
      "Oxtinmediaconcept Limited is an Abuja-based branding, printing, fabrication, billboard, signage and sculpture company delivering visual branding projects across Nigeria.",
  },
  about: {
    title: "About Us",
    description:
      "Since 2017, Oxtinmediaconcept has delivered 450+ branding, printing, signage, billboard and sculpture projects from its Abuja head office.",
  },
  services: {
    title: "Services",
    description:
      "Billboards and outdoor advertising, branding, signage and fabricated letters, large-format and general printing, vehicle branding, painting and alco-board cladding, sculpture, and graphic design.",
  },
  projects: {
    title: "Projects",
    description:
      "Selected retail, façade, outdoor, vehicle branding and sculpture work by Oxtinmediaconcept, including work for TECNO, Infinix, itel, OPPO and Speedaf.",
  },
  quote: {
    title: "Start a Project",
    description:
      "Tell us about your branding, signage, billboard, printing or sculpture project and request a quote from Oxtinmediaconcept.",
  },
  contact: {
    title: "Contact",
    description: "Call, WhatsApp, email or visit Oxtinmediaconcept Limited at Murg Shopping Mall, Area 10, Garki, Abuja.",
  },
} satisfies Record<string, PageSeo | string>;
