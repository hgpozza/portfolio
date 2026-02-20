import Image from "next/image";
import { site } from "@/data/content";
import { IconMapPin, IconEnvelope, IconLinkedIn, IconGitHub } from "./Icons";

// Base path for GitHub Pages (e.g. /portfolio) so images load from correct URL
const basePath = process.env.NEXT_PUBLIC_BASE_PATH
  ? `/${process.env.NEXT_PUBLIC_BASE_PATH.replace(/^\/+/, "")}`
  : "";

export default function Hero() {
  const hasCover = site.coverImage && site.coverImage.length > 0;
  const hasProfile = site.profileImage && site.profileImage.length > 0;
  const coverSrc = basePath ? `${basePath}${site.coverImage}` : site.coverImage;
  const profileSrc = basePath ? `${basePath}${site.profileImage}` : site.profileImage;

  return (
    <section
      className="relative overflow-hidden"
      style={{ background: "var(--gradient-hero)" }}
    >
      {/* Cover: use image from public/ if site.coverImage is set, else placeholder */}
      <div
        className="w-full h-32 sm:h-40 md:h-48 bg-[var(--color-border)] flex items-center justify-center overflow-hidden"
        style={{ aspectRatio: "3/1", minHeight: "8rem" }}
      >
        {hasCover ? (
          <Image
            src={coverSrc}
            alt=""
            width={1200}
            height={400}
            className="w-full h-full object-cover"
            unoptimized
          />
        ) : (
          <span className="text-sm text-[var(--color-text-muted)] font-medium">
            Cover photo
          </span>
        )}
      </div>

      <div className="max-w-3xl mx-auto px-4 md:px-6 pt-6 pb-6 md:pt-8 md:pb-8 relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Profile: use image from public/ if site.profileImage is set, else placeholder */}
          <div
            className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full bg-[var(--color-border)] flex items-center justify-center shrink-0 border-4 border-[var(--color-bg-elevated)] shadow-md -mt-12 sm:-mt-14 md:-mt-16 overflow-hidden"
            aria-hidden
          >
            {hasProfile ? (
              <Image
                src={profileSrc}
                alt=""
                width={128}
                height={128}
                className="w-full h-full object-cover"
                unoptimized
              />
            ) : (
              <span className="text-xs text-[var(--color-text-muted)] text-center px-2">
                Photo
              </span>
            )}
          </div>

          <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--color-text)] tracking-tight leading-tight">
            {site.name}
          </h1>
          <p className="mt-2 text-lg sm:text-xl md:text-2xl font-semibold text-[var(--color-accent)]">
            {site.headline}
          </p>
          <p className="mt-3 text-sm sm:text-base md:text-lg text-[var(--color-text-muted)] max-w-xl mx-auto leading-relaxed">
            {site.valueStatement}
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-sm">
            <span className="inline-flex items-center gap-2 text-[var(--color-text-muted)] bg-[var(--color-bg-elevated)]/80 px-3 py-2 rounded-lg border border-[var(--color-border)]">
              <IconMapPin />
              {site.location}
            </span>
            <a
              href={`mailto:${site.email}`}
              className="inline-flex items-center gap-2 text-[var(--color-accent)] font-medium hover:text-[var(--color-accent-hover)] underline-offset-4 hover:underline transition-colors"
            >
              <IconEnvelope />
              <span className="hidden sm:inline">{site.email}</span>
              <span className="sm:hidden">Email</span>
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[var(--color-accent)] font-medium hover:text-[var(--color-accent-hover)] underline-offset-4 hover:underline transition-colors"
            >
              <IconLinkedIn />
              LinkedIn
            </a>
            {site.github && (
              <a
                href={site.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[var(--color-accent)] font-medium hover:text-[var(--color-accent-hover)] underline-offset-4 hover:underline transition-colors"
              >
                <IconGitHub />
                GitHub
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
