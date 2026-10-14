"use client";

import { useActionState, useId } from "react";
import { contact } from "@/content/contact";
import { submitEnquiry } from "@/lib/forms/actions";
import { initialEnquiryState } from "@/lib/forms/validation";
import { cn, mailHref, telHref, whatsappHref } from "@/lib/utils";
import { buttonClass } from "../ui/Button";
import { Icon } from "../ui/Icon";

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(submitEnquiry, initialEnquiryState);
  const formId = useId();

  const fieldErrors = state.status === "invalid" ? state.fieldErrors : {};

  return (
    <div className="relative">
      {state.status === "not_configured" && (
        <div
          role="alert"
          className="mb-8 rounded-xl border-l-4 border-amber-500 bg-amber-50 p-6 text-amber-900 dark:bg-amber-950/40 dark:text-amber-200"
        >
          <div className="flex items-start gap-4">
            <Icon name="phone" className="mt-0.5 size-6 shrink-0 text-amber-600 dark:text-amber-400" />
            <div className="space-y-3">
              <h3 className="font-bold text-base">Online Enquiry Form Not Connected</h3>
              <p className="text-sm leading-relaxed">{state.message}</p>
              <div className="flex flex-wrap gap-4 pt-2 text-sm font-semibold">
                <a
                  href={telHref(contact.primaryPhone)}
                  className="inline-flex items-center gap-1.5 text-brand hover:underline"
                >
                  <Icon name="phone" className="size-4" /> Call {contact.whatsapp.display}
                </a>
                <a
                  href={whatsappHref()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[#128C4A] hover:underline"
                >
                  <Icon name="whatsapp" className="size-4" /> WhatsApp
                </a>
                <a
                  href={mailHref("Direct Website Message")}
                  className="inline-flex items-center gap-1.5 text-ink hover:underline"
                >
                  <Icon name="mail" className="size-4" /> {contact.email.address}
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {state.status === "error" && (
        <div
          role="alert"
          className="mb-8 rounded-xl border-l-4 border-red-500 bg-red-50 p-5 text-sm text-red-900 dark:bg-red-950/40 dark:text-red-200"
        >
          <p className="font-semibold">{state.message}</p>
        </div>
      )}

      {state.status === "success" && (
        <div
          role="alert"
          className="mb-8 rounded-xl border-l-4 border-green-500 bg-green-50 p-6 text-green-900 dark:bg-green-950/40 dark:text-green-200"
        >
          <p className="text-lg font-bold">Message Sent</p>
          <p className="mt-2 text-sm leading-relaxed">{state.message}</p>
        </div>
      )}

      {state.status === "invalid" && (
        <div
          role="alert"
          className="mb-8 rounded-xl border-l-4 border-red-500 bg-red-50 p-5 text-sm text-red-900 dark:bg-red-950/40 dark:text-red-200"
        >
          <p className="font-semibold">{state.message}</p>
        </div>
      )}

      <form action={formAction} className="space-y-6">
        <input type="hidden" name="kind" value="contact" />
        <input
          type="text"
          name="website"
          className="sr-only"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
        />

        {/* Full Name */}
        <div>
          <label htmlFor={`${formId}-fullName`} className="block text-sm font-semibold text-ink">
            Full Name <span className="text-accent">*</span>
          </label>
          <input
            id={`${formId}-fullName`}
            name="fullName"
            type="text"
            required
            aria-invalid={Boolean(fieldErrors.fullName)}
            aria-describedby={fieldErrors.fullName ? `${formId}-fullName-err` : undefined}
            className={cn(
              "mt-2 block w-full rounded-xl border bg-paper px-4 py-3.5 text-base text-ink transition-colors outline-none focus:ring-2 focus:ring-brand/20",
              fieldErrors.fullName ? "border-red-500 focus:border-red-500" : "border-ink/20 focus:border-brand",
            )}
            placeholder="Your name"
          />
          {fieldErrors.fullName && (
            <p id={`${formId}-fullName-err`} className="mt-1 text-xs text-red-600">
              {fieldErrors.fullName}
            </p>
          )}
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {/* Email */}
          <div>
            <label htmlFor={`${formId}-email`} className="block text-sm font-semibold text-ink">
              Email Address <span className="text-accent">*</span>
            </label>
            <input
              id={`${formId}-email`}
              name="email"
              type="email"
              required
              aria-invalid={Boolean(fieldErrors.email)}
              aria-describedby={fieldErrors.email ? `${formId}-email-err` : undefined}
              className={cn(
                "mt-2 block w-full rounded-xl border bg-paper px-4 py-3.5 text-base text-ink transition-colors outline-none focus:ring-2 focus:ring-brand/20",
                fieldErrors.email ? "border-red-500 focus:border-red-500" : "border-ink/20 focus:border-brand",
              )}
              placeholder="you@company.com"
            />
            {fieldErrors.email && (
              <p id={`${formId}-email-err`} className="mt-1 text-xs text-red-600">
                {fieldErrors.email}
              </p>
            )}
          </div>

          {/* Phone */}
          <div>
            <label htmlFor={`${formId}-phone`} className="block text-sm font-semibold text-ink">
              Phone / WhatsApp <span className="text-xs text-muted font-normal">(optional)</span>
            </label>
            <input
              id={`${formId}-phone`}
              name="phone"
              type="tel"
              aria-invalid={Boolean(fieldErrors.phone)}
              aria-describedby={fieldErrors.phone ? `${formId}-phone-err` : undefined}
              className={cn(
                "mt-2 block w-full rounded-xl border bg-paper px-4 py-3.5 text-base text-ink transition-colors outline-none focus:ring-2 focus:ring-brand/20",
                fieldErrors.phone ? "border-red-500 focus:border-red-500" : "border-ink/20 focus:border-brand",
              )}
              placeholder="e.g. 0811 494 8814"
            />
            {fieldErrors.phone && (
              <p id={`${formId}-phone-err`} className="mt-1 text-xs text-red-600">
                {fieldErrors.phone}
              </p>
            )}
          </div>
        </div>

        {/* Message */}
        <div>
          <label htmlFor={`${formId}-message`} className="block text-sm font-semibold text-ink">
            Message <span className="text-accent">*</span>
          </label>
          <textarea
            id={`${formId}-message`}
            name="message"
            rows={5}
            required
            aria-invalid={Boolean(fieldErrors.message)}
            aria-describedby={fieldErrors.message ? `${formId}-message-err` : undefined}
            className={cn(
              "mt-2 block w-full rounded-xl border bg-paper px-4 py-3.5 text-base text-ink transition-colors outline-none focus:ring-2 focus:ring-brand/20",
              fieldErrors.message ? "border-red-500 focus:border-red-500" : "border-ink/20 focus:border-brand",
            )}
            placeholder="How can we help with your branding, signage or fabrication needs?"
          />
          {fieldErrors.message && (
            <p id={`${formId}-message-err`} className="mt-1 text-xs text-red-600">
              {fieldErrors.message}
            </p>
          )}
        </div>

        {/* Consent */}
        <div>
          <label className="flex items-start gap-3">
            <input
              type="checkbox"
              name="consent"
              required
              className="mt-1 size-4 rounded border-ink/30 text-brand focus:ring-brand"
            />
            <span className="text-xs leading-relaxed text-muted">
              I agree that Oxtinmediaconcept Limited may use these details to respond to my enquiry.
            </span>
          </label>
          {fieldErrors.consent && (
            <p className="mt-1 text-xs text-red-600">{fieldErrors.consent}</p>
          )}
        </div>

        {/* Submit */}
        <div>
          <button
            type="submit"
            disabled={isPending}
            className={buttonClass("primary", "w-full sm:w-auto min-w-[180px] rounded-full")}
          >
            {isPending ? "Sending Message..." : "Send Message"}
          </button>
        </div>
      </form>
    </div>
  );
}
