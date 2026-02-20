import { skills } from "@/data/content";
import SkillGroup from "./SkillGroup";

const groups = [
  { key: "languages" as const, label: "Languages" },
  { key: "frameworks" as const, label: "Frameworks" },
  { key: "tools" as const, label: "Tools" },
  { key: "cloud" as const, label: "Cloud" },
  { key: "databases" as const, label: "Databases" },
];

export default function Skills() {
  return (
    <div className="space-y-6">
      {groups.map(({ key, label }) => (
        <SkillGroup key={key} title={label} items={skills[key]} />
      ))}
    </div>
  );
}
