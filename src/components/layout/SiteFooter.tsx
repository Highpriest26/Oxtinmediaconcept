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
                <Link href={`/services/${s.slug}`} className="inline-flex min-h-11 items-center hover:text-white">
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
                <Link href={n.href} className="inline-flex min-h-11 items-center hover:text-white">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="lg:col-span-3">
          <h2 className="eyebrow mb-4 text-white">Contact</h2>
          <address className="space-y-3 text-sm not-italic">
            <p className="flex items-start gap-3 py-1">
              <Icon name="pin" className="mt-1 size-4 shrink-0 text-white/50" />
              <span>{contact.address.singleLine}</span>
            </p>
            {publicPhones().map((p) => (
              <p key={p.e164}>
                <a href={telHref(p.e164)} className="inline-flex min-h-11 items-center gap-3 hover:text-white">
                  <Icon name="phone" className="size-4 shrink-0 text-white/50" />
                  <span>{p.display}</span>
                </a>
              </p>
            ))}
            <p>
              <a href={mailHref()} className="inline-flex min-h-11 items-center gap-3 break-all hover:text-white">
                <Icon name="mail" className="size-4 shrink-0 text-white/50" />
                <span>{contact.email.address}</span>
              </a>
            </p>
            <p>
              <a href={whatsappHref()} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-3 hover:text-white">
                <Icon name="whatsapp" className="size-4 shrink-0 text-white/50" />
                <span>Chat on WhatsApp</span>
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </p>
          </address>
          {contact.socialLinks.length > 0 ? (
            <ul className="mt-6 flex flex-wrap gap-4 text-sm">
              {contact.socialLinks.map((s) => (
                <li key={s.href}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center hover:text-white">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-site flex flex-col gap-3 pt-6 pb-28 md:py-6 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {company.legalName}. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <span>
              {company.experienceDisplay} · {company.locationSummary}
            </span>
            <span aria-hidden="true" className="text-white/20">·</span>
            <span>
              Designed by{" "}
              <a
                href="https://www.boffinstechnology.com.ng"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-white/70 underline underline-offset-4 transition-colors hover:text-white"
              >
                Boffins Technology LTD
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
