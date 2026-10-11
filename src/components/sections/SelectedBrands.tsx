import { pageCopy } from "@/content/pages";
import { selectedBrands } from "@/content/projects";

/**
 * Brands visible in the approved portfolio (client confirmed they may be named).
 * Rendered as typographic names — official brand logo files are not used.
 */
export function SelectedBrands() {
  return (
    <section aria-labelledby="selected-brands" className="border-y border-ink/10 py-14 sm:py-16">
      <div className="container-site flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-16">
        <h2 id="selected-brands" className="eyebrow shrink-0 text-muted">
          {pageCopy.home.brands.title}
        </h2>
        <ul className="flex flex-wrap items-center gap-x-10 gap-y-4 sm:gap-x-14">
          {selectedBrands.map((b) => (
            <li key={b} className="font-display text-2xl font-black tracking-tight text-ink/80 sm:text-3xl">
              {b}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
