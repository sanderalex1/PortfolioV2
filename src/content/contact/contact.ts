// The closing contact block. Most fields here pull from site.ts so you
// don't duplicate your email or socials.

import type { Contact } from "./contactTypes";

import { site } from "../site/site";

export const contact: Contact = {
  eyebrow: "04 — Contact",
  title: { lead: "Let's build", accent: "something." },
  email: site.email,
  links: [
    { label: "GitHub", href: site.social.github ?? "#" },
    { label: "LinkedIn", href: site.social.linkedin ?? "#" },
    { label: "Twitter", href: site.social.twitter ?? "#" },
    { label: "Read.cv", href: site.social.readcv ?? "#" },
  ].filter((l) => l.href !== "#"), // drop any unset links
};
