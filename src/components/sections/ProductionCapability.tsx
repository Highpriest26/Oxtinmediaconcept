import { equipment } from "@/content/equipment";
import { pageCopy } from "@/content/pages";
import { cn } from "@/lib/utils";
import { ImageOrFallback } from "../ui/ImageOrFallback";
import { SectionHeading } from "../ui/SectionHeading";
import { ButtonLink } from "../ui/Button";

/** Visual presentation of verified production equipment. */
export function ProductionCapability({ showLink = true }: { showLink?: boolean }) {
  return (
    <section aria-labelledby="production-capability" className="py-14 sm:py-20 lg:py-28">
      <div className="container-site">
        <div className="flex flex-col justify-between gap-6 sm:gap-8 md:flex-row md:items-end">
          <SectionHeading
            id="production-capability"
            eyebrow={pageCopy.home.production.eyebrow}
            title={pageCopy.home.production.title}
            intro={pageCopy.home.production.intro}
          />
          {showLink ? (
            <ButtonLink href="/about#workshop" variant="outline" arrow className="w-full sm:w-auto shrink-0 justify-center">
              {pageCopy.home.production.cta}
            </ButtonLink>
          ) : null}
        </div>

        <ul className="mt-10 sm:mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {equipment.map((e, i) => (
            <li key={e.model} className={cn("group", i === 2 && "sm:col-span-2 lg:col-span-1")}>
              <div className="relative aspect-[4/3] sm:aspect-[4/5] overflow-hidden rounded-2xl bg-brand-dark shadow-sm ring-1 ring-white/10">
                <ImageOrFallback
                  image={e.image}
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
                <span className="absolute left-5 top-5 font-display text-sm font-bold text-white/80" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="absolute inset-x-0 bottom-0 p-5 text-white sm:p-6">
                  <p className="eyebrow text-white/70">{e.category}</p>
                  <h3 className="mt-2 text-xl font-extrabold leading-tight sm:text-2xl">
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
