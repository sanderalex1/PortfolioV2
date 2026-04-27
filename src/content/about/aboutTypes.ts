export type AboutPanel = {
  currently: string;
  basedIn: string;
  toolkit: string[];
};

export type About = {
  eyebrow: string;
  title: string;
  paragraphs: string[]; // each item renders as a <p>
  panel: AboutPanel;
};
