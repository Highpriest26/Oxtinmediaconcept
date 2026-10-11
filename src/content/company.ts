import type { CompanyInfo } from "./types";

/**
 * Verified company information (source: client-supplied company presentation +
 * implementation spec v2). Items still awaiting confirmation are marked.
 *
 * DO NOT add: bank details, financial-capacity figures, tax/CAC documents,
 * unconfirmed staff counts, or unverified market-share claims.
 */
export const company: CompanyInfo = {
  legalName: "Oxtinmediaconcept Limited",
  shortName: "Oxtinmediaconcept",
  established: 2017,
  experienceDisplay: "Since 2017",
  projectsDisplay: "450+ Projects Delivered",
  locationSummary: "Abuja, Nigeria",
  positioning:
    "An Abuja-based branding, printing, fabrication and installation company delivering visual branding solutions for businesses, advertising agencies, retailers and organisations across Nigeria.",
  capabilitySummary:
    "Oxtinmediaconcept combines design, printing, fabrication, billboard construction and installation, commercial branding and sculpture to deliver physical brand experiences from production through execution.",
  executionSummary:
    "Oxtinmediaconcept coordinates production and project execution through field teams and supervisors, supporting work in Abuja and across multiple Nigerian states.",
  executionDetail:
    "Team leaders supervise execution at state level, while a general supervisor reviews completed work and materials before a job is signed off.",
  proofStrip: [
    { value: "Since 2017", label: "Industry experience" },
    { value: "450+", label: "Projects delivered" },
    { value: "Abuja", label: "Head office" },
    { value: "Multi-State", label: "Project execution" },
  ],
  process: [
    {
      title: "Consult",
      description: "We discuss your brand, location, size, timeline and what the finished work needs to achieve.",
    },
    {
      title: "Design",
      description: "Concepts and production-ready artwork are prepared and agreed before anything is made.",
    },
    {
      title: "Produce",
      description: "Printing, fabrication and finishing are handled through our production workshop.",
    },
    {
      title: "Install",
      description: "Field teams install on site — from storefronts and façades to billboard structures.",
    },
    {
      title: "Quality Check",
      description: "Supervisors review completed work and materials before the project is handed over.",
    },
  ],
  // PLACEHOLDER: the client will confirm the states/regions currently served. Hidden while empty.
  serviceRegions: [],
  serviceRegionsStatus: "placeholder",
};
