import type { Components, Theme } from "@mui/material/styles";

export const components: Components<Theme> = {
  MuiButton: {
    defaultProps: { disableElevation: true },
    styleOverrides: {
      root: { borderRadius: 4 },
    },
  },
  MuiCard: {
    styleOverrides: {
      root: { borderRadius: 4 },
    },
  },
  MuiTextField: {
    defaultProps: { variant: "outlined", size: "small" },
  },
};
