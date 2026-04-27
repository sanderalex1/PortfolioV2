import type { TypographyVariantsOptions } from "@mui/material/styles";

const fraunces = (fontWeight: number) => ({
  fontFamily: '"Fraunces", "Times New Roman", serif',
  fontWeight,
  fontVariationSettings: '"SOFT" 50, "WONK" 1',
});

export const typography: TypographyVariantsOptions = {
  fontFamily: '"Inter", ui-sans-serif, system-ui, sans-serif',
  h1: fraunces(700),
  h2: fraunces(700),
  h3: fraunces(600),
  h4: fraunces(600),
  h5: fraunces(500),
  h6: { fontWeight: 500 },
  button: { textTransform: "none", fontWeight: 600 },
};
