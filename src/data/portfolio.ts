/* Shared (locale-independent) config + i18n content resolver.
   Localized copy lives in ./content/{en,th}.ts — edit those for text. */

import {en} from "./content/en";
import {th} from "./content/th";
import type {Content} from "./content/types";

// ─── Locales ──────────────────────────────────────────────────────────────────

export type Lang = "en" | "th";
export const defaultLang: Lang = "en";

export const languages: {code: Lang; label: string}[] = [
  {code: "en", label: "EN"},
  {code: "th", label: "ไทย"}
];

const content: Record<Lang, Content> = {en, th};

/** Resolve localized content for a locale (falls back to default). */
export function getContent(locale: string | undefined): Content {
  return content[(locale as Lang) in content ? (locale as Lang) : defaultLang];
}

// ─── Splash Screen ────────────────────────────────────────────────────────────

export const splashScreen = {
  enabled: true,
  duration: 2000
};

// ─── Social Media (locale-independent) ─────────────────────────────────────────

export const socialMediaLinks = {
  github: "https://github.com/sudjairakc",
  linkedin: "https://www.linkedin.com/in/chaichana-sudjairak/",
  gmail: "sudjairak.c@gmail.com",
  gitlab: "https://gitlab.com/sudjairakc",
  facebook: "https://www.facebook.com/chaichana.sudjairak"
};

// ─── Tech stack (icons + names — language-neutral) ─────────────────────────────

export const softwareSkills = [
  // Frontend & Mobile
  {
    skillName: "JavaScript (ES6+)",
    iconClass: "devicon-javascript-plain colored"
  },
  {skillName: "TypeScript", iconClass: "devicon-typescript-plain colored"},
  {skillName: "React.js", iconClass: "devicon-react-original colored"},
  {skillName: "React Native", iconClass: "devicon-react-original colored"},
  {skillName: "Next.js", iconClass: "devicon-nextjs-plain"},
  // Backend & DB
  {skillName: "Node.js", iconClass: "devicon-nodejs-plain colored"},
  {skillName: "Golang", iconClass: "devicon-go-plain colored"},
  {skillName: "PostgreSQL", iconClass: "devicon-postgresql-plain colored"},
  {skillName: "MariaDB", iconClass: "devicon-mariadb-plain colored"},
  {skillName: "MongoDB", iconClass: "devicon-mongodb-plain colored"},
  {skillName: "Redis", iconClass: "devicon-redis-plain colored"},
  // DevOps & Infra
  {skillName: "Docker", iconClass: "devicon-docker-plain colored"},
  {skillName: "AWS", iconClass: "devicon-amazonwebservices-plain colored"},
  {skillName: "Git", iconClass: "devicon-git-plain colored"},
  {skillName: "GitLab", iconClass: "devicon-gitlab-plain colored"},
  // Testing & Tools
  {skillName: "Postman", iconClass: "devicon-postman-plain colored"}
];

// Hero tech chips (language-neutral).
export const heroChips = [
  "React",
  "React Native",
  "Node.js",
  "TypeScript",
  "Go",
  "Next.js"
];

// ─── Misc ─────────────────────────────────────────────────────────────────────

export const isHireable = true;
