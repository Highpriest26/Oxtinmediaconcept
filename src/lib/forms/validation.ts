/**
 * Shared, dependency-free enquiry validation. Used by the client (instant feedback) and
 * re-run on the server inside the server action (never trust the client).
 */
import { quoteProjectTypes, quoteTimelines } from "@/content/services";

export type EnquiryKind = "quote" | "contact";

export type EnquiryValues = Record<string, string>;
export type FieldErrors = Partial<Record<string, string>>;

export type EnquiryState =
  | { status: "idle" }
  | { status: "invalid"; message: string; fieldErrors: FieldErrors }
  | { status: "not_configured"; message: string }
  | { status: "error"; message: string }
  | { status: "success"; message: string };

export const initialEnquiryState: EnquiryState = { status: "idle" };

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_CHARS = /^[+\d\s()-]+$/;

const LIMITS = { short: 120, medium: 300, long: 4000 } as const;

export const QUOTE_FIELDS = [
  "fullName",
  "company",
  "email",
  "phone",
  "projectType",
  "location",
  "scope",
  "timeline",
  "description",
  "consent",
] as const;

export const CONTACT_FIELDS = ["fullName", "email", "phone", "message", "consent"] as const;

function req(v: string | undefined, label: string, max: number = LIMITS.short): string | undefined {
  const s = (v ?? "").trim();
  if (!s) return `Please enter your ${label}.`;
  if (s.length > max) return `Please keep your ${label} under ${max} characters.`;
  return undefined;
}

function opt(v: string | undefined, label: string, max: number = LIMITS.short): string | undefined {
  const s = (v ?? "").trim();
  if (s.length > max) return `Please keep your ${label} under ${max} characters.`;
  return undefined;
}

function email(v: string | undefined): string | undefined {
  const s = (v ?? "").trim();
  if (!s) return "Please enter your email address.";
  if (!EMAIL.test(s) || s.length > 200) return "Please enter a valid email address, e.g. name@company.com.";
  return undefined;
}

function phone(v: string | undefined, required: boolean): string | undefined {
  const s = (v ?? "").trim();
  if (!s) return required ? "Please enter a phone or WhatsApp number." : undefined;
  const digits = s.replace(/\D/g, "");
  if (!PHONE_CHARS.test(s) || digits.length < 7 || digits.length > 15)
    return "Please enter a valid phone number, e.g. 0811 494 8814.";
  return undefined;
}

export function validateEnquiry(kind: EnquiryKind, v: EnquiryValues): FieldErrors {
  const e: FieldErrors = {};
  const set = (k: string, msg: string | undefined) => {
    if (msg) e[k] = msg;
  };

  set("fullName", req(v.fullName, "full name"));
  set("email", email(v.email));

  if (kind === "quote") {
    set("company", opt(v.company, "company or organisation name"));
    set("phone", phone(v.phone, true));
    if (!v.projectType) set("projectType", "Please choose a project type.");
    else if (!quoteProjectTypes.includes(v.projectType)) set("projectType", "Please choose a project type from the list.");
    set("location", req(v.location, "project location"));
    set("scope", opt(v.scope, "size or scope", LIMITS.medium));
    if (v.timeline && !quoteTimelines.includes(v.timeline)) set("timeline", "Please choose a timeline from the list.");
    const d = (v.description ?? "").trim();
    if (d.length < 20) set("description", "Please describe the project in at least 20 characters.");
    else if (d.length > LIMITS.long) set("description", `Please keep the description under ${LIMITS.long} characters.`);
  } else {
    set("phone", phone(v.phone, false));
    const m = (v.message ?? "").trim();
    if (m.length < 10) set("message", "Please write a message of at least 10 characters.");
    else if (m.length > LIMITS.long) set("message", `Please keep your message under ${LIMITS.long} characters.`);
  }

  if (v.consent !== "on") set("consent", "Please confirm we may use these details to respond to your enquiry.");

  return e;
}

/** Extract only known string fields from FormData (ignores files and unknown keys). */
export function readEnquiry(kind: EnquiryKind, form: FormData): EnquiryValues {
  const fields = kind === "quote" ? QUOTE_FIELDS : CONTACT_FIELDS;
  const out: EnquiryValues = {};
  for (const f of fields) {
    const val = form.get(f);
    out[f] = typeof val === "string" ? val.trim() : "";
  }
  return out;
}
