import type { PaletteMode, PaletteOptions } from "@mui/material";

export const getPalette = (mode: PaletteMode): PaletteOptions => ({
  mode,
  primary: {
    main: mode === "light" ? "hsl(20, 14%, 8%)" : "hsl(40, 20%, 96%)",
    contrastText: mode === "light" ? "hsl(20, 14%, 6%)" : "hsl(40, 20%, 98%)",
  },
  secondary: {
    main: mode === "light" ? "hsl(40, 15%, 94%)" : "hsl(24, 10%, 12%)",
    contrastText: mode === "light" ? "hsl(20, 14%, 8%)" : "hsl(40, 20%, 96%)",
  },
  error: {
    main: mode === "light" ? "hsl(0, 70%, 45%)" : "hsl(0, 70%, 50%)",
    contrastText: mode === "light" ? "hsl(40, 20%, 98%)" : "hsl(40, 20%, 96%)",
  },
  background: {
    default: mode === "light" ? "hsl(30, 50%, 96%)" : "hsl(30, 13%, 6%)",
    paper: mode === "light" ? "hsl(40, 20%, 98%)" : "hsl(20, 14%, 8%)",
  },
  text: {
    primary: mode === "light" ? "hsl(20, 14%, 8%)" : "hsl(40, 20%, 96%)",
    secondary: mode === "light" ? "hsl(25, 8%, 42%)" : "hsl(30, 8%, 62%)",
  },
  accentButton: {
    primary: mode === "light" ? "black" : "white",
    secondary: mode === "light" ? "white" : "black",
  },
  divider: mode === "light" ? "hsl(30, 10%, 88%)" : "hsl(24, 8%, 18%)",
});

export const skillColors: Record<string, string> = {
  JavaScript: "#F7DF1E",
  TypeScript: "#3178C6",
  React: "#61DAFB",
  HTML: "#E34F26",
  CSS: "#1572B6",
  "Tailwind CSS": "#06B6D4",
  "Node.js": "#339933",
  PostgreSQL: "#4169E1",
  MUI: "#007FFF",
  Vite: "#646CFF",
  "React Router": "#CA4245",
  Express: "#68A063",
  "Socket.io": "#010101",
  Figma: "#F24E1E",
};
