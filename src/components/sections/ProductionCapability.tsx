import { equipment } from "@/content/equipment";
import { pageCopy } from "@/content/pages";
import { ImageOrFallback } from "../ui/ImageOrFallback";
import { SectionHeading } from "../ui/SectionHeading";
import { ButtonLink } from "../ui/Button";

/** Visual presentation of verified production equipment. */
export function ProductionCapability({ showLink = true }: { showLink?: boolean }) {
  return (
    <section aria-labelledby="production-capability" className="py-20 sm:py-28">
      <div className="container-site">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            id="production-capability"
            eyebrow={pageCopy.home.production.eyebrow}
            title={pageCopy.home.production.title}
            intro={pageCopy.home.production.intro}
          />
          {showLink ? (
            <ButtonLink href="/about#workshop" variant="outline" arrow className="shrink-0">
              {pageCopy.home.production.cta}
            </ButtonLink>
          ) : null}
        </div>

        <ul className="mt-14 grid gap-6 md:grid-cols-3 lg:gap-8">
          {equipment.map((e, i) => (
            <li key={e.model} className="group">
              <div className="relative aspect-[4/5] overflow-hidden bg-brand-dark">
                <ImageOrFallback image={e.image} sizes="(min-width: 768px) 33vw, 100vw" />
                <div className="absolute inset-0 bg-linear-to-t from-black/75 via-transparent to-transparent" />
                <span className="absolute left-5 top-5 font-display text-sm font-bold text-white/80" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="absolute inset-x-0 bottom-0 p-5 text-white sm:p-6">
                  <p className="eyebrow text-white/70">{e.category}</p>
                  <h3 className="mt-2 text-2xl font-extrabold leading-tight">
                    {e.name} <span className="text-white/70">{e.model}</span>
                  </h3>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
