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
    <section aria-labelledby="final-cta" className="relative isolate overflow-hidden bg-brand py-20 text-white sm:py-28">
      <div className="absolute inset-0 -z-10 bg-grid opacity-60" aria-hidden="true" />
      <div className="container-site grid items-end gap-10 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <h2 id="final-cta" className="text-4xl font-black leading-[1.02] sm:text-5xl lg:text-6xl">
            {title}
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">{text}</p>
        </div>
        <div className="flex flex-col gap-3 lg:col-span-4">
          <ButtonLink href={primaryCta.href} variant="light" arrow>
            {pageCopy.home.finalCta.cta}
          </ButtonLink>
          <a
            href={whatsappHref()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 items-center justify-center gap-2 border border-white/40 px-6 text-sm font-semibold hover:border-white hover:bg-white hover:text-brand-dark"
          >
            <Icon name="whatsapp" className="size-4" />
            WhatsApp {contact.whatsapp.display}
            <span className="sr-only">(opens in a new tab)</span>
          </a>
          <a
            href={telHref(contact.primaryPhone)}
            className="inline-flex min-h-12 items-center justify-center gap-2 px-6 text-sm font-semibold text-white/90 hover:text-white"
          >
            <Icon name="phone" className="size-4" />
            Or call us
          </a>
        </div>
      </div>
    </section>
  );
}
