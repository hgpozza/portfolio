import { site } from "@/data/content";
import { IconEnvelope, IconLinkedIn, IconGitHub } from "./Icons";

export default function Footer({ basePath }: { basePath: string }) {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-bg-elevated)] py-6 md:py-8 px-4 md:px-6 mt-0">
      <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[var(--color-text-muted)]">
        <span>© {year} {site.name}. All rights reserved.</span>
        <div className="flex items-center gap-4">
          <a
            href={`mailto:${site.email}`}
            className="inline-flex items-center gap-2 hover:text-[var(--color-accent)] transition-colors"
          >
            <IconEnvelope />
            Email
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 hover:text-[var(--color-accent)] transition-colors"
          >
            <IconLinkedIn />
            LinkedIn
          </a>
          {site.github && (
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:text-[var(--color-accent)] transition-colors"
            >
              <IconGitHub />
              GitHub
            </a>
          )}
        </div>
      </div>
    </footer>
  );
}
