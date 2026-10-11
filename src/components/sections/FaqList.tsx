import type { Faq } from "@/content/types";

/** FAQ list using native <details> (keyboard and screen-reader friendly, no JS). */
export function FaqList({ faqs }: { faqs: Faq[] }) {
  if (faqs.length === 0) return null;
  return (
    <div className="divide-y divide-ink/10 border-y border-ink/10">
      {faqs.map((f) => (
        <details key={f.question} className="group py-1">
          <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-6 py-4 text-lg font-bold text-ink [&::-webkit-details-marker]:hidden">
            {f.question}
            <span
              aria-hidden="true"
              className="grid size-8 shrink-0 place-items-center border border-ink/15 text-xl leading-none transition-transform group-open:rotate-45"
            >
              +
            </span>
          </summary>
          <p className="max-w-3xl pb-6 leading-relaxed text-muted">{f.answer}</p>
        </details>
      ))}
    </div>
  );
}
