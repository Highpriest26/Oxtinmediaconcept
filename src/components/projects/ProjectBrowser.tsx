"use client";

import { useState } from "react";
import type { PortfolioFilter, Project } from "@/content/types";
import { cn } from "@/lib/utils";
import { ProjectCard } from "./ProjectCard";

/** Portfolio grid with a simple category filter (filters without projects are hidden). */
export function ProjectBrowser({
  projects,
  filters,
}: {
  projects: Project[];
  filters: { id: PortfolioFilter; label: string }[];
}) {
  const [active, setActive] = useState<PortfolioFilter | "all">("all");
  const usable = filters.filter((f) => projects.some((p) => p.filters.includes(f.id)));
  const visible = active === "all" ? projects : projects.filter((p) => p.filters.includes(active));

  const options: { id: PortfolioFilter | "all"; label: string }[] = [{ id: "all", label: "All work" }, ...usable];

  return (
    <div>
      {usable.length > 1 ? (
        <div role="group" aria-label="Filter projects by category" className="no-scrollbar flex gap-2 overflow-x-auto pb-3 sm:flex-wrap">
          {options.map((o) => {
            const count = o.id === "all" ? projects.length : projects.filter((p) => p.filters.includes(o.id as PortfolioFilter)).length;
            const pressed = active === o.id;
            return (
              <button
                key={o.id}
                type="button"
                aria-pressed={pressed}
                onClick={() => setActive(o.id)}
                className={cn(
                  "inline-flex min-h-11 shrink-0 items-center gap-2 rounded-full border px-4 py-2 text-xs sm:text-sm font-semibold transition-colors shadow-2xs",
                  pressed ? "border-ink bg-ink text-white" : "border-ink/15 bg-paper text-ink hover:border-ink",
                )}
              >
                <span>{o.label}</span>
                <span className={cn("text-[11px] font-bold", pressed ? "text-white/70" : "text-muted")}>{count}</span>
              </button>
            );
          })}
        </div>
      ) : null}

      <p className="sr-only" aria-live="polite">
        Showing {visible.length} {visible.length === 1 ? "project" : "projects"}
      </p>

      <ul className="mt-8 sm:mt-12 grid gap-y-10 sm:gap-y-12 md:grid-cols-2 md:gap-x-6 lg:gap-x-8">
        {visible.map((p, i) => (
          <li key={p.slug} className={cn(i % 4 === 0 || i % 4 === 3 ? "" : "md:mt-16")}>
            <ProjectCard project={p} size={i % 4 === 0 || i % 4 === 3 ? "tall" : "default"} headingLevel="h2" sizes="(min-width: 768px) 50vw, 100vw" />
          </li>
        ))}
      </ul>
    </div>
  );
}
