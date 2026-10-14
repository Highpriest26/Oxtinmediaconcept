import { company } from "@/content/company";

export function ProofStrip() {
  return (
    <section aria-label="Company at a glance" className="border-b border-ink/10 bg-paper">
      <dl className="container-site grid grid-cols-2 lg:grid-cols-4">
        {company.proofStrip.map((item, i) => (
          <div
            key={item.label}
            className={[
              "flex flex-col-reverse gap-1 py-6 sm:py-8 lg:py-10",
              i % 2 === 1 ? "border-l border-ink/10 pl-3.5 sm:pl-8" : "pr-2",
              i >= 2 ? "border-t border-ink/10 lg:border-t-0" : "",
              i === 2 ? "lg:border-l lg:pl-8" : "",
              i === 0 ? "" : "lg:pl-8",
            ].join(" ")}
          >
            <dt className="text-[11px] font-bold uppercase tracking-wider text-muted sm:text-xs">{item.label}</dt>
            <dd className="font-display text-2xl font-black text-brand sm:text-4xl lg:text-5xl">{item.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
