import { experience } from "@/data/content";
import ExperienceCard from "./ExperienceCard";

export default function Experience() {
  return (
    <div className="space-y-6">
      {experience.map((entry, i) => (
        <ExperienceCard key={i} {...entry} />
      ))}
    </div>
  );
}
