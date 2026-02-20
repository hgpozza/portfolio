import type { ExperienceEntry } from "@/data/content";

export default function ExperienceCard({
  company,
  role,
  location,
  dates,
  bullets,
}: ExperienceEntry) {
  return (
    <article className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-elevated)] p-5 md:p-6 transition-all duration-300 hover:shadow-[var(--shadow-card-hover)] hover:-translate-y-0.5">
      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
        <div>
          <h3 className="font-semibold text-lg text-[var(--color-text)]">{company}</h3>
          <p className="text-[var(--color-accent)] font-medium">{role}</p>
        </div>
        <div className="text-sm text-[var(--color-text-muted)] sm:text-right mt-1 sm:mt-0">
          <p>{location}</p>
          <p>{dates}</p>
        </div>
      </div>
      <ul className="mt-4 space-y-2 list-disc list-inside text-sm text-[var(--color-text-muted)] leading-relaxed">
        {bullets.map((bullet, i) => (
          <li key={i}>{bullet}</li>
        ))}
      </ul>
    </article>
  );
}
