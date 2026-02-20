import { projects } from "@/data/content";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <div className="space-y-6">
      {projects.map((project, i) => (
        <ProjectCard key={i} {...project} />
      ))}
    </div>
  );
}
