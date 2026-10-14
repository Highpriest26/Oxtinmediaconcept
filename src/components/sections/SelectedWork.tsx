import { getFeaturedProjects } from "@/content";
import { secondaryCta } from "@/content/navigation";
import { pageCopy } from "@/content/pages";
import { ProjectCard } from "../projects/ProjectCard";
import { ButtonLink } from "../ui/Button";
import { SectionHeading } from "../ui/SectionHeading";

/** Asymmetric, image-led grid of 4 featured portfolio groups. */
export function SelectedWork() {
  const [a, b, c, d] = getFeaturedProjects(4);
  const copy = pageCopy.home.selectedWork;
  return (
    <section aria-labelledby="selected-work" className="py-14 sm:py-20 lg:py-28">
      <div className="container-site">
        <div className="flex flex-col justify-between gap-6 sm:gap-8 md:flex-row md:items-end">
          <SectionHeading id="selected-work" eyebrow={copy.eyebrow} title={copy.title} intro={copy.intro} />
          <ButtonLink href={secondaryCta.href} variant="outline" arrow className="w-full sm:w-auto shrink-0 justify-center">
            {copy.cta}
          </ButtonLink>
        </div>

        <div className="mt-10 sm:mt-14 grid gap-y-10 sm:gap-y-12 md:grid-cols-2 md:gap-6 lg:grid-cols-12 lg:gap-x-8 lg:gap-y-14">
          {a ? <ProjectCard project={a} size="wide" className="md:col-span-1 lg:col-span-7" sizes="(min-width: 1024px) 58vw, (min-width: 768px) 50vw, 100vw" /> : null}
          {b ? <ProjectCard project={b} size="tall" className="md:col-span-1 lg:col-span-5" sizes="(min-width: 1024px) 42vw, (min-width: 768px) 50vw, 100vw" /> : null}
          {c ? <ProjectCard project={c} size="tall" className="md:col-span-1 lg:col-span-5" sizes="(min-width: 1024px) 42vw, (min-width: 768px) 50vw, 100vw" /> : null}
          {d ? <ProjectCard project={d} size="wide" className="md:col-span-1 lg:col-span-7 lg:self-end" sizes="(min-width: 1024px) 58vw, (min-width: 768px) 50vw, 100vw" /> : null}
        </div>
      </div>
    </section>
  );
}
