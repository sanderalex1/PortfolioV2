import javascriptIcon from "../../assets/javascript.svg";
import typescriptIcon from "../../assets/typescript.svg";
import reactIcon from "../../assets/react.svg";
import htmlIcon from "../../assets/html.svg";
import cssIcon from "../../assets/css.svg";
import tailwindIcon from "../../assets/tailwind.svg";
import nodejsIcon from "../../assets/nodejs.svg";
import postgresqlIcon from "../../assets/postgresql.svg";
import type { SkillsSection } from "./skillsTypes";

export const skills: SkillsSection = {
  eyebrow: "02 — Skills",
  title: "The tools I reach for.",
  description:
    "A focused stack I've sharpened over years of building products end-to-end.",
  items: [
    { name: "JavaScript", image: javascriptIcon },
    { name: "TypeScript", image: typescriptIcon },
    { name: "React", image: reactIcon },
    { name: "HTML", image: htmlIcon },
    { name: "CSS", image: cssIcon },
    { name: "Tailwind CSS", image: tailwindIcon },
    { name: "Node.js", image: nodejsIcon },
    { name: "PostgreSQL", image: postgresqlIcon },
  ],
};
