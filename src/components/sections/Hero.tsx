import { branding } from "@/content/branding";
import { heroImage } from "@/content/media";
import { primaryCta, secondaryCta } from "@/content/navigation";
import { pageCopy } from "@/content/pages";
import { ButtonLink } from "../ui/Button";
import { ImageOrFallback } from "../ui/ImageOrFallback";

export function Hero() {
  const copy = pageCopy.home.hero;
  return (
    <section aria-labelledby="hero-title" className="relative isolate overflow-hidden bg-night text-white">
      <div className="absolute inset-0 -z-10">
        <ImageOrFallback image={heroImage} sizes="100vw" preload decorative />
        <div className="absolute inset-0 bg-linear-to-r from-night/95 via-night/75 to-night/30" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-night/90 to-transparent" />
      </div>

      <div className="container-site flex flex-col justify-end pt-12 pb-12 sm:pt-20 sm:pb-16 lg:min-h-[44rem] lg:pb-24">
        <p className="eyebrow flex flex-wrap items-center gap-x-3 gap-y-1 text-white/75">
          <span className="h-px w-8 bg-accent" aria-hidden="true" />
          {branding.tagline}
        </p>
        <h1
          id="hero-title"
          className="mt-4 max-w-5xl text-[2.125rem] font-black leading-[1.04] sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.25rem]"
        >
          {copy.headline}
        </h1>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/80 sm:mt-6 sm:text-lg">{copy.supporting}</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
          <ButtonLink
            href={primaryCta.href}
            variant="accent"
            arrow
            className="w-full sm:w-auto justify-center rounded-full px-7 py-3.5 shadow-md transition-all hover:shadow-lg font-bold"
          >
            {primaryCta.label}
          </ButtonLink>
          <ButtonLink
            href={secondaryCta.href}
            variant="outline-light"
            className="w-full sm:w-auto justify-center rounded-full px-7 py-3.5 opacity-90 hover:opacity-100 font-semibold"
          >
            {secondaryCta.label}
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
