import Link from "next/link";
import type { Project } from "@/content/types";
import { pickImage } from "@/lib/images";
import { cn } from "@/lib/utils";
import { Icon } from "../ui/Icon";
import { ImageOrFallback } from "../ui/ImageOrFallback";

/** Large image-led project card. The whole card is one link with a descriptive name. */
export function ProjectCard({
  project,
  size = "default",
  headingLevel = "h3",
  className,
  sizes = "(min-width: 1024px) 50vw, 100vw",
}: {
  project: Project;
  size?: "default" | "tall" | "wide";
  headingLevel?: "h2" | "h3";
  className?: string;
  sizes?: string;
}) {
  const H = headingLevel;
  const cover = pickImage(project.images);
  const aspect =
    size === "tall" ? "aspect-[4/5]" : size === "wide" ? "aspect-[4/3] lg:aspect-[16/9]" : "aspect-[4/3]";

  return (
    <article className={cn("group relative", className)}>
      <div className={cn("relative overflow-hidden rounded-2xl bg-brand-dark shadow-sm ring-1 ring-white/10", aspect)}>
        <ImageOrFallback
          image={cover}
          sizes={sizes}
          className="transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
        <div className="absolute left-4 top-4 flex flex-wrap gap-2">
          {project.brand ? (
            <span className="rounded-md bg-white px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-ink shadow-xs">
              {project.brand}
            </span>
          ) : null}
          <span className="rounded-md bg-brand px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-white shadow-xs">
            {project.category}
          </span>
        </div>
        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 sm:p-6">
          <H className="max-w-[22ch] text-xl font-extrabold leading-tight text-white sm:text-2xl">
            <Link href={`/projects/${project.slug}`} className="after:absolute after:inset-0 focus-visible:outline-none">
              {project.title}
            </Link>
          </H>
          <span
            aria-hidden="true"
            className="grid size-11 shrink-0 place-items-center rounded-full bg-white text-ink transition-colors group-hover:bg-accent group-hover:text-white shadow-xs"
          >
            <Icon name="arrow-up-right" className="size-5" />
          </span>
        </div>
      </div>
      <p className="mt-4 max-w-prose text-sm leading-relaxed text-muted">{project.shortDescription}</p>
      <p className="mt-2 text-xs font-medium text-muted/80">
        {project.images.length} {project.images.length === 1 ? "photo" : "photos"}
      </p>
    </article>
  );
}
