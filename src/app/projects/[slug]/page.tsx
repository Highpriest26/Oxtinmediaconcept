import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Gallery } from "@/components/projects/Gallery";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { FinalCta } from "@/components/sections/FinalCta";
import { ButtonLink } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { ImageOrFallback } from "@/components/ui/ImageOrFallback";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  getProjectBySlug,
  getRelatedProjects,
  getServicesForProject,
  projects,
} from "@/content";
import { pickImage } from "@/lib/images";
import { pageCopy } from "@/content/pages";

export const dynamicParams = false;

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  const cover = pickImage(project.images);

  return {
    title: `${project.title} | Oxtinmediaconcept`,
    description: project.shortDescription,
    openGraph: {
      title: project.title,
      description: project.shortDescription,
      images: cover ? [{ url: cover.src, alt: cover.alt }] : undefined,
    },
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const related = getRelatedProjects(project, 3);
  const matchedServices = getServicesForProject(project);
  const cover = pickImage(project.images);

  return (
    <>
      {/* Hero Header */}
      <section className="relative isolate overflow-hidden bg-night text-white">
        <div className="absolute inset-0 -z-10">
          <ImageOrFallback image={cover} sizes="100vw" preload decorative />
          <div className="absolute inset-0 bg-linear-to-t from-night via-night/80 to-night/40" />
        </div>

        <div className="container-site pb-16 pt-24 sm:pb-24 sm:pt-32">
          <div className="flex flex-wrap items-center gap-3">
            {project.brand && (
              <span className="bg-white px-3 py-1 text-xs font-bold uppercase tracking-wider text-ink">
                {project.brand}
              </span>
            )}
            <span className="bg-brand px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white">
              {project.category}
            </span>
            {project.year && (
              <span className="border border-white/30 px-3 py-1 text-xs font-medium text-white/80">
                {project.year}
              </span>
            )}
          </div>

          <h1 className="mt-6 max-w-4xl text-3xl font-black leading-tight sm:text-5xl lg:text-6xl">
            {project.title}
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-relaxed text-white/80 sm:text-lg">
            {project.shortDescription}
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <ButtonLink
              href="/request-quote"
              variant="accent"
              arrow
              className="w-full sm:w-auto justify-center rounded-full font-bold shadow-md"
            >
              Start a Similar Project
            </ButtonLink>
          </div>
        </div>
      </section>

      {/* Meta Bar / Information Notice */}
      <section className="border-b border-ink/10 bg-surface py-6">
        <div className="container-site flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between text-sm">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-muted">
            {project.location && (
              <span className="flex items-center gap-1.5">
                <Icon name="pin" className="size-4" /> {project.location}
              </span>
            )}
            {project.client && (
              <span>
                <strong>Client:</strong> {project.client}
              </span>
            )}
            <span>
              <strong>Photos:</strong> {project.images.length}
            </span>
          </div>

          {project.detailsStatus === "VISUAL_PORTFOLIO_ONLY_UNTIL_MORE_PROJECT_DATA" && (
            <div className="inline-flex items-center gap-2 text-xs font-medium text-muted">
              <span className="size-2 rounded-full bg-amber-500" />
              <span>{pageCopy.projectDetail.visualOnlyNote}</span>
            </div>
          )}
        </div>
      </section>

      {/* Verified Details (rendered ONLY if populated) */}
      {(project.overview || project.brief || project.workShown?.length || project.scope?.length || project.materials?.length) && (
        <section className="py-16 sm:py-24">
          <div className="container-site grid gap-12 lg:grid-cols-12">
            <div className="space-y-8 lg:col-span-7">
              {project.overview && (
                <div>
                  <h2 className="eyebrow text-brand">Overview</h2>
                  <p className="mt-3 text-base leading-relaxed text-ink sm:text-lg">{project.overview}</p>
                </div>
              )}

              {project.brief && (
                <div>
                  <h2 className="eyebrow text-brand">Client Brief</h2>
                  <p className="mt-3 text-base leading-relaxed text-muted">{project.brief}</p>
                </div>
              )}

              {project.designApproach && (
                <div>
                  <h2 className="eyebrow text-brand">Design Approach</h2>
                  <p className="mt-3 text-base leading-relaxed text-muted">{project.designApproach}</p>
                </div>
              )}

              {project.fabricationProcess && (
                <div>
                  <h2 className="eyebrow text-brand">Fabrication Process</h2>
                  <p className="mt-3 text-base leading-relaxed text-muted">{project.fabricationProcess}</p>
                </div>
              )}

              {project.installation && (
                <div>
                  <h2 className="eyebrow text-brand">Installation</h2>
                  <p className="mt-3 text-base leading-relaxed text-muted">{project.installation}</p>
                </div>
              )}

              {project.challenges && (
                <div>
                  <h2 className="eyebrow text-brand">Challenges &amp; Resolution</h2>
                  <p className="mt-3 text-base leading-relaxed text-muted">{project.challenges}</p>
                  {project.challengeResolution && (
                    <p className="mt-2 text-base leading-relaxed text-muted">{project.challengeResolution}</p>
                  )}
                </div>
              )}

              {project.result && (
                <div>
                  <h2 className="eyebrow text-brand">Verified Result</h2>
                  <p className="mt-3 text-base leading-relaxed text-ink font-semibold">{project.result}</p>
                </div>
              )}
            </div>

            <div className="space-y-6 lg:col-span-5">
              {project.workShown && project.workShown.length > 0 && (
                <div className="border border-ink/10 bg-surface p-6 sm:p-8">
                  <h3 className="eyebrow text-brand">{pageCopy.projectDetail.workShownTitle}</h3>
                  <ul className="mt-4 space-y-2">
                    {project.workShown.map((w) => (
                      <li key={w} className="flex items-center gap-2 text-sm text-ink font-medium">
                        <span className="size-1.5 bg-accent" />
                        <span>{w}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {project.scope && project.scope.length > 0 && (
                <div className="border border-ink/10 bg-surface p-6 sm:p-8">
                  <h3 className="eyebrow text-brand">Scope of Work</h3>
                  <ul className="mt-4 space-y-2">
                    {project.scope.map((s) => (
                      <li key={s} className="flex items-center gap-2 text-sm text-ink">
                        <span className="size-1.5 bg-brand" />
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {project.materials && project.materials.length > 0 && (
                <div className="border border-ink/10 bg-surface p-6 sm:p-8">
                  <h3 className="eyebrow text-brand">Materials Used</h3>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {project.materials.map((m) => (
                      <li key={m} className="border border-ink/15 bg-paper px-3 py-1 text-xs font-medium text-ink">
                        {m}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {matchedServices.length > 0 && (
                <div className="border border-ink/10 bg-paper p-6 sm:p-8">
                  <h3 className="eyebrow text-brand">{pageCopy.projectDetail.servicesTitle}</h3>
                  <ul className="mt-4 space-y-3">
                    {matchedServices.map((svc) => (
                      <li key={svc.slug}>
                        <Link
                          href={`/services/${svc.slug}`}
                          className="flex items-center justify-between text-sm font-semibold text-ink hover:text-brand"
                        >
                          <span>{svc.title}</span>
                          <Icon name="arrow-right" className="size-4 opacity-50" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Project Photography Gallery */}
      <section className="bg-surface py-20 sm:py-28">
        <div className="container-site">
          <SectionHeading
            eyebrow="Photography"
            title={pageCopy.projectDetail.galleryTitle}
            intro="Tap any photograph to open full-screen view."
            className="mb-12"
          />
          <Gallery images={project.images} layout="strip" label={`${project.title} photography gallery`} />
        </div>
      </section>

      {/* Related Projects */}
      {related.length > 0 && (
        <section className="py-14 sm:py-20 lg:py-28">
          <div className="container-site">
            <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
              <SectionHeading
                eyebrow="More projects"
                title={pageCopy.projectDetail.relatedTitle}
              />
              <ButtonLink href="/projects" variant="outline" arrow className="w-full sm:w-auto shrink-0 justify-center">
                View all work
              </ButtonLink>
            </div>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <ProjectCard key={p.slug} project={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      <FinalCta
        title="Ready to commission your branding or fabrication?"
        text="Speak with Oxtinmediaconcept's production team about your requirements, dimensions and timeline."
      />
    </>
  );
}
