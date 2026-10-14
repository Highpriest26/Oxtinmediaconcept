import Link from "next/link";
import { getProjectBySlug, featuredStorySlug } from "@/content";
import { company } from "@/content/company";
import { pageCopy } from "@/content/pages";
import { ButtonLink } from "../ui/Button";
import { ImageOrFallback } from "../ui/ImageOrFallback";

/** Large editorial feature of one brand portfolio. */
export function FeaturedPortfolio() {
  const project = getProjectBySlug(featuredStorySlug);
  if (!project) return null;
  const [lead, second, third] = project.images;

  return (
    <section aria-labelledby="featured-portfolio" className="bg-brand-dark py-14 sm:py-20 lg:py-28 text-white">
      <div className="container-site grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
        <div className="grid grid-cols-6 gap-3 sm:gap-4 lg:col-span-7">
          <div className="relative col-span-6 aspect-[16/10] overflow-hidden rounded-2xl bg-brand-dark shadow-sm ring-1 ring-white/10">
            <ImageOrFallback
              image={lead}
              sizes="(min-width: 1024px) 58vw, 100vw"
              className="transition-transform duration-700 ease-out hover:scale-[1.03]"
            />
          </div>
          {second ? (
            <div className="relative col-span-3 aspect-[4/3] overflow-hidden rounded-2xl bg-brand-dark shadow-sm ring-1 ring-white/10">
              <ImageOrFallback
                image={second}
                sizes="(min-width: 1024px) 29vw, 50vw"
                className="transition-transform duration-700 ease-out hover:scale-[1.03]"
              />
            </div>
          ) : null}
          {third ? (
            <div className="relative col-span-3 aspect-[4/3] overflow-hidden rounded-2xl bg-brand-dark shadow-sm ring-1 ring-white/10">
              <ImageOrFallback
                image={third}
                sizes="(min-width: 1024px) 29vw, 50vw"
                className="transition-transform duration-700 ease-out hover:scale-[1.03]"
              />
            </div>
          ) : null}
        </div>

        <div className="lg:col-span-5">
          <p className="eyebrow flex items-center gap-3 text-white/70">
            <span className="h-px w-8 bg-accent" aria-hidden="true" />
            {pageCopy.home.featured.eyebrow}
          </p>
          <h2 id="featured-portfolio" className="mt-4 text-2xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
            {project.title}
          </h2>
          <p className="mt-4 sm:mt-6 text-sm leading-relaxed text-white/75 sm:text-lg">{project.shortDescription}</p>

          {project.workShown?.length ? (
            <div className="mt-6 sm:mt-8">
              <h3 className="eyebrow text-white/60">{pageCopy.projectDetail.workShownTitle}</h3>
              <ul className="mt-3 sm:mt-4 flex flex-wrap gap-2">
                {project.workShown.map((w) => (
                  <li key={w} className="rounded-md border border-white/20 bg-white/5 px-2.5 py-1 text-xs sm:text-sm text-white/85">
                    {w}
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          <p className="mt-6 sm:mt-8 border-l-2 border-accent pl-4 text-xs sm:text-sm leading-relaxed text-white/70">
            {company.capabilitySummary}
          </p>

          <div className="mt-8 sm:mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <ButtonLink
              href={`/projects/${project.slug}`}
              variant="light"
              arrow
              className="w-full sm:w-auto justify-center rounded-full font-bold"
            >
              View the {project.brand ?? ""} portfolio
            </ButtonLink>
            <Link
              href="/request-quote"
              className="inline-flex min-h-12 w-full sm:w-auto items-center justify-center px-4 text-sm font-semibold text-white underline-offset-4 hover:underline"
            >
              {pageCopy.home.featured.cta}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
