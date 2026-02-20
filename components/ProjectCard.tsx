import type { ProjectEntry } from "@/data/content";

export default function ProjectCard({
  title,
  organization,
  dates,
  bullets,
  tech,
}: ProjectEntry) {
  return (
    <article className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-elevated)] p-5 md:p-6 transition-all duration-300 hover:shadow-[var(--shadow-card-hover)] hover:-translate-y-0.5">
      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
        <h3 className="font-semibold text-lg text-[var(--color-text)]">{title}</h3>
        <span className="text-sm text-[var(--color-text-muted)] sm:text-right mt-1 sm:mt-0">
          {dates}
        </span>
      </div>
      <p className="mt-1 text-sm font-medium text-[var(--color-accent)]">{organization}</p>
      <ul className="mt-3 space-y-1 list-disc list-inside text-sm text-[var(--color-text-muted)] leading-relaxed">
        {bullets.map((bullet, i) => (
          <li key={i}>{bullet}</li>
        ))}
      </ul>
      {tech.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {tech.map((tag) => (
            <span
              key={tag}
              className="text-xs font-medium px-3 py-1.5 rounded-lg bg-[var(--color-accent-light)]/40 text-[var(--color-accent)] border border-[var(--color-border)] hover:border-[var(--color-accent)] transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </article>
  );
}
