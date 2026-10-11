import type { Metadata } from "next";
import { ProjectBrowser } from "@/components/projects/ProjectBrowser";
import { FinalCta } from "@/components/sections/FinalCta";
import { PageHero } from "@/components/sections/PageHero";
import { portfolioFilters, projects } from "@/content";
import { pageCopy } from "@/content/pages";
import { seo } from "@/content/seo";

export const metadata: Metadata = {
  title: seo.projects.title,
  description: seo.projects.description,
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow={pageCopy.projects.eyebrow}
        title={pageCopy.projects.headline}
        intro={pageCopy.projects.intro}
      />

      <section className="py-16 sm:py-24">
        <div className="container-site">
          <ProjectBrowser projects={projects} filters={portfolioFilters} />
        </div>
      </section>

      <FinalCta />
    </>
  );
}
