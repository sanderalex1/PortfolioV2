// Selected work. Toggle `featured` to control what appears on the homepage.

import type { Project } from "./projectsTypes";

export const projects: Project[] = [
  {
    id: "song-guessing-game",
    number: "01",
    title: "Song Guessing Game",
    year: 2026,
    description:
      "A real-time multiplayer song guessing game. Players join rooms, listen to song previews from Deezer, and compete to guess the correct title.",
    tags: ["React", "TypeScript", "Socket.io", "Express", "PostgreSQL"],
    image: "/songGuessingGame.png",
    imageAlt: "Song guessing game landing page image",
    featured: true,
  },
  {
    id: "job-tracker",
    number: "02",
    title: "Job Tracker",
    year: 2026,
    description:
      "A full-stack app for tracking job applications with a React frontend and REST API backend.",
    tags: ["React", "TypeScript", "MUI", "Express", "PostgreSQL"],
    image: "/JobTracker.png",
    imageAlt: "Job Tracker landing page image",
    featured: true,
  },
  {
    id: "recipe-book",
    number: "03",
    title: "Recipe Book",
    year: 2025,
    description:
      "A recipe browsing and management app built with React and Material UI.",
    tags: ["React", "JavaScript", "MUI", "React Router"],
    image: "/RecipeBook.png",
    imageAlt: "Recipe book landing page image",
    featured: true,
  },
  {
    id: "memory-game",
    number: "04",
    title: "Memory Game",
    year: 2025,
    description:
      "A classic card-flipping memory game built with vanilla React adn JavaScript.",
    tags: ["React", "JavaScript", "Vite"],
    image: "/MemoryGame.png",
    imageAlt: "Memory game landing page image",
    featured: true,
  },
];

// Helper for the work section.
export const featuredProjects = projects.filter((p) => p.featured);
