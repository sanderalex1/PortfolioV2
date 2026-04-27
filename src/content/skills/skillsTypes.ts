export type SkillLevel = "Expert" | "Advanced" | "Intermediate" | "Familiar";

export type Skill = {
  name: string;
  level: SkillLevel;
};

export type SkillsSection = {
  eyebrow: string; // "02 — SKILLS"
  title: string;
  description: string;
  items: Skill[];
};
