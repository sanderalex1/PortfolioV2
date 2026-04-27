// Selected work. Toggle `featured` to control what appears on the homepage.

import type { Project } from "./projectsTypes";

export const projects: Project[] = [
  {
    id: "relay",
    number: "01",
    title: "Relay",
    year: 2025,
    description: "A lightweight analytics dashboard for indie product teams.",
    tags: ["React", "TypeScript", "D3"],
    image: "/images/relay.jpg",
    imageAlt: "Relay dashboard with an upward trending line chart",
    featured: true,
  },
  {
    id: "atlas",
    number: "02",
    title: "Atlas",
    year: 2025,
    description:
      "Internal tooling platform for a logistics startup, built on a typed RPC stack.",
    tags: ["Next", "Postgres", "tRPC"],
    image: "/images/atlas.jpg",
    imageAlt: "Atlas color study with overlapping orange squares",
    featured: true,
  },
  {
    id: "field-notes",
    number: "03",
    title: "Field Notes",
    year: 2024,
    description:
      "A long-form publication platform with a focus on typography and reading experience.",
    tags: ["Remix", "MDX", "Tailwind"],
    image: "/images/field-notes.jpg",
    imageAlt: "Ornamental letterform 'g' on cream background",
    featured: true,
  },
  {
    id: "northwind-studio",
    number: "04",
    title: "Northwind Studio",
    year: 2023,
    description:
      "Marketing site and design system for an architecture studio in Porto.",
    tags: ["Astro", "GSAP", "Sanity"],
    image: "/images/northwind.jpg",
    imageAlt: "Line drawing of an architectural pavilion",
    featured: true,
  },
];

// Helper for the work section.
export const featuredProjects = projects.filter((p) => p.featured);
