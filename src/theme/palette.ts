import type { PaletteMode, PaletteOptions } from "@mui/material";

export const getPalette = (mode: PaletteMode): PaletteOptions => ({
  mode,
  primary: {
    main: mode === "light" ? "hsl(20, 14%, 8%)" : "hsl(40, 20%, 96%)",
    contrastText: mode === "light" ? "hsl(40, 20%, 98%)" : "hsl(20, 14%, 6%)",
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
    default: mode === "light" ? "hsl(40, 20%, 98%)" : "hsl(20, 14%, 6%)",
    paper: mode === "light" ? "hsl(40, 20%, 98%)" : "hsl(20, 14%, 8%)",
  },
  text: {
    primary: mode === "light" ? "hsl(20, 14%, 8%)" : "hsl(40, 20%, 96%)",
    secondary: mode === "light" ? "hsl(25, 8%, 42%)" : "hsl(30, 8%, 62%)",
  },
  divider: mode === "light" ? "hsl(30, 10%, 88%)" : "hsl(24, 8%, 18%)",
});
