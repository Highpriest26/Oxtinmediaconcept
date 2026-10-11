import type { Metadata } from "next";
import { Gallery } from "@/components/projects/Gallery";
import { FinalCta } from "@/components/sections/FinalCta";
import { PageHero } from "@/components/sections/PageHero";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { ProductionCapability } from "@/components/sections/ProductionCapability";
import { ProofStrip } from "@/components/sections/ProofStrip";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { company } from "@/content/company";
import { workshopGallery } from "@/content/media";
import { pageCopy } from "@/content/pages";
import { seo } from "@/content/seo";
import { getPublicTeam } from "@/content";

export const metadata: Metadata = {
  title: seo.about.title,
  description: seo.about.description,
};

export default function AboutPage() {
  const publicTeam = getPublicTeam();

  return (
    <>
      <PageHero
        eyebrow={pageCopy.about.eyebrow}
        title={pageCopy.about.headline}
        intro={company.positioning}
      />

      <ProofStrip />

      {/* Company Story & Positioning */}
      <section className="py-20 sm:py-28">
        <div className="container-site grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Our story"
              title={pageCopy.about.storyTitle}
              intro={company.capabilitySummary}
            />
          </div>
          <div className="space-y-6 text-base leading-relaxed text-muted lg:col-span-7 sm:text-lg">
            <p>
              Established in {company.established}, {company.legalName} was founded to bridge the gap
              between creative visual concepts and real-world physical fabrication. Operating from our
              head office in {company.locationSummary}, we have executed over {company.projectsDisplay.toLowerCase()}.
            </p>
            <p>
              We are not just a design office or an agency broker. We combine in-house printing, metalwork,
              sculptural armature modelling, illuminated letter fabrication and field installation crews
              under one accountable roof.
            </p>
            <div className="border-l-4 border-brand bg-surface p-6 text-ink">
              <h3 className="font-display font-bold text-lg">Single-Source Responsibility</h3>
              <p className="mt-2 text-sm text-muted">
                From initial client consultation and precision shop drawings to factory production,
                crane rigging and final site illumination, our teams retain direct control of craft and delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Production Capability */}
      <ProductionCapability showLink={false} />

      {/* Workshop Gallery */}
      <section id="workshop" className="bg-surface py-20 sm:py-28">
        <div className="container-site">
          <SectionHeading
            eyebrow="Facilities"
            title={pageCopy.about.workshopTitle}
            intro={pageCopy.about.workshopIntro}
          />
          <div className="mt-12">
            <Gallery images={workshopGallery} layout="strip" label="Workshop and equipment photos" />
          </div>
        </div>
      </section>

      {/* Execution & Multi-State Operations */}
      <ProcessSteps tone="dark" />

      {/* Multi-State Coverage Section */}
      <section className="py-20 sm:py-24">
        <div className="container-site grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <SectionHeading
              eyebrow="Coverage"
              title={pageCopy.about.executionTitle}
              intro={company.executionSummary}
            />
            <p className="mt-6 text-base text-muted">
              {company.executionDetail}
            </p>
          </div>

          <div className="lg:col-span-6">
            <div className="border border-ink/10 bg-paper p-8">
              <h3 className="font-display text-xl font-bold text-ink">{pageCopy.about.regionsTitle}</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                {pageCopy.about.regionsPending}
              </p>
              <div className="mt-6 rounded-none bg-surface p-4 text-xs font-semibold text-brand">
                Head Office: {company.locationSummary}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Confirmed Leadership / Team Placeholder */}
      {publicTeam.length > 0 && (
        <section className="border-t border-ink/10 bg-surface py-20 sm:py-24">
          <div className="container-site">
            <SectionHeading
              eyebrow="Leadership"
              title={pageCopy.about.leadershipTitle}
              intro="Guiding our creative fabrication and project execution teams across Nigeria."
            />
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {publicTeam.map((member) => (
                <div key={member.name} className="border border-ink/10 bg-paper p-6 sm:p-8">
                  <span className="eyebrow text-brand">Leadership</span>
                  <h3 className="mt-3 font-display text-2xl font-bold text-ink">{member.name}</h3>
                  <p className="mt-2 text-sm text-muted">
                    {member.role || "Executive Leadership"}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <FinalCta />
    </>
  );
}
