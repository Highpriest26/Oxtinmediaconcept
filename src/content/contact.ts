import type { ContactInfo } from "./types";

/**
 * Contact details — the ONLY place phone numbers, WhatsApp, email and address are defined.
 *
 * Phone numbers:
 *  - 08114948814: appears in both the company profile and the client's latest message → primary + WhatsApp.
 *  - 08064868303: supplied by the client in their latest message → displayed as secondary.
 *  - 07064868303 and 08081243672: listed in the company profile but not in the client's latest
 *    message (07064868303 may be the same number as 08064868303 with a typo). Kept here as
 *    `unconfirmed` and NOT displayed until the client confirms.
 *
 * Email: the client's message spelled it "oxtinmediaconcetp@gmail.com"; the company profile spells it
 * "oxtinmediaconcept@gmail.com". The profile spelling is used — CONFIRM WITH CLIENT.
 */
export const contact: ContactInfo = {
  address: {
    lines: ["C98, Second Floor, Murg Shopping Mall", "1 Akwa Street, Area 10, Garki", "Abuja FCT, Nigeria"],
    singleLine: "C98, Second Floor, Murg Shopping Mall, 1 Akwa Street, Area 10, Garki, Abuja FCT, Nigeria",
    status: "verified",
  },
  phones: [
    { display: "0811 494 8814", e164: "+2348114948814", label: "Phone / WhatsApp", status: "verified", public: true },
    { display: "0806 486 8303", e164: "+2348064868303", label: "Phone / WhatsApp", status: "verified", public: true },
    { display: "0706 486 8303", e164: "+2347064868303", label: "Phone", status: "unconfirmed", public: false },
    { display: "0808 124 3672", e164: "+2348081243672", label: "Phone", status: "unconfirmed", public: false },
  ],
  primaryPhone: "+2348114948814",
  whatsapp: {
    e164: "+2348114948814",
    display: "0811 494 8814",
    defaultMessage: "Hello Oxtinmediaconcept, I'd like to discuss a branding project.",
    status: "verified",
  },
  email: { address: "oxtinmediaconcept@gmail.com", status: "unconfirmed" },
  // PLACEHOLDER: add verified social-media URLs only. Never guess handles.
  socialLinks: [],
  // Map intentionally omitted until the client approves an embed for the office location.
  mapEmbedUrl: null,
};
