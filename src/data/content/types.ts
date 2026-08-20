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

export interface ProjectLink {
  label: string;
  href: string;
}

export interface Project {
  /** Logo in public/images/. Omit to fall back to `icon`. */
  image?: string;
  /** Font Awesome class used when there is no logo. */
  icon?: string;
  projectName: string;
  descBullets: string[];
  links?: ProjectLink[];
  /** Shown when a project has no public link (client work under NDA). */
  privateNote?: string;
}

export interface AiStat {
  value: string;
  label: string;
}

export interface AiPractice {
  name: string;
  desc: string;
}

export interface AiSection {
  eyebrow: string;
  headingPre: string;
  headingEm: string;
  headline: string;
  intro: string;
  stackLabel: string;
  stack: string[];
  practicesLabel: string;
  practices: AiPractice[];
  stats: AiStat[];
  /** Honest note on what an outsider can and cannot inspect. */
  note: string;
}

export interface ProofPoint {
  value: string;
  label: string;
}

export interface CaseStudyStep {
  step: string;
  title: string;
  body: string;
}

export interface CaseStudy {
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  titlePre: string;
  titleEm: string;
  standfirst: string;
  factsLabel: string;
  facts: {label: string; value: string}[];
  outcomesLabel: string;
  outcomes: ProofPoint[];
  steps: CaseStudyStep[];
  takeawayLabel: string;
  takeaways: string[];
  disclosureLabel: string;
  disclosure: string;
  backLabel: string;
  contactCta: string;
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

  /** Three verifiable outcomes, shown directly under the hero. */
  proof: {
    eyebrow: string;
    heading: string;
    items: ProofPoint[];
    caseStudyCta: string;
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
    caseStudyCta: string;
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

  caseStudy: CaseStudy;

  contact: {
    eyebrow: string;
    headingPre: string;
    headingEm: string;
    subtitle: string;
    emailBtn: string;
    email: string;
    phoneLabel: string;
    phone: string;
  };

  footer: {
    role: string;
    projectHub: string;
    copyright: string;
  };
}
