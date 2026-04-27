// Top-level site config — the bits you'll change most often.

import type { SiteConfig } from "./siteTypes";

export const site: SiteConfig = {
  name: "Jane Doe",
  shortName: "Jane Doe.",
  email: "hello@janedoe.dev",
  availability: {
    open: true,
    month: "May 2026",
  },
  social: {
    github: "https://github.com/janedoe",
    linkedin: "https://linkedin.com/in/janedoe",
    twitter: "https://twitter.com/janedoe",
    readcv: "https://read.cv/janedoe",
  },
  copyrightYear: 2026,
  builtYear: 2026,
};
