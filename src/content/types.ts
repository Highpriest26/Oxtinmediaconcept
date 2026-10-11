/**
 * Shared content types for the Oxtinmediaconcept website.
 *
 * All public copy, company facts, services, portfolio data and media references live in
 * `src/content/*`. Layout components only render these structures, so updating client
 * information never requires editing page/JSX layouts.
 */

/** Verification status of a piece of content. */
export type ContentStatus =
  /** Approved/verified by the client and safe to publish. */
  | "verified"
  /** Supplied but awaiting client confirmation — do not present as fact. */
  | "unconfirmed"
  /** Explicit placeholder — replace with real client content. */
  | "placeholder";

export type ImageAsset = {
  /** Path relative to /public, e.g. `/images/projects/tecno/tecno-commercial-facade-01.jpg`. */
  src: string;
  /** Meaningful alt text describing what the photo shows. */
  alt: string;
  caption?: string;
};

export type BrandColors = {
  primary: string;
  primaryDark: string;
  background: string;
  surface: string;
  text: string;
  muted: string;
  accent: string;
};

export type Branding = {
  companyName: string;
  /** Short wordmark parts used until the real logo file is supplied. */
  wordmark: { strong: string; light: string };
  /** Set to an image once the client's logo file is in /public/images/brand. */
  logo: { src: string; alt: string; width: number; height: number } | null;
  tagline: string;
  colors: BrandColors;
  colorStatus: ContentStatus;
};

export type ProofItem = { value: string; label: string };

export type ProcessStep = { title: string; description: string };

export type CompanyInfo = {
  legalName: string;
  shortName: string;
  established: number;
  experienceDisplay: string;
  projectsDisplay: string;
  locationSummary: string;
  positioning: string;
  capabilitySummary: string;
  executionSummary: string;
  executionDetail: string;
  proofStrip: ProofItem[];
  process: ProcessStep[];
  /** States/regions served — empty until the client confirms. Hidden when empty. */
  serviceRegions: string[];
  serviceRegionsStatus: ContentStatus;
};

export type PhoneNumber = {
  display: string;
  /** E.164 format used for tel: links. */
  e164: string;
  label: string;
  status: ContentStatus;
  /** Only numbers with `public: true` are rendered. */
  public: boolean;
};

export type SocialLink = { label: string; href: string };

export type ContactInfo = {
  address: { lines: string[]; singleLine: string; status: ContentStatus };
  phones: PhoneNumber[];
  /** e164 of the number used for the primary call CTA. */
  primaryPhone: string;
  whatsapp: { e164: string; display: string; defaultMessage: string; status: ContentStatus };
  email: { address: string; status: ContentStatus };
  /** Empty until the client supplies verified URLs. Never guess social links. */
  socialLinks: SocialLink[];
  /** Map embed URL — null until the client approves a map location. */
  mapEmbedUrl: string | null;
};

export type NavItem = { label: string; href: string };

export type IconName =
  | "billboard"
  | "signage"
  | "printer"
  | "vehicle"
  | "roller"
  | "sculpture"
  | "pen";

export type Service = {
  slug: string;
  title: string;
  summary: string;
  /** Longer intro paragraphs for the service detail page. */
  description: string[];
  includes: string[];
  icon: IconName;
  image: ImageAsset | null;
  /** Quote-form project type that matches this service. */
  quoteProjectType: string;
};

export type PortfolioFilter = "outdoor" | "retail-signage" | "printing" | "vehicle" | "sculpture";

export type ProjectKind =
  /** A visual group of approved photos for a brand/category (detailed metadata pending). */
  | "brand-portfolio"
  /** A fully verified case study. */
  | "case-study";

export type Project = {
  id: string;
  slug: string;
  kind: ProjectKind;
  title: string;
  /** Brand or client name — only where approved for public naming. */
  brand: string | null;
  /** Display category. */
  category: string;
  /** Filters this project appears under on /projects. */
  filters: PortfolioFilter[];
  /** Service slugs this work relates to (drives related work on service pages). */
  serviceSlugs: string[];
  shortDescription: string;
  /** Types of work visible in the approved photos (not a verified scope of work). */
  workShown?: string[];
  // ---- Case-study fields: leave undefined until verified. Empty sections are not rendered. ----
  client?: string;
  location?: string;
  year?: string;
  overview?: string;
  brief?: string;
  scope?: string[];
  materials?: string[];
  designApproach?: string;
  fabricationProcess?: string;
  installation?: string;
  challenges?: string;
  challengeResolution?: string;
  result?: string;
  videoUrl?: string;
  // ---------------------------------------------------------------------------------------------
  images: ImageAsset[];
  featured: boolean;
  detailsStatus: "VISUAL_PORTFOLIO_ONLY_UNTIL_MORE_PROJECT_DATA" | "VERIFIED_CASE_STUDY";
  isPlaceholder: boolean;
};

export type Equipment = {
  name: string;
  model: string;
  category: string;
  image: ImageAsset | null;
};

export type TeamMember = {
  name: string;
  /** Null until the client confirms the public title. */
  role: string | null;
  roleStatus: ContentStatus;
  photo: ImageAsset | null;
  group: "leadership" | "staff" | "state-lead";
  region?: string;
  /** Only members with `public: true` are ever rendered. */
  public: boolean;
};

export type Faq = { question: string; answer: string; status: ContentStatus };

export type PageSeo = { title: string; description: string };
