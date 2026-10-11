import Link from "next/link";
import { branding } from "@/content/branding";
import { company } from "@/content/company";
import { contact } from "@/content/contact";
import { mainNav, primaryCta } from "@/content/navigation";
import { services } from "@/content/services";
import { mailHref, publicPhones, telHref, whatsappHref } from "@/lib/utils";
import { Icon } from "../ui/Icon";
import { Logo } from "../ui/Logo";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-night text-white/70">
      <div className="container-site grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-12 lg:py-20">
        <div className="lg:col-span-4">
          <Logo tone="light" />
          <p className="mt-5 max-w-sm text-sm leading-relaxed">{company.positioning}</p>
          <p className="eyebrow mt-6 text-white/45">{branding.tagline}</p>
        </div>

        <nav aria-label="Footer — services" className="lg:col-span-3">
          <h2 className="eyebrow mb-4 text-white">Services</h2>
          <ul className="space-y-1 text-sm">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="inline-flex min-h-9 items-center hover:text-white">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Footer — company" className="lg:col-span-2">
          <h2 className="eyebrow mb-4 text-white">Company</h2>
          <ul className="space-y-1 text-sm">
            {[...mainNav.filter((n) => n.href !== "/"), primaryCta].map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="inline-flex min-h-9 items-center hover:text-white">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="lg:col-span-3">
          <h2 className="eyebrow mb-4 text-white">Contact</h2>
          <address className="space-y-4 text-sm not-italic">
            <p className="flex gap-3">
              <Icon name="pin" className="mt-0.5 size-4 shrink-0 text-white/50" />
              <span>{contact.address.singleLine}</span>
            </p>
            {publicPhones().map((p) => (
              <p key={p.e164} className="flex gap-3">
                <Icon name="phone" className="mt-0.5 size-4 shrink-0 text-white/50" />
                <a href={telHref(p.e164)} className="hover:text-white">
                  {p.display}
                </a>
              </p>
            ))}
            <p className="flex gap-3">
              <Icon name="mail" className="mt-0.5 size-4 shrink-0 text-white/50" />
              <a href={mailHref()} className="break-all hover:text-white">
                {contact.email.address}
              </a>
            </p>
            <p className="flex gap-3">
              <Icon name="whatsapp" className="mt-0.5 size-4 shrink-0 text-white/50" />
              <a href={whatsappHref()} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                Chat on WhatsApp<span className="sr-only"> (opens in a new tab)</span>
              </a>
            </p>
          </address>
          {contact.socialLinks.length > 0 ? (
            <ul className="mt-6 flex flex-wrap gap-4 text-sm">
              {contact.socialLinks.map((s) => (
                <li key={s.href}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-site flex flex-col gap-2 py-6 text-xs text-white/45 sm:flex-row sm:justify-between">
          <p>
            © {year} {company.legalName}. All rights reserved.
          </p>
          <p>
            {company.experienceDisplay} · {company.locationSummary}
          </p>
        </div>
      </div>
    </footer>
  );
}
