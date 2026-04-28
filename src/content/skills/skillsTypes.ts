export type Skill = {
  name: string;
  image: string;
};

export type SkillsSection = {
  eyebrow: string;
  title: string;
  description: string;
  items: Skill[];
};
