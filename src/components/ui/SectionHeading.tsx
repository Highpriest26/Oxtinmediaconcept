import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  intro,
  tone = "dark",
  align = "left",
  as: Tag = "h2",
  className,
  id,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  tone?: "dark" | "light";
  align?: "left" | "center";
  as?: "h1" | "h2" | "h3";
  className?: string;
  id?: string;
}) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow ? (
        <p className={cn("eyebrow mb-4 flex items-center gap-3", tone === "dark" ? "text-brand" : "text-white/70", align === "center" && "justify-center")}>
          <span className="h-px w-8 bg-accent" aria-hidden="true" />
          {eyebrow}
        </p>
      ) : null}
      <Tag
        id={id}
        className={cn(
          "text-3xl font-extrabold leading-[1.05] sm:text-4xl lg:text-5xl",
          tone === "dark" ? "text-ink" : "text-white",
        )}
      >
        {title}
      </Tag>
      {intro ? (
        <p className={cn("mt-5 text-base leading-relaxed sm:text-lg", tone === "dark" ? "text-muted" : "text-white/75")}>
          {intro}
        </p>
      ) : null}
    </div>
  );
}
