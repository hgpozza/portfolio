"use client";

import Link from "next/link";
import { useState } from "react";
import { site } from "@/data/content";
import { IconDownload, IconMenu, IconClose } from "./Icons";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar({ basePath }: { basePath: string }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const prefix = basePath ? `${basePath}` : "";

  return (
    <header className="sticky top-0 z-50 bg-[var(--color-bg-elevated)]/90 backdrop-blur-md border-b border-[var(--color-border)] shadow-sm">
      <nav className="max-w-3xl mx-auto px-4 md:px-6 py-3 flex items-center justify-between gap-4">
        <Link
          href="/"
          className="text-lg font-bold text-[var(--color-text)] hover:text-[var(--color-accent)] transition-colors duration-200 tracking-tight"
        >
          {site.name.split(" ")[0]}
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="px-3 py-2 text-sm font-medium text-[var(--color-text-muted)] hover:text-[var(--color-accent)] hover:bg-[var(--color-accent-light)]/30 rounded-lg transition-all duration-200"
            >
              {label}
            </a>
          ))}
          <a
            href={`${prefix}${site.resumePdf}`}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 inline-flex items-center justify-center gap-2 text-sm font-semibold px-5 py-2.5 min-w-[180px] whitespace-nowrap rounded-lg bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent-hover)] hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
          >
            <IconDownload />
            Download Resume
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMobileOpen((o) => !o)}
          className="md:hidden p-2 rounded-lg text-[var(--color-text)] hover:bg-[var(--color-border)] transition-colors"
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <IconClose /> : <IconMenu />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-[var(--color-border)] bg-[var(--color-bg-elevated)]">
          <div className="max-w-3xl mx-auto px-4 py-4 flex flex-col gap-1">
            {navLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                onClick={() => setMobileOpen(false)}
                className="px-4 py-3 rounded-lg text-[var(--color-text)] font-medium hover:bg-[var(--color-accent-light)]/20 hover:text-[var(--color-accent)] transition-colors"
              >
                {label}
              </a>
            ))}
            <a
              href={`${prefix}${site.resumePdf}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 px-5 py-3 whitespace-nowrap rounded-lg bg-[var(--color-accent)] text-white font-semibold hover:bg-[var(--color-accent-hover)] transition-colors"
            >
              <IconDownload />
              Download Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
