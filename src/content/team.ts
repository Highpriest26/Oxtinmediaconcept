import { media } from "./media";
import type { ImageAsset, TeamMember } from "./types";

/**
 * Leadership, origin history, and verified team members for Oxtinmediaconcept.
 */
export const ceo = {
  name: "Ezeh Augustine Sunday",
  title: "Founder, Managing Director & CEO",
  role: "Founder, Managing Director & CEO",
  photo: null as ImageAsset | null,
  bio: "Ezeh Augustine Sunday founded Oxtinmediaconcept in 2017 with a hands-on commitment to excellence in physical branding, large-format printing, structural fabrication, billboard installations, and creative sculpture. Under his leadership, the company has grown from an Abuja printing and signage workshop into a trusted nationwide execution partner with over 450 projects delivered across Nigeria.",
  quote: "We don't merely produce graphics on screens. We take complete engineering and production ownership to install physical brand experiences that endure in the real world.",
};

export const companyOrigin = {
  founded: 2017,
  headquarters: "Abuja, Nigeria",
  narrative: [
    "Oxtinmediaconcept Limited began in 2017 with a focused mission: to eliminate the gap between high-concept corporate visual identity and practical, durable physical production. In an industry where agencies often broker projects out and lose quality control, Oxtinmediaconcept invested directly in industrial machinery, heavy workshop fabrication, and dedicated field installation crews.",
    "Starting with precision signage, corporate branding, and commercial print runs, the company quickly earned the trust of major technology and retail brands, including TECNO, Infinix, itel, and OPPO. Delivering complex multi-site rollouts across northern and central Nigeria demonstrated our ability to meet demanding timelines while maintaining uncompromising build standards.",
    "Today, Oxtinmediaconcept operates industrial large-format (Yinghe), high-speed digital (Konica Minolta), and offset (Heidelberg) equipment, alongside steel fabrication facilities and bespoke figurative sculpture ateliers. With a team spanning Abuja and multiple states, we bring brand stories to life from initial artwork to permanent physical installation.",
  ],
  milestones: [
    { year: "2017", title: "Foundation in Abuja", description: "Established Oxtinmediaconcept with dedicated in-house printing and signage equipment." },
    { year: "2019", title: "Major Brand Partnerships", description: "Initiated multi-store retail branding and façade rollouts for TECNO, Infinix, and itel." },
    { year: "2021", title: "Heavy Billboard & Steel Fabrication", description: "Expanded into high-capacity outdoor advertising structures and metal fabrication." },
    { year: "2023", title: "Multi-State Execution Network", description: "Established regional supervisor coverage across FCT Abuja, Nasarawa, Niger, Plateau, and Kogi." },
    { year: "Present", title: "450+ Delivered Projects", description: "Delivering nationwide branding, structural billboards, large-format print, and fine sculpture." },
  ],
};

export const team: TeamMember[] = [
  {
    name: "Ezeh Augustine Sunday",
    role: "Founder, Managing Director & CEO",
    roleStatus: "verified",
    photo: null,
    group: "leadership",
    public: true,
  },
  {
    name: "Umahi Emmanuel",
    role: "Production & Brand Account Lead",
    region: "TECNO & Infinix Accounts",
    roleStatus: "verified",
    photo: media.teamUmahi,
    group: "staff",
    public: true,
  },
  {
    name: "Nnadi Chris",
    role: "Production & Brand Account Lead",
    region: "itel Accounts",
    roleStatus: "verified",
    photo: media.teamNnadi,
    group: "staff",
    public: true,
  },
  {
    name: "Samuel Qoyum",
    role: "Senior Graphic Designer",
    region: "Creative Direction & Production Art",
    roleStatus: "verified",
    photo: media.teamSamuel,
    group: "staff",
    public: true,
  },
  {
    name: "John Ateboh",
    role: "Structural & Fabrication Engineer",
    region: "Billboards & Metal Fabrication",
    roleStatus: "verified",
    photo: media.teamJohn,
    group: "staff",
    public: true,
  },
  {
    name: "Ajibade Felix",
    role: "Large Format Print Specialist",
    region: "Industrial Print Operations",
    roleStatus: "verified",
    photo: media.teamAjibade,
    group: "staff",
    public: true,
  },
  {
    name: "Felicity Cyprian",
    role: "Operations & Administration Lead",
    region: "Project Coordination & Client Service",
    roleStatus: "verified",
    photo: media.teamFelicity,
    group: "staff",
    public: true,
  },
  // ---- State team leaders ----
  {
    name: "Suchiman Johnson",
    role: "State Team Leader",
    region: "FCT Abuja",
    roleStatus: "verified",
    photo: null,
    group: "state-lead",
    public: true,
  },
  {
    name: "Dalhatu Yunusa",
    role: "State Team Leader",
    region: "Nasarawa State",
    roleStatus: "verified",
    photo: null,
    group: "state-lead",
    public: true,
  },
  {
    name: "Usman Yahaya",
    role: "State Team Leader",
    region: "Niger State",
    roleStatus: "verified",
    photo: null,
    group: "state-lead",
    public: true,
  },
  {
    name: "Aliyu Yahaya",
    role: "State Team Leader",
    region: "Plateau State",
    roleStatus: "verified",
    photo: null,
    group: "state-lead",
    public: true,
  },
  {
    name: "Friday Okolie",
    role: "State Team Leader",
    region: "Kogi State",
    roleStatus: "verified",
    photo: null,
    group: "state-lead",
    public: true,
  },
];
