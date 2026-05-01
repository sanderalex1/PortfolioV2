import "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    accentButton: {
      primary: string;
      secondary: string;
    };
  }
  interface PaletteOptions {
    accentButton?: {
      primary: string;
      secondary: string;
    };
  }
}
