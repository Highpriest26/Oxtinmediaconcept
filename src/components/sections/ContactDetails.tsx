import { contact } from "@/content/contact";
import { mailHref, publicPhones, telHref, whatsappHref } from "@/lib/utils";
import { Icon } from "../ui/Icon";

/** Contact details block (all values from src/content/contact.ts). */
export function ContactDetails() {
  return (
    <div className="grid gap-px overflow-hidden rounded-2xl border border-ink/10 bg-ink/10 sm:grid-cols-2">
      <div className="bg-paper p-6 sm:p-8">
        <h2 className="eyebrow flex items-center gap-2 text-brand">
          <Icon name="phone" className="size-4" /> Phone
        </h2>
        <ul className="mt-4 space-y-2">
          {publicPhones().map((p) => (
            <li key={p.e164}>
              <a href={telHref(p.e164)} className="font-display text-xl sm:text-2xl font-extrabold text-ink hover:text-brand">
                {p.display}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-paper p-6 sm:p-8">
        <h2 className="eyebrow flex items-center gap-2 text-brand">
          <Icon name="whatsapp" className="size-4" /> WhatsApp
        </h2>
        <p className="mt-4 text-muted">Send photos, sizes or artwork directly.</p>
        <a
          href={whatsappHref()}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex min-h-12 w-full sm:w-auto justify-center rounded-full items-center gap-2 bg-[#128C4A] px-5 text-sm font-semibold text-white hover:bg-[#0e6f3a]"
        >
          <Icon name="whatsapp" className="size-4" />
          Chat on WhatsApp
          <span className="sr-only">(opens in a new tab)</span>
        </a>
      </div>

      <div className="bg-paper p-6 sm:p-8">
        <h2 className="eyebrow flex items-center gap-2 text-brand">
          <Icon name="mail" className="size-4" /> Email
        </h2>
        <a href={mailHref("Project enquiry")} className="mt-4 block break-all text-lg font-bold text-ink hover:text-brand">
          {contact.email.address}
        </a>
      </div>

      <div className="bg-paper p-6 sm:p-8">
        <h2 className="eyebrow flex items-center gap-2 text-brand">
          <Icon name="pin" className="size-4" /> Head office
        </h2>
        <address className="mt-4 not-italic leading-relaxed text-ink">
          {contact.address.lines.map((l) => (
            <span key={l} className="block">
              {l}
            </span>
          ))}
        </address>
      </div>
    </div>
  );
}
