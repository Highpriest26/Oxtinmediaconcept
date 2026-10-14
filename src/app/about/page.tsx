import type { Metadata } from "next";
import { Gallery } from "@/components/projects/Gallery";
import { FinalCta } from "@/components/sections/FinalCta";
import { PageHero } from "@/components/sections/PageHero";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { ProductionCapability } from "@/components/sections/ProductionCapability";
import { ProofStrip } from "@/components/sections/ProofStrip";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";
import { ImageOrFallback } from "@/components/ui/ImageOrFallback";
import { company } from "@/content/company";
import { workshopGallery } from "@/content/media";
import { pageCopy } from "@/content/pages";
import { seo } from "@/content/seo";
import { ceo, companyOrigin, getCoreTeam, getStateLeads, isImageAvailable } from "@/content";

export const metadata: Metadata = {
  title: seo.about.title,
  description: seo.about.description,
};

export default function AboutPage() {
  const coreTeam = getCoreTeam();
  const stateLeads = getStateLeads();

  return (
    <>
      <PageHero
        eyebrow={pageCopy.about.eyebrow}
        title={pageCopy.about.headline}
        intro={company.positioning}
      />

      <ProofStrip />

      {/* 1. How It Started — Origin Story */}
      <section className="py-20 sm:py-28">
        <div className="container-site">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <SectionHeading
                eyebrow="Our Origins"
                title="How Oxtinmediaconcept Started."
                intro="From in-house precision printing in Abuja to large-scale structural installations across Nigeria."
              />
              <div className="mt-8 rounded-2xl border border-ink/10 bg-surface p-6 sm:p-8">
                <span className="eyebrow text-brand">Core Principle</span>
                <h4 className="mt-2 font-display text-lg font-bold text-ink">Zero Subcontracting Dilution</h4>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  Unlike conventional agency brokers who outsource production to third parties, Oxtinmediaconcept owns
                  industrial print machinery, metal fabrication bays, and mobile rigging teams to guarantee build quality.
                </p>
              </div>
            </div>

            <div className="space-y-6 text-base leading-relaxed text-muted lg:col-span-7 sm:text-lg">
              {companyOrigin.narrative.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}

              <div className="mt-8 grid gap-4 pt-4 sm:grid-cols-2">
                <div className="rounded-xl border border-ink/10 bg-paper p-5">
                  <span className="font-display text-3xl font-black text-brand">2017</span>
                  <p className="mt-1 text-sm font-semibold text-ink">Founded in Abuja</p>
                  <p className="mt-1 text-xs text-muted">Started with local branding & commercial printing.</p>
                </div>
                <div className="rounded-xl border border-ink/10 bg-paper p-5">
                  <span className="font-display text-3xl font-black text-accent">450+</span>
                  <p className="mt-1 text-sm font-semibold text-ink">Projects Executed</p>
                  <p className="mt-1 text-xs text-muted">Covering billboards, retail rollouts & fine sculpture.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Growth Milestones */}
          <div className="mt-14 sm:mt-16 border-t border-ink/10 pt-12 sm:pt-16">
            <h3 className="eyebrow text-brand">Milestones of Growth</h3>
            <div className="mt-8 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
              {companyOrigin.milestones.map((m) => (
                <div key={m.year} className="relative rounded-2xl border border-ink/10 bg-paper p-5 sm:p-6 transition-transform hover:-translate-y-1">
                  <span className="font-display text-xl font-black text-brand">{m.year}</span>
                  <h4 className="mt-2 font-display text-sm font-bold text-ink">{m.title}</h4>
                  <p className="mt-2 text-xs leading-relaxed text-muted">{m.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. CEO & Executive Leadership Spotlight */}
      <section className="bg-night py-14 sm:py-20 lg:py-28 text-white">
        <div className="container-site">
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.07] to-white/[0.02] p-5 sm:p-8 lg:p-14">
            <div className="grid gap-8 sm:gap-12 lg:grid-cols-12 lg:items-center">
              {/* CEO Portrait Slot */}
              <div className="lg:col-span-5">
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-white/15 bg-white/5 shadow-2xl">
                  {isImageAvailable(ceo.photo?.src) ? (
                    <ImageOrFallback
                      image={ceo.photo}
                      sizes="(min-width: 1024px) 38vw, (min-width: 640px) 70vw, 100vw"
                      className="object-cover"
                      label={`${ceo.name} — Managing Director & CEO`}
                    />
                  ) : (
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-6 pb-20 text-center bg-gradient-to-b from-white/10 to-transparent">
                      <div className="grid size-20 sm:size-24 place-items-center rounded-full border-2 border-accent/60 bg-accent/20 text-accent font-display text-xl sm:text-2xl font-bold shadow-lg">
                        EAS
                      </div>
                      <p className="mt-4 font-display text-base sm:text-lg font-bold text-white">{ceo.name}</p>
                      <p className="text-xs font-semibold uppercase tracking-wider text-accent">Founder, MD & CEO</p>
                      <div className="mt-4 rounded-full border border-white/20 bg-white/10 px-3.5 py-1 text-[11px] font-medium text-white/80">
                        Portrait space reserved
                      </div>
                    </div>
                  )}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-4 sm:p-6">
                    <span className="eyebrow text-accent">Founder & CEO</span>
                    <h3 className="mt-1 font-display text-lg font-bold text-white sm:text-2xl">{ceo.name}</h3>
                    <p className="text-xs text-white/70">Oxtinmediaconcept Limited</p>
                  </div>
                </div>
              </div>

              {/* CEO Story & Vision */}
              <div className="lg:col-span-7">
                <span className="eyebrow flex items-center gap-2 text-accent">
                  <span className="size-2 rounded-full bg-accent" aria-hidden="true" />
                  Executive Leadership
                </span>
                <h2 className="mt-4 font-display text-2xl font-black text-white sm:text-4xl lg:text-5xl">
                  {ceo.name}
                </h2>
                <p className="mt-2 text-base sm:text-lg font-semibold text-white/70">{ceo.title}</p>
                <p className="mt-4 sm:mt-6 text-sm leading-relaxed text-white/80 sm:text-lg">
                  {ceo.bio}
                </p>

                <div className="mt-6 sm:mt-8 rounded-2xl border-l-4 border-accent bg-white/5 p-5 sm:p-6 backdrop-blur-xs">
                  <p className="font-display text-sm font-medium italic text-white/90 sm:text-lg">
                    &ldquo;{ceo.quote}&rdquo;
                  </p>
                  <p className="mt-3 text-xs font-bold uppercase tracking-wider text-accent">
                    — {ceo.name}, Managing Director
                  </p>
                </div>

                <div className="mt-6 sm:mt-8 grid grid-cols-3 gap-3 sm:gap-4">
                  <div className="rounded-xl border border-white/10 bg-white/5 p-3 sm:p-4 backdrop-blur-xs">
                    <span className="font-display text-xl sm:text-2xl font-bold text-accent">2017</span>
                    <p className="mt-1 text-[11px] sm:text-xs text-white/70">Founded</p>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-white/5 p-3 sm:p-4 backdrop-blur-xs">
                    <span className="font-display text-xl sm:text-2xl font-bold text-brand">450+</span>
                    <p className="mt-1 text-[11px] sm:text-xs text-white/70">Projects</p>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-white/5 p-3 sm:p-4 backdrop-blur-xs">
                    <span className="font-display text-xl sm:text-2xl font-bold text-white">Direct</span>
                    <p className="mt-1 text-[11px] sm:text-xs text-white/70">Build</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Core Team & Department Leads */}
      <section className="py-14 sm:py-20 lg:py-28">
        <div className="container-site">
          <SectionHeading
            eyebrow="The Team"
            title="Production, Design & Field Specialists."
            intro="Experienced craftsmen, designers, and project supervisors driving everyday execution across our workshops and field sites."
          />

          <div className="mt-10 sm:mt-14 grid grid-cols-1 min-[380px]:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {coreTeam.map((member) => (
              <div
                key={member.name}
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-ink/10 bg-paper transition-all hover:border-brand/40 hover:shadow-md"
              >
                {/* Team Member Photo Slot */}
                <div className="relative aspect-square w-full overflow-hidden bg-brand-dark/10">
                  <ImageOrFallback
                    image={member.photo}
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                    label={`${member.name} — Photo`}
                  />
                  <div className="absolute left-3 top-3">
                    <span className="rounded-full bg-paper/90 px-2.5 py-0.5 text-[9.5px] font-bold uppercase tracking-wider text-brand shadow-xs backdrop-blur-xs border border-ink/5">
                      {member.region || "Core Team"}
                    </span>
                  </div>
                </div>

                <div className="flex flex-1 flex-col justify-between p-4 sm:p-6">
                  <div>
                    <h3 className="font-display text-base font-bold text-ink sm:text-2xl leading-snug">{member.name}</h3>
                    <p className="mt-1 text-xs font-medium text-muted sm:text-sm">{member.role}</p>
                  </div>
                  <div className="mt-4 border-t border-ink/5 pt-3 text-[11px] text-muted/80 sm:mt-6 sm:pt-4 sm:text-xs">
                    <span>Department: </span>
                    <strong className="text-ink font-semibold">{member.region || "Workshop Operations"}</strong>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Regional Field Team Leaders */}
          <div className="mt-12 sm:mt-16 rounded-3xl border border-ink/10 bg-surface p-6 sm:p-10 lg:p-12">
            <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <div>
                <span className="eyebrow text-brand">State Field Supervision</span>
                <h3 className="mt-2 font-display text-xl font-bold text-ink sm:text-3xl">
                  Regional Project Leaders
                </h3>
                <p className="mt-2 max-w-2xl text-xs sm:text-sm text-muted">
                  Dedicated state supervisors ensuring rapid on-site surveys, safety compliance, and precise installation sign-off.
                </p>
              </div>
              <span className="rounded-full bg-paper px-4 py-1.5 text-xs font-semibold text-brand shadow-xs border border-ink/10 shrink-0 self-start md:self-auto">
                Multi-State Coverage
              </span>
            </div>

            <div className="mt-8 grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
              {stateLeads.map((lead) => (
                <div key={lead.name} className="rounded-xl border border-ink/10 bg-paper p-4 sm:p-5">
                  <span className="rounded-md bg-accent/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-accent">
                    {lead.region}
                  </span>
                  <h4 className="mt-2.5 font-display text-sm font-bold text-ink sm:text-base">{lead.name}</h4>
                  <p className="mt-0.5 text-xs text-muted">{lead.role}</p>
                </div>
              ))}
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
            <div className="rounded-2xl border border-ink/10 bg-paper p-8">
              <h3 className="font-display text-xl font-bold text-ink">{pageCopy.about.regionsTitle}</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                {pageCopy.about.regionsPending}
              </p>
              <div className="mt-6 rounded-xl bg-surface p-4 text-xs font-semibold text-brand">
                Head Office: {company.locationSummary}
              </div>
            </div>
          </div>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
