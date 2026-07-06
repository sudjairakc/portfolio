/* Shared shape for every locale. en.ts is authoritative; th.ts mirrors it. */

export interface School {
  schoolName: string;
  logo: string;
  subHeader: string;
  duration: string;
  desc: string;
  descBullets: string[];
}

export interface WorkExperience {
  role: string;
  company: string;
  companyLogo: string;
  link?: string;
  date: string;
  descBullets?: string[];
  desc?: string;
}

export interface Project {
  image: string;
  projectName: string;
  descBullets: string[];
}

export interface AiStat {
  value: string;
  label: string;
}

export interface AiModel {
  name: string;
  vendor: string;
  autonomous?: boolean;
}

export interface AiTierItem {
  name: string;
  desc: string;
}

export interface AiTier {
  rank: "specialist" | "advanced" | "baseline";
  tag: string;
  note: string;
  title: string;
  items: AiTierItem[];
}

export interface AiSection {
  eyebrow: string;
  headingPre: string;
  headingEm: string;
  headline: string;
  intro: string;
  modelsLabel: string;
  ladderLabel: string;
  rarerLabel: string;
  stats: AiStat[];
  models: AiModel[];
  tiers: AiTier[];
}

export interface Content {
  meta: {title: string; description: string};

  nav: {
    skills: string;
    experience: string;
    ai: string;
    projects: string;
    contact: string;
    projectHub: string;
    viewGithub: string;
  };

  hero: {
    badge: string;
    greetingPre: string;
    greetingName: string;
    greetingPost: string;
    subTitle: string;
    resumeBtn: string;
    githubBtn: string;
    contactBtn: string;
    resumeLink: string;
    cardRole: string;
    stats: string[];
  };

  skills: {
    eyebrow: string;
    headingPre: string;
    headingEm: string;
    subTitle: string;
    whatIBring: string;
    techIReach: string;
    items: string[];
  };

  education: {
    eyebrow: string;
    headingPre: string;
    headingEm: string;
    sub: string;
    schools: School[];
  };

  experience: {
    eyebrow: string;
    headingPre: string;
    headingEm: string;
    sub: string;
    items: WorkExperience[];
  };

  ai: AiSection;

  projects: {
    eyebrow: string;
    headingPre: string;
    headingEm: string;
    subtitle: string;
    items: Project[];
  };

  contact: {
    eyebrow: string;
    headingPre: string;
    headingEm: string;
    subtitle: string;
    emailBtn: string;
    email: string;
    phone: string;
  };

  footer: {
    role: string;
    projectHub: string;
    copyright: string;
  };
}
