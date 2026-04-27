import type { TypographyVariantsOptions } from "@mui/material/styles";

const fraunces = (fontWeight: number, italic = false) => ({
  fontFamily: '"Fraunces", "Times New Roman", serif',
  fontWeight,
  fontStyle: italic ? "italic" : "normal",
  fontVariationSettings: '"SOFT" 50, "WONK" 1',
});

export const typography: TypographyVariantsOptions = {
  fontFamily: '"Inter", ui-sans-serif, system-ui, sans-serif',
  h1: fraunces(700),
  h2: fraunces(700),
  h3: fraunces(600),
  h4: fraunces(600),
  h5: fraunces(500),
  h6: fraunces(400, true),
  button: { textTransform: "none", fontWeight: 600 },
};
