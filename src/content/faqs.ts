import type { Faq } from "./types";

/**
 * General enquiry FAQs. Answers only restate confirmed facts (services, contact routes,
 * multi-state execution). No pricing, timelines or guarantees — CLIENT TO REVIEW.
 */
export const faqs: Faq[] = [
  {
    question: "How do I start a project?",
    answer:
      "Send us the details through the Request a Quote form, or call or WhatsApp us directly. Tell us what you need, where it will be installed, the approximate size and your preferred timeline.",
    status: "unconfirmed",
  },
  {
    question: "Do you work outside Abuja?",
    answer:
      "Our head office is in Abuja and we support project execution across multiple Nigerian states. Share your project location and we will confirm what is possible.",
    status: "unconfirmed",
  },
  {
    question: "Can you work with our existing artwork?",
    answer:
      "Yes — send what you have. Our design team can also prepare production-ready artwork for print, signage and campaigns.",
    status: "unconfirmed",
  },
  {
    question: "Do you handle installation?",
    answer:
      "Yes. We work from production through installation, including billboard installation and the fabrication and installation of signage and designed letters.",
    status: "unconfirmed",
  },
];
