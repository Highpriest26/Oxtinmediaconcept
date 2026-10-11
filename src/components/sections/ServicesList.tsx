import Link from "next/link";
import { pageCopy } from "@/content/pages";
import { services } from "@/content/services";
import { Icon } from "../ui/Icon";
import { SectionHeading } from "../ui/SectionHeading";

/** Editorial numbered list of services (avoids a wall of identical cards). */
export function ServicesList({
  heading = true,
  headingLevel = "h3",
}: {
  heading?: boolean;
  headingLevel?: "h2" | "h3";
}) {
  const H = headingLevel;
  return (
    <section aria-labelledby={heading ? "what-we-do" : undefined} aria-label={heading ? undefined : "Services"} className="bg-surface py-20 sm:py-28">
      <div className="container-site grid gap-12 lg:grid-cols-12">
        {heading ? (
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-[calc(var(--header-h)+2rem)]">
              <SectionHeading
                id="what-we-do"
                eyebrow={pageCopy.home.whatWeDo.eyebrow}
                title={pageCopy.home.whatWeDo.title}
                intro={pageCopy.home.whatWeDo.intro}
              />
            </div>
          </div>
        ) : null}
        <ol className={heading ? "lg:col-span-8" : "lg:col-span-12"}>
          {services.map((s, i) => (
            <li key={s.slug} className="group relative border-t border-ink/10 last:border-b">
              <div className="grid grid-cols-[auto_1fr_auto] items-start gap-x-4 gap-y-2 py-7 sm:gap-x-8 sm:py-8">
                <span className="pt-1 font-display text-sm font-bold text-muted" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <H className="flex items-center gap-3 text-xl font-extrabold text-ink sm:text-2xl">
                    <Icon name={s.icon} className="size-6 shrink-0 text-brand" />
                    <Link href={`/services/${s.slug}`} className="after:absolute after:inset-0 group-hover:text-brand">
                      {s.title}
                    </Link>
                  </H>
                  <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted sm:text-base">{s.summary}</p>
                </div>
                <span
                  aria-hidden="true"
                  className="mt-1 grid size-10 place-items-center border border-ink/15 text-ink transition-colors group-hover:border-brand group-hover:bg-brand group-hover:text-white"
                >
                  <Icon name="arrow-right" className="size-4" />
                </span>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
