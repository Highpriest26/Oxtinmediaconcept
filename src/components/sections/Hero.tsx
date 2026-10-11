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

      <div className="container-site flex min-h-[calc(100svh-var(--header-h))] flex-col justify-end pb-14 pt-24 sm:pb-20 lg:min-h-[44rem] lg:pb-24">
        <p className="eyebrow flex flex-wrap items-center gap-x-3 gap-y-1 text-white/75">
          <span className="h-px w-8 bg-accent" aria-hidden="true" />
          {branding.tagline}
        </p>
        <h1
          id="hero-title"
          className="mt-6 max-w-5xl text-[2.5rem] font-black leading-[0.98] sm:text-6xl lg:text-7xl xl:text-[5.5rem]"
        >
          {copy.headline}
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">{copy.supporting}</p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href={primaryCta.href} variant="accent" arrow>
            {primaryCta.label}
          </ButtonLink>
          <ButtonLink href={secondaryCta.href} variant="outline-light">
            {secondaryCta.label}
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
