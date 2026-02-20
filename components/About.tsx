import { about } from "@/data/content";

export default function About() {
  return (
    <div className="space-y-5 text-[var(--color-text-muted)] leading-relaxed">
      {about.summary.map((paragraph, i) => (
        <p key={i} className="text-[15px] md:text-base">
          {paragraph}
        </p>
      ))}
    </div>
  );
}
