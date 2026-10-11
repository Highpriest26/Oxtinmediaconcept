/**
 * Content entry point + typed helpers. Components import from "@/content" only.
 */
import { projects } from "./projects";
import { services } from "./services";
import { team } from "./team";
import type { PortfolioFilter, Project, Service } from "./types";

export * from "./types";
export { branding } from "./branding";
export { company } from "./company";
export { contact } from "./contact";
export { mainNav, primaryCta, secondaryCta } from "./navigation";
export { services, quoteProjectTypes, quoteTimelines } from "./services";
export { projects, featuredStorySlug, portfolioFilters, selectedBrands } from "./projects";
export { equipment } from "./equipment";
export { media, heroImage, workshopGallery } from "./media";
export { team } from "./team";
export { faqs } from "./faqs";
export { seo, siteUrl } from "./seo";
export { isImageAvailable, pickImage } from "@/lib/images";

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(limit = 4): Project[] {
  return projects.filter((p) => p.featured).slice(0, limit);
}

export function getProjectsForService(serviceSlug: string): Project[] {
  return projects.filter((p) => p.serviceSlugs.includes(serviceSlug));
}

export function getRelatedProjects(project: Project, limit = 3): Project[] {
  const scored = projects
    .filter((p) => p.slug !== project.slug)
    .map((p) => ({
      p,
      score:
        p.filters.filter((f) => project.filters.includes(f)).length +
        p.serviceSlugs.filter((s) => project.serviceSlugs.includes(s)).length,
    }))
    .sort((a, b) => b.score - a.score);
  return scored.slice(0, limit).map((s) => s.p);
}

export function getServicesForProject(project: Project): Service[] {
  return services.filter((s) => project.serviceSlugs.includes(s.slug));
}

export function countProjectsByFilter(filter: PortfolioFilter): number {
  return projects.filter((p) => p.filters.includes(filter)).length;
}

export function getPublicTeam() {
  return team.filter((m) => m.public);
}
