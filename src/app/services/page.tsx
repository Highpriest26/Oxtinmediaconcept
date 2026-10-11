import type { Metadata } from "next";
import { FinalCta } from "@/components/sections/FinalCta";
import { PageHero } from "@/components/sections/PageHero";
import { ServicesList } from "@/components/sections/ServicesList";
import { pageCopy } from "@/content/pages";
import { seo } from "@/content/seo";

export const metadata: Metadata = {
  title: seo.services.title,
  description: seo.services.description,
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow={pageCopy.services.eyebrow}
        title={pageCopy.services.headline}
        intro={pageCopy.services.intro}
      />

      <ServicesList heading={false} headingLevel="h2" />

      <FinalCta />
    </>
  );
}
