export type Availability = {
  open: boolean;
  month: string; // e.g. "May 2026"
};

export type SocialLinks = {
  github?: string;
  linkedin?: string;
  twitter?: string;
  readcv?: string;
};

export type SiteConfig = {
  email: string;
  social: SocialLinks;
  copyrightYear: number;
  builtYear: number;
};
