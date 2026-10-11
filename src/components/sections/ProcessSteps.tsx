import { company } from "@/content/company";
import { pageCopy } from "@/content/pages";
import { SectionHeading } from "../ui/SectionHeading";

/** Concise 5-step execution flow. */
export function ProcessSteps({ tone = "light" }: { tone?: "light" | "dark" }) {
  const dark = tone === "dark";
  return (
    <section
      aria-labelledby="how-we-execute"
      className={dark ? "bg-night py-20 text-white sm:py-28" : "bg-surface py-20 sm:py-28"}
    >
      <div className="container-site">
        <SectionHeading
          id="how-we-execute"
          eyebrow={pageCopy.home.process.eyebrow}
          title={pageCopy.home.process.title}
          intro={company.executionSummary}
          tone={dark ? "light" : "dark"}
        />
        <ol
          className={`mt-14 grid gap-px overflow-hidden border sm:grid-cols-2 lg:grid-cols-5 ${dark ? "border-white/10 bg-white/10" : "border-ink/10 bg-ink/10"}`}
        >
          {company.process.map((step, i) => (
            <li key={step.title} className={dark ? "bg-night p-6 sm:p-8" : "bg-surface p-6 sm:p-8"}>
              <span className={`font-display text-5xl font-black ${dark ? "text-white/25" : "text-brand"}`} aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className={dark ? "mt-6 text-xl font-extrabold text-white" : "mt-6 text-xl font-extrabold text-ink"}>
                <span className="sr-only">Step {i + 1}: </span>
                {step.title}
              </h3>
              <p className={dark ? "mt-3 text-sm leading-relaxed text-white/70" : "mt-3 text-sm leading-relaxed text-muted"}>
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
