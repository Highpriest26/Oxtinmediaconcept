"use client";

import { useActionState, useId } from "react";
import { contact } from "@/content/contact";
import { quoteProjectTypes, quoteTimelines } from "@/content/services";
import { submitEnquiry } from "@/lib/forms/actions";
import { initialEnquiryState } from "@/lib/forms/validation";
import { cn, mailHref, telHref, whatsappHref } from "@/lib/utils";
import { buttonClass } from "../ui/Button";
import { Icon } from "../ui/Icon";

export function QuoteForm({ defaultProjectType }: { defaultProjectType?: string }) {
  const [state, formAction, isPending] = useActionState(submitEnquiry, initialEnquiryState);
  const formId = useId();

  const fieldErrors = state.status === "invalid" ? state.fieldErrors : {};

  return (
    <div className="relative">
      {state.status === "not_configured" && (
        <div
          role="alert"
          className="mb-8 border-l-4 border-amber-500 bg-amber-50 p-6 text-amber-900 dark:bg-amber-950/40 dark:text-amber-200"
        >
          <div className="flex items-start gap-4">
            <Icon name="phone" className="mt-0.5 size-6 shrink-0 text-amber-600 dark:text-amber-400" />
            <div className="space-y-3">
              <h3 className="font-bold text-base">Online Quote Provider Not Connected</h3>
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
                  href={mailHref("Project Quote Enquiry")}
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
          className="mb-8 border-l-4 border-red-500 bg-red-50 p-5 text-sm text-red-900 dark:bg-red-950/40 dark:text-red-200"
        >
          <p className="font-semibold">{state.message}</p>
        </div>
      )}

      {state.status === "success" && (
        <div
          role="alert"
          className="mb-8 border-l-4 border-green-500 bg-green-50 p-6 text-green-900 dark:bg-green-950/40 dark:text-green-200"
        >
          <p className="text-lg font-bold">Enquiry Received</p>
          <p className="mt-2 text-sm leading-relaxed">{state.message}</p>
        </div>
      )}

      {state.status === "invalid" && (
        <div
          role="alert"
          className="mb-8 border-l-4 border-red-500 bg-red-50 p-5 text-sm text-red-900 dark:bg-red-950/40 dark:text-red-200"
        >
          <p className="font-semibold">{state.message}</p>
        </div>
      )}

      <form action={formAction} className="space-y-6">
        <input type="hidden" name="kind" value="quote" />
        {/* Honeypot field for bot detection */}
        <input
          type="text"
          name="website"
          className="sr-only"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
        />

        <div className="grid gap-6 sm:grid-cols-2">
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
                "mt-2 block w-full rounded-none border bg-paper px-4 py-3 text-ink transition-colors",
                fieldErrors.fullName ? "border-red-500 focus:border-red-500" : "border-ink/20 focus:border-brand",
              )}
              placeholder="e.g. Augustine Sunday"
            />
            {fieldErrors.fullName && (
              <p id={`${formId}-fullName-err`} className="mt-1 text-xs text-red-600">
                {fieldErrors.fullName}
              </p>
            )}
          </div>

          {/* Company / Organisation */}
          <div>
            <label htmlFor={`${formId}-company`} className="block text-sm font-semibold text-ink">
              Company / Organisation <span className="text-xs text-muted font-normal">(optional)</span>
            </label>
            <input
              id={`${formId}-company`}
              name="company"
              type="text"
              aria-invalid={Boolean(fieldErrors.company)}
              aria-describedby={fieldErrors.company ? `${formId}-company-err` : undefined}
              className="mt-2 block w-full rounded-none border border-ink/20 bg-paper px-4 py-3 text-ink focus:border-brand"
              placeholder="e.g. Brand Concept Ltd"
            />
            {fieldErrors.company && (
              <p id={`${formId}-company-err`} className="mt-1 text-xs text-red-600">
                {fieldErrors.company}
              </p>
            )}
          </div>
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
                "mt-2 block w-full rounded-none border bg-paper px-4 py-3 text-ink transition-colors",
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

          {/* Phone / WhatsApp */}
          <div>
            <label htmlFor={`${formId}-phone`} className="block text-sm font-semibold text-ink">
              Phone / WhatsApp Number <span className="text-accent">*</span>
            </label>
            <input
              id={`${formId}-phone`}
              name="phone"
              type="tel"
              required
              aria-invalid={Boolean(fieldErrors.phone)}
              aria-describedby={fieldErrors.phone ? `${formId}-phone-err` : undefined}
              className={cn(
                "mt-2 block w-full rounded-none border bg-paper px-4 py-3 text-ink transition-colors",
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

        <div className="grid gap-6 sm:grid-cols-2">
          {/* Project Type */}
          <div>
            <label htmlFor={`${formId}-projectType`} className="block text-sm font-semibold text-ink">
              Project Type <span className="text-accent">*</span>
            </label>
            <select
              id={`${formId}-projectType`}
              name="projectType"
              required
              defaultValue={defaultProjectType || ""}
              aria-invalid={Boolean(fieldErrors.projectType)}
              aria-describedby={fieldErrors.projectType ? `${formId}-projectType-err` : undefined}
              className={cn(
                "mt-2 block w-full rounded-none border bg-paper px-4 py-3 text-ink transition-colors",
                fieldErrors.projectType ? "border-red-500 focus:border-red-500" : "border-ink/20 focus:border-brand",
              )}
            >
              <option value="" disabled>
                Select project category...
              </option>
              {quoteProjectTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
            {fieldErrors.projectType && (
              <p id={`${formId}-projectType-err`} className="mt-1 text-xs text-red-600">
                {fieldErrors.projectType}
              </p>
            )}
          </div>

          {/* Project Location */}
          <div>
            <label htmlFor={`${formId}-location`} className="block text-sm font-semibold text-ink">
              Project Location <span className="text-accent">*</span>
            </label>
            <input
              id={`${formId}-location`}
              name="location"
              type="text"
              required
              aria-invalid={Boolean(fieldErrors.location)}
              aria-describedby={fieldErrors.location ? `${formId}-location-err` : undefined}
              className={cn(
                "mt-2 block w-full rounded-none border bg-paper px-4 py-3 text-ink transition-colors",
                fieldErrors.location ? "border-red-500 focus:border-red-500" : "border-ink/20 focus:border-brand",
              )}
              placeholder="e.g. Abuja FCT, Nasarawa, Lagos"
            />
            {fieldErrors.location && (
              <p id={`${formId}-location-err`} className="mt-1 text-xs text-red-600">
                {fieldErrors.location}
              </p>
            )}
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {/* Approximate Size / Scope */}
          <div>
            <label htmlFor={`${formId}-scope`} className="block text-sm font-semibold text-ink">
              Approximate Size or Scope <span className="text-xs text-muted font-normal">(optional)</span>
            </label>
            <input
              id={`${formId}-scope`}
              name="scope"
              type="text"
              aria-invalid={Boolean(fieldErrors.scope)}
              aria-describedby={fieldErrors.scope ? `${formId}-scope-err` : undefined}
              className="mt-2 block w-full rounded-none border border-ink/20 bg-paper px-4 py-3 text-ink focus:border-brand"
              placeholder="e.g. 10m x 4m façade sign, 3 vehicles"
            />
            {fieldErrors.scope && (
              <p id={`${formId}-scope-err`} className="mt-1 text-xs text-red-600">
                {fieldErrors.scope}
              </p>
            )}
          </div>

          {/* Preferred Timeline */}
          <div>
            <label htmlFor={`${formId}-timeline`} className="block text-sm font-semibold text-ink">
              Preferred Timeline <span className="text-xs text-muted font-normal">(optional)</span>
            </label>
            <select
              id={`${formId}-timeline`}
              name="timeline"
              defaultValue=""
              aria-invalid={Boolean(fieldErrors.timeline)}
              aria-describedby={fieldErrors.timeline ? `${formId}-timeline-err` : undefined}
              className="mt-2 block w-full rounded-none border border-ink/20 bg-paper px-4 py-3 text-ink focus:border-brand"
            >
              <option value="">Select expected timeline...</option>
              {quoteTimelines.map((timeline) => (
                <option key={timeline} value={timeline}>
                  {timeline}
                </option>
              ))}
            </select>
            {fieldErrors.timeline && (
              <p id={`${formId}-timeline-err`} className="mt-1 text-xs text-red-600">
                {fieldErrors.timeline}
              </p>
            )}
          </div>
        </div>

        {/* Project Description */}
        <div>
          <label htmlFor={`${formId}-description`} className="block text-sm font-semibold text-ink">
            Project Description <span className="text-accent">*</span>
          </label>
          <textarea
            id={`${formId}-description`}
            name="description"
            rows={5}
            required
            aria-invalid={Boolean(fieldErrors.description)}
            aria-describedby={fieldErrors.description ? `${formId}-description-err` : undefined}
            className={cn(
              "mt-2 block w-full rounded-none border bg-paper px-4 py-3 text-ink transition-colors",
              fieldErrors.description ? "border-red-500 focus:border-red-500" : "border-ink/20 focus:border-brand",
            )}
            placeholder="Tell us about the project: dimensions, materials preference, site conditions, or any custom specifications."
          />
          {fieldErrors.description && (
            <p id={`${formId}-description-err`} className="mt-1 text-xs text-red-600">
              {fieldErrors.description}
            </p>
          )}
        </div>

        {/* Reference File Upload UI — clearly non-functional placeholder until cloud storage is wired */}
        <div className="rounded-none border border-dashed border-ink/20 bg-surface/50 p-6 text-center">
          <Icon name="image" className="mx-auto size-8 text-muted" />
          <h4 className="mt-2 text-sm font-semibold text-ink">Reference Photos / Artwork Upload</h4>
          <p className="mt-1 text-xs text-muted">
            Direct file upload is reserved for cloud storage integration.
          </p>
          <p className="mt-2 text-xs font-medium text-brand">
            You can send your reference files, logos or PDF specs directly to our WhatsApp (
            <a href={whatsappHref()} target="_blank" rel="noopener noreferrer" className="underline">
              {contact.whatsapp.display}
            </a>
            ) or email (
            <a href={mailHref("Project Reference Files")} className="underline">
              {contact.email.address}
            </a>
            ).
          </p>
          <input
            type="file"
            disabled
            className="mt-3 block w-full text-xs text-muted file:mr-4 file:border-0 file:bg-ink/10 file:px-3 file:py-1 file:text-xs file:font-semibold file:text-ink disabled:opacity-50"
          />
        </div>

        {/* Consent Checkbox */}
        <div>
          <label className="flex items-start gap-3">
            <input
              type="checkbox"
              name="consent"
              required
              className="mt-1 size-4 rounded-none border-ink/30 text-brand focus:ring-brand"
            />
            <span className="text-xs leading-relaxed text-muted">
              I agree that Oxtinmediaconcept Limited may use these details to contact me regarding this project enquiry.
            </span>
          </label>
          {fieldErrors.consent && (
            <p className="mt-1 text-xs text-red-600">{fieldErrors.consent}</p>
          )}
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            disabled={isPending}
            className={buttonClass("primary", "w-full sm:w-auto min-w-[200px]")}
          >
            {isPending ? "Submitting Request..." : "Submit Project Enquiry"}
          </button>
        </div>
      </form>
    </div>
  );
}
