import { contact } from "@/content/contact";
import { mainNav, primaryCta } from "@/content/navigation";
import { telHref } from "@/lib/utils";
import { buttonClass } from "../ui/Button";
import { Icon } from "../ui/Icon";
import { Logo } from "../ui/Logo";
import { MobileMenu } from "./MobileMenu";
import { NavLinks } from "./NavLinks";
import Link from "next/link";

export function SiteHeader() {
  const primary = contact.phones.find((p) => p.e164 === contact.primaryPhone) ?? contact.phones[0];
  return (
    <header className="sticky top-0 z-40 h-[var(--header-h)] border-b border-ink/10 bg-paper/95 backdrop-blur-xs">
      <div className="container-site flex h-full items-center justify-between gap-4 sm:gap-6">
        <Logo />
        <nav aria-label="Main" className="hidden lg:block">
          <NavLinks items={mainNav} />
        </nav>
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Quick Call action on phones */}
          <a
            href={telHref(primary.e164)}
            className="inline-flex min-h-10 items-center gap-1.5 rounded-full border border-ink/15 bg-surface px-3 py-1.5 text-xs font-bold text-ink transition-colors hover:border-brand hover:text-brand sm:hidden shadow-xs"
            aria-label={`Call ${primary.display}`}
          >
            <Icon name="phone" className="size-3.5 text-brand" />
            <span>Call</span>
          </a>
          <div className="hidden sm:inline-flex">
            <Link
              href={primaryCta.href}
              className={buttonClass("primary", "min-h-11 rounded-full px-5 py-2 shadow-sm hover:shadow-md")}
            >
              {primaryCta.label}
            </Link>
          </div>
          <MobileMenu
            items={mainNav}
            cta={primaryCta}
            phone={{ display: primary.display, href: telHref(primary.e164) }}
          />
        </div>
      </div>
    </header>
  );
}
