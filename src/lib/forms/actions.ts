"use server";

import { getEnquiryProvider } from "./provider";
import { readEnquiry, validateEnquiry, type EnquiryKind, type EnquiryState } from "./validation";

/**
 * Single server action for all enquiry forms. Swap delivery providers in ./provider.ts only.
 * Success is returned ONLY when a configured provider confirms delivery.
 */
export async function submitEnquiry(_prev: EnquiryState, formData: FormData): Promise<EnquiryState> {
  const kindRaw = formData.get("kind");
  const kind: EnquiryKind = kindRaw === "contact" ? "contact" : "quote";

  // Honeypot: real users never fill this hidden field. Treat as invalid without detail.
  const trap = formData.get("website");
  if (typeof trap === "string" && trap.length > 0) {
    return { status: "error", message: "Your enquiry could not be sent. Please contact us by phone or WhatsApp." };
  }

  const values = readEnquiry(kind, formData);
  const fieldErrors = validateEnquiry(kind, values);
  if (Object.keys(fieldErrors).length > 0) {
    return { status: "invalid", message: "Please correct the highlighted fields.", fieldErrors };
  }

  const provider = getEnquiryProvider();
  if (!provider) {
    if (process.env.NODE_ENV !== "production") {
      console.warn("[enquiry] No ENQUIRY_PROVIDER configured — submission was NOT delivered.");
    }
    return {
      status: "not_configured",
      message:
        "Online enquiries aren't connected yet, so this message has not been sent. Please call, WhatsApp or email us directly using the details on this page.",
    };
  }

  const result = await provider.send({ kind, values, submittedAt: new Date().toISOString() });
  if (!result.ok) {
    console.error(`[enquiry] Delivery via ${provider.name} failed: ${result.error}`);
    return {
      status: "error",
      message:
        "Something went wrong and your enquiry was not sent. Please try again, or contact us by phone, WhatsApp or email.",
    };
  }

  return {
    status: "success",
    message: "Thank you — your enquiry has been sent. Our team will get back to you shortly.",
  };
}
