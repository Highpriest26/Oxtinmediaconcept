import { contact } from "@/content/contact";
import { mainNav, primaryCta } from "@/content/navigation";
import { telHref } from "@/lib/utils";
import { buttonClass } from "../ui/Button";
import { Logo } from "../ui/Logo";
import { MobileMenu } from "./MobileMenu";
import { NavLinks } from "./NavLinks";
import Link from "next/link";

export function SiteHeader() {
  const primary = contact.phones.find((p) => p.e164 === contact.primaryPhone) ?? contact.phones[0];
  return (
    <header className="sticky top-0 z-50 h-[var(--header-h)] border-b border-ink/10 bg-paper">
      <div className="container-site flex h-full items-center justify-between gap-6">
        <Logo />
        <nav aria-label="Main" className="hidden lg:block">
          <NavLinks items={mainNav} />
        </nav>
        <div className="flex items-center gap-2">
          <Link href={primaryCta.href} className={buttonClass("primary", "hidden min-h-11 sm:inline-flex")}>
            {primaryCta.label}
          </Link>
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
