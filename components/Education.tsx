import { education, certifications, publications } from "@/data/content";
import type { EducationEntry } from "@/data/content";

function EducationCard({
  school,
  degree,
  note,
  dates,
  bullets,
}: EducationEntry) {
  return (
    <article className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-elevated)] p-5 md:p-6 transition-all duration-300 hover:shadow-[var(--shadow-card-hover)] hover:-translate-y-0.5">
      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
        <div>
          <h3 className="font-semibold text-lg text-[var(--color-text)]">{school}</h3>
          <p className="text-[var(--color-accent)] font-medium">{degree}</p>
          {note && (
            <p className="text-sm text-[var(--color-text-muted)] mt-0.5">
              {note}
            </p>
          )}
        </div>
        <span className="text-sm text-[var(--color-text-muted)] sm:text-right mt-1 sm:mt-0">
          {dates}
        </span>
      </div>
      <ul className="mt-4 space-y-1 list-disc list-inside text-sm text-[var(--color-text-muted)] leading-relaxed">
        {bullets.map((bullet, i) => (
          <li key={i}>{bullet}</li>
        ))}
      </ul>
    </article>
  );
}

export default function Education() {
  return (
    <div className="space-y-8">
      <div className="space-y-6">
        {education.map((entry, i) => (
          <EducationCard key={i} {...entry} />
        ))}
      </div>

      {certifications.length > 0 && (
        <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-elevated)] p-5 md:p-6">
          <h3 className="text-lg font-semibold text-[var(--color-text)] mb-3">
            Certifications
          </h3>
          <ul className="space-y-2 text-sm text-[var(--color-text-muted)]">
            {certifications.map((c, i) => (
              <li key={i}>
                <span className="font-medium text-[var(--color-text)]">
                  {c.name}
                </span>
                {" — "}
                {c.date}
              </li>
            ))}
          </ul>
        </div>
      )}

      {publications.length > 0 && (
        <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-elevated)] p-5 md:p-6">
          <h3 className="text-lg font-semibold text-[var(--color-text)] mb-3">
            Publications
          </h3>
          <ul className="space-y-3">
            {publications.map((p, i) => (
              <li key={i} className="text-sm">
                <span className="text-[var(--color-text)]">{p.title}</span>
                <span className="text-[var(--color-text-muted)]">
                  {" "}
                  — {p.authors}.{" "}
                </span>
                {p.url ? (
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--color-accent)] font-medium hover:text-[var(--color-accent-hover)] underline-offset-4 hover:underline transition-colors"
                  >
                    {p.venue}
                  </a>
                ) : (
                  <span className="text-[var(--color-text-muted)]">
                    {p.venue}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
