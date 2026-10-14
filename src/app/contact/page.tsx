import type { Metadata } from "next";
import { ContactForm } from "@/components/forms/ContactForm";
import { ContactDetails } from "@/components/sections/ContactDetails";
import { PageHero } from "@/components/sections/PageHero";
import { pageCopy } from "@/content/pages";
import { seo } from "@/content/seo";

export const metadata: Metadata = {
  title: seo.contact.title,
  description: seo.contact.description,
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow={pageCopy.contact.eyebrow}
        title={pageCopy.contact.headline}
        intro={pageCopy.contact.intro}
      />

      <section className="py-10 sm:py-16 lg:py-24">
        <div className="container-site grid gap-10 sm:gap-12 lg:gap-16 lg:grid-cols-12">
          {/* Direct Contact Blocks */}
          <div className="lg:col-span-5">
            <h2 className="eyebrow text-brand mb-6">Head Office &amp; Channels</h2>
            <ContactDetails />
          </div>

          {/* Contact Message Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-ink/10 bg-paper p-5 sm:p-8 lg:p-10 shadow-xs">
              <h2 className="font-display text-2xl font-bold text-ink mb-6">
                {pageCopy.contact.formTitle}
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
