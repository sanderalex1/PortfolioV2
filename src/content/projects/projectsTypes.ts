export type Project = {
  id: string; // unique slug, used as React key
  number: string; // display number: "01", "02", ...
  title: string;
  year: number;
  description: string;
  tags: string[]; // tech chips
  image: string; // path under /public, e.g. "/images/relay.jpg"
  imageAlt: string;
  url?: string; // optional case study or live link
  featured: boolean; // show on homepage selected work
};
