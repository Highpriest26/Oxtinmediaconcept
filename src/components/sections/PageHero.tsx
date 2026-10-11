import { cn } from "@/lib/utils";

/** Inner-page header band. */
export function PageHero({
  eyebrow,
  title,
  intro,
  children,
  className,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={cn("relative isolate overflow-hidden bg-night text-white", className)}>
      <div className="absolute inset-0 -z-10 bg-grid opacity-50" aria-hidden="true" />
      <div className="absolute -right-24 top-0 -z-10 h-full w-1/2 bg-brand/25 blur-3xl" aria-hidden="true" />
      <div className="container-site py-16 sm:py-24 lg:py-28">
        <p className="eyebrow flex items-center gap-3 text-white/70">
          <span className="h-px w-8 bg-accent" aria-hidden="true" />
          {eyebrow}
        </p>
        <h1 className="mt-5 max-w-4xl text-4xl font-black leading-[1.02] sm:text-5xl lg:text-7xl">{title}</h1>
        {intro ? <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">{intro}</p> : null}
        {children}
      </div>
    </section>
  );
}
