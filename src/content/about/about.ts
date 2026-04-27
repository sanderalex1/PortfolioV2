// The about section — long copy + side panel facts.

import type { About } from "./aboutTypes";

export const about: About = {
  eyebrow: "03 — About",
  title: "A developer who treats the web like a craft.",
  paragraphs: [
    "I'm a web developer with eight years of experience building products for startups and studios across Europe. My work sits at the intersection of design and engineering — I care equally about how something feels and how it's built.",
    "Outside of client work I write about interface craft, contribute to open source, and collect old typography books. Currently based in Lisbon, working remotely with teams worldwide.",
  ],
  panel: {
    currently: "Independent — freelance & collaborations",
    basedIn: "Lisbon, Portugal",
    toolkit: [
      "TypeScript",
      "React",
      "Next.js",
      "Node.js",
      "Tailwind CSS",
      "PostgreSQL",
      "Figma",
      "Vite",
    ],
  },
};
