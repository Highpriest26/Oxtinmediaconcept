import type { Branding } from "./types";

/**
 * Brand tokens. Colours are injected as CSS variables in the root layout and mapped to
 * Tailwind utilities (`bg-brand`, `text-brand-dark`, `bg-accent`, …) in globals.css.
 *
 * STATUS: The client confirmed "blue and white". Exact hex codes below are derived from the
 * company's existing materials (per the implementation spec) — replace with official brand
 * guide values when supplied.
 */
export const branding: Branding = {
  companyName: "Oxtinmediaconcept Limited",
  wordmark: { strong: "Oxtin", light: "mediaconcept" },
  logo: {
    src: "/images/brand/oxtin-logo-emblem-v2.png",
    alt: "Oxtinmediaconcept Limited Logo",
    width: 512,
    height: 512,
  },
  tagline: "Branding • Printing • Fabrication • Installation • Sculpture",
  colors: {
    primary: "#1536C6",
    primaryDark: "#0B1F75",
    background: "#FFFFFF",
    surface: "#F5F7FB",
    text: "#111827",
    muted: "#6B7280",
    accent: "#E31B23",
  },
  colorStatus: "unconfirmed",
};
