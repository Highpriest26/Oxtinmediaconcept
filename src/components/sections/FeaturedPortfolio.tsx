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
    <section aria-labelledby="featured-portfolio" className="bg-brand-dark py-20 text-white sm:py-28">
      <div className="container-site grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="grid grid-cols-6 gap-3 sm:gap-4 lg:col-span-7">
          <div className="relative col-span-6 aspect-[16/10] overflow-hidden">
            <ImageOrFallback image={lead} sizes="(min-width: 1024px) 58vw, 100vw" />
          </div>
          {second ? (
            <div className="relative col-span-3 aspect-[4/3] overflow-hidden">
              <ImageOrFallback image={second} sizes="(min-width: 1024px) 29vw, 50vw" />
            </div>
          ) : null}
          {third ? (
            <div className="relative col-span-3 aspect-[4/3] overflow-hidden">
              <ImageOrFallback image={third} sizes="(min-width: 1024px) 29vw, 50vw" />
            </div>
          ) : null}
        </div>

        <div className="lg:col-span-5">
          <p className="eyebrow flex items-center gap-3 text-white/70">
            <span className="h-px w-8 bg-accent" aria-hidden="true" />
            {pageCopy.home.featured.eyebrow}
          </p>
          <h2 id="featured-portfolio" className="mt-4 text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
            {project.title}
          </h2>
          <p className="mt-6 text-base leading-relaxed text-white/75 sm:text-lg">{project.shortDescription}</p>

          {project.workShown?.length ? (
            <div className="mt-8">
              <h3 className="eyebrow text-white/60">{pageCopy.projectDetail.workShownTitle}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {project.workShown.map((w) => (
                  <li key={w} className="border border-white/20 px-3 py-1.5 text-sm text-white/85">
                    {w}
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          <p className="mt-8 border-l-2 border-accent pl-4 text-sm leading-relaxed text-white/70">
            {company.capabilitySummary}
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={`/projects/${project.slug}`} variant="light" arrow>
              View the {project.brand ?? ""} portfolio
            </ButtonLink>
            <Link
              href="/request-quote"
              className="inline-flex min-h-12 items-center justify-center px-2 text-sm font-semibold text-white underline-offset-4 hover:underline"
            >
              {pageCopy.home.featured.cta}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
