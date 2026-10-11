import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { FaqList } from "@/components/sections/FaqList";
import { FinalCta } from "@/components/sections/FinalCta";
import { PageHero } from "@/components/sections/PageHero";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { ButtonLink } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { faqs, getProjectsForService, getServiceBySlug, services } from "@/content";
import { pageCopy } from "@/content/pages";

export const dynamicParams = false;

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  return {
    title: `${service.title} | Oxtinmediaconcept`,
    description: service.summary,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const relatedProjects = getProjectsForService(service.slug);

  return (
    <>
      <PageHero
        eyebrow="Service"
        title={service.title}
        intro={service.summary}
      >
        <div className="mt-8">
          <ButtonLink href={`/request-quote?type=${encodeURIComponent(service.quoteProjectType)}`} variant="accent" arrow>
            Request a Quote for {service.title}
          </ButtonLink>
        </div>
      </PageHero>

      {/* Service Scope & Capabilities */}
      <section className="py-20 sm:py-28">
        <div className="container-site grid gap-12 lg:grid-cols-12">
          <div className="space-y-6 lg:col-span-7">
            <SectionHeading
              eyebrow="Overview"
              title="End-to-end execution."
            />
            {service.description.map((paragraph, i) => (
              <p key={i} className="text-base leading-relaxed text-muted sm:text-lg">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="lg:col-span-5">
            <div className="border border-ink/10 bg-surface p-6 sm:p-8">
              <h3 className="eyebrow flex items-center gap-2 text-brand">
                <Icon name={service.icon} className="size-5" />
                {pageCopy.serviceDetail.includesTitle}
              </h3>
              <ul className="mt-6 space-y-3">
                {service.includes.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-ink sm:text-base font-medium">
                    <span className="mt-1 size-1.5 shrink-0 bg-accent" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Related Work */}
      {relatedProjects.length > 0 && (
        <section className="border-t border-ink/10 bg-surface py-20 sm:py-28">
          <div className="container-site">
            <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
              <SectionHeading
                eyebrow="Portfolio"
                title={pageCopy.serviceDetail.relatedTitle}
                intro={`Featured visual work and installations relevant to ${service.title.toLowerCase()}.`}
              />
              <ButtonLink href="/projects" variant="outline" arrow className="shrink-0">
                All projects
              </ButtonLink>
            </div>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedProjects.map((p) => (
                <ProjectCard key={p.slug} project={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Process */}
      <ProcessSteps tone="dark" />

      {/* FAQ */}
      <section className="py-20 sm:py-28">
        <div className="container-site max-w-4xl">
          <SectionHeading
            eyebrow="Questions"
            title={pageCopy.serviceDetail.faqTitle}
            className="mb-12"
          />
          <FaqList faqs={faqs} />
        </div>
      </section>

      <FinalCta
        title={`Ready to begin your ${service.title.toLowerCase()} project?`}
        text="Get in touch with our Abuja team for technical advice, dimensions review, and quote delivery."
      />
    </>
  );
}
