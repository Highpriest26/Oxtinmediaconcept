import { contact } from "@/content/contact";
import { primaryCta } from "@/content/navigation";
import { pageCopy } from "@/content/pages";
import { telHref, whatsappHref } from "@/lib/utils";
import { ButtonLink } from "../ui/Button";
import { Icon } from "../ui/Icon";

export function FinalCta({
  title = pageCopy.home.finalCta.title,
  text = pageCopy.home.finalCta.text,
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section aria-labelledby="final-cta" className="relative isolate overflow-hidden bg-brand py-14 sm:py-20 lg:py-28 text-white">
      <div className="absolute inset-0 -z-10 bg-grid opacity-60" aria-hidden="true" />
      <div className="container-site grid items-end gap-8 sm:gap-10 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <h2 id="final-cta" className="text-2xl font-black leading-tight sm:text-4xl lg:text-5xl xl:text-6xl">
            {title}
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/85 sm:mt-6 sm:text-lg">{text}</p>
        </div>
        <div className="flex flex-col gap-3 lg:col-span-4">
          <ButtonLink href={primaryCta.href} variant="light" arrow className="w-full justify-center rounded-full font-bold shadow-md">
            {pageCopy.home.finalCta.cta}
          </ButtonLink>
          <a
            href={whatsappHref()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full border border-white/40 px-6 text-sm font-semibold hover:border-white hover:bg-white hover:text-brand-dark transition-colors"
          >
            <Icon name="whatsapp" className="size-4" />
            WhatsApp {contact.whatsapp.display}
            <span className="sr-only">(opens in a new tab)</span>
          </a>
          <a
            href={telHref(contact.primaryPhone)}
            className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full px-6 text-sm font-semibold text-white/90 hover:text-white transition-colors"
          >
            <Icon name="phone" className="size-4" />
            Or call us
          </a>
        </div>
      </div>
    </section>
  );
}
