import type { TeamMember } from "./types";

/**
 * Team data. ONLY members with `public: true` are rendered anywhere on the site.
 *
 * Leadership: the client supplied the MD/CEO/founder name "Ezeh Augustine Sunday". The exact
 * public title and photograph have not been supplied, so `role` is null (rendered as
 * "Leadership") and no photo is shown. Update `role`/`photo` when confirmed.
 *
 * Staff and state team leaders below come from the company profile and are kept for future
 * use only. The client will confirm which employees may appear publicly ("I check later").
 */
export const team: TeamMember[] = [
  {
    name: "Ezeh Augustine Sunday",
    role: null,
    roleStatus: "unconfirmed",
    photo: null,
    group: "leadership",
    public: true,
  },

  // ---- Staff records (NOT public until confirmed) ----
  { name: "Umahi Emmanuel", role: "In charge of TECNO & Infinix", roleStatus: "unconfirmed", photo: null, group: "staff", public: false },
  { name: "Nnadi Chris", role: "In charge of itel", roleStatus: "unconfirmed", photo: null, group: "staff", public: false },
  { name: "Felicity Cyprian", role: "Secretary", roleStatus: "unconfirmed", photo: null, group: "staff", public: false },
  { name: "Samuel Qoyum", role: "Graphic Designer", roleStatus: "unconfirmed", photo: null, group: "staff", public: false },
  { name: "Ajibade Felix", role: "Large Format Operator", roleStatus: "unconfirmed", photo: null, group: "staff", public: false },
  { name: "John Ateboh", role: "Engineer", roleStatus: "unconfirmed", photo: null, group: "staff", public: false },

  // ---- State team leaders (NOT public until confirmed) ----
  { name: "Suchiman Johnson", role: "State Team Leader", region: "FCT Abuja", roleStatus: "unconfirmed", photo: null, group: "state-lead", public: false },
  { name: "Dalhatu Yunusa", role: "State Team Leader", region: "Nasarawa State", roleStatus: "unconfirmed", photo: null, group: "state-lead", public: false },
  { name: "Usman Yahaya", role: "State Team Leader", region: "Niger State", roleStatus: "unconfirmed", photo: null, group: "state-lead", public: false },
  { name: "Aliyu Yahaya", role: "State Team Leader", region: "Plateau State", roleStatus: "unconfirmed", photo: null, group: "state-lead", public: false },
  { name: "Friday Okolie", role: "State Team Leader", region: "Kogi State", roleStatus: "unconfirmed", photo: null, group: "state-lead", public: false },
];
