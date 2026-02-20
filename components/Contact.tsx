import { site } from "@/data/content";
import { IconEnvelope, IconLinkedIn, IconGitHub } from "./Icons";

const buttonBase =
  "inline-flex items-center justify-center gap-2 w-full sm:w-auto sm:min-w-[160px] px-5 py-3 rounded-xl font-semibold transition-all duration-200 text-center";

export default function Contact() {
  return (
    <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center justify-center gap-3 sm:gap-4">
      <a
        href={`mailto:${site.email}`}
        className={`${buttonBase} bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent-hover)] hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]`}
      >
        <IconEnvelope />
        {site.email}
      </a>
      <a
        href={site.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className={`${buttonBase} border-2 border-[var(--color-accent)] text-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:text-white`}
      >
        <IconLinkedIn />
        LinkedIn
      </a>
      {site.github && (
        <a
          href={site.github}
          target="_blank"
          rel="noopener noreferrer"
          className={`${buttonBase} border-2 border-[var(--color-border)] text-[var(--color-text)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]`}
        >
          <IconGitHub />
          GitHub
        </a>
      )}
    </div>
  );
}
