import type { PaletteMode, PaletteOptions } from "@mui/material";

export const getPalette = (mode: PaletteMode): PaletteOptions => ({
  mode,
  primary: {
    main: "#1976d2",
  },
  background: {
    default: mode === "light" ? "#f5f5f5" : "#0f0f0f",
    paper: mode === "light" ? "#ffffff" : "#1a1a1a",
  },
  text: {
    primary: mode === "light" ? "#111111" : "#f0f0f0",
    secondary: mode === "light" ? "#555555" : "#aaaaaa",
  },
});
