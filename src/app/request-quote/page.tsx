import type { Metadata } from "next";
import { QuoteForm } from "@/components/forms/QuoteForm";
import { ContactDetails } from "@/components/sections/ContactDetails";
import { PageHero } from "@/components/sections/PageHero";
import { pageCopy } from "@/content/pages";
import { seo } from "@/content/seo";

export const metadata: Metadata = {
  title: seo.quote.title,
  description: seo.quote.description,
};

export default async function RequestQuotePage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const resolvedParams = await searchParams;
  const projectType = typeof resolvedParams.type === "string" ? resolvedParams.type : undefined;

  return (
    <>
      <PageHero
        eyebrow={pageCopy.quote.eyebrow}
        title={pageCopy.quote.headline}
        intro={pageCopy.quote.intro}
      />

      <section className="py-16 sm:py-24">
        <div className="container-site grid gap-16 lg:grid-cols-12">
          {/* Main Form */}
          <div className="lg:col-span-8">
            <div className="border border-ink/10 bg-paper p-6 sm:p-10">
              <h2 className="font-display text-2xl font-bold text-ink mb-6">
                Tell us about your project
              </h2>
              <QuoteForm defaultProjectType={projectType} />
            </div>
          </div>

          {/* Direct Contact Sidebar */}
          <div className="space-y-8 lg:col-span-4">
            <div className="border border-ink/10 bg-surface p-6 sm:p-8">
              <h3 className="eyebrow text-brand">Prefer direct contact?</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                If you have architectural drawings, site photos, or need immediate consultation,
                you can reach our production team directly.
              </p>
              <div className="mt-6">
                <ContactDetails />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
