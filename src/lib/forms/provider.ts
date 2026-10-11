/**
 * Enquiry delivery providers (server-only — imported exclusively by the server action).
 *
 * Configure via environment variables (see .env.example). With no provider configured,
 * `getEnquiryProvider()` returns null and the action reports NOT CONFIGURED — it never
 * pretends a submission was delivered.
 */
import type { EnquiryKind, EnquiryValues } from "./validation";

export type Enquiry = {
  kind: EnquiryKind;
  values: EnquiryValues;
  submittedAt: string;
};

export type DeliveryResult = { ok: true } | { ok: false; error: string };

export interface EnquiryProvider {
  name: string;
  send(enquiry: Enquiry): Promise<DeliveryResult>;
}

/**
 * Generic JSON webhook (works with Make, Zapier, n8n, Formspree-style endpoints, or a custom API).
 * NOTE: not yet tested against a live endpoint — verify after configuring.
 */
function webhookProvider(url: string, secret?: string): EnquiryProvider {
  return {
    name: "webhook",
    async send(enquiry) {
      try {
        const res = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            ...(secret ? { Authorization: `Bearer ${secret}` } : {}),
          },
          body: JSON.stringify(enquiry),
          cache: "no-store",
          signal: AbortSignal.timeout(10_000),
        });
        if (!res.ok) return { ok: false, error: `Webhook responded with HTTP ${res.status}` };
        return { ok: true };
      } catch (err) {
        return { ok: false, error: err instanceof Error ? err.message : "Unknown delivery error" };
      }
    },
  };
}

export function getEnquiryProvider(): EnquiryProvider | null {
  const provider = process.env.ENQUIRY_PROVIDER?.trim().toLowerCase();
  switch (provider) {
    case "webhook": {
      const url = process.env.ENQUIRY_WEBHOOK_URL?.trim();
      if (!url) return null;
      return webhookProvider(url, process.env.ENQUIRY_WEBHOOK_SECRET?.trim() || undefined);
    }
    default:
      return null;
  }
}
