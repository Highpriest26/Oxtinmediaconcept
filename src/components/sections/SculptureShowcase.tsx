import { getProjectBySlug } from "@/content";
import { pageCopy } from "@/content/pages";
import { Gallery } from "../projects/Gallery";
import { ButtonLink } from "../ui/Button";
import { SectionHeading } from "../ui/SectionHeading";

/** Masonry gallery of sculptural work with lightbox. */
export function SculptureShowcase() {
  const project = getProjectBySlug("sculpture-portfolio");
  if (!project) return null;
  return (
    <section aria-labelledby="sculpture-showcase" className="bg-night py-20 text-white sm:py-28">
      <div className="container-site">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            id="sculpture-showcase"
            tone="light"
            eyebrow={pageCopy.home.sculpture.eyebrow}
            title={pageCopy.home.sculpture.title}
            intro={pageCopy.home.sculpture.intro}
          />
          <ButtonLink href={`/projects/${project.slug}`} variant="outline-light" arrow className="shrink-0">
            {pageCopy.home.sculpture.cta}
          </ButtonLink>
        </div>
        <div className="mt-14">
          <Gallery images={project.images} layout="masonry" label="Sculpture gallery" />
        </div>
      </div>
    </section>
  );
}
