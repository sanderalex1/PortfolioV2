export type ContactLink = {
  label: string;
  href: string;
};

export type Contact = {
  eyebrow: string;
  title: { lead: string; accent: string }; // "Let's build" + "something."
  email: string;
  links: ContactLink[];
};
