/* Locale-aware URL builder. `th` lives under /th/, `en` sits at the root. */

export function localePath(locale: string | undefined, path = ""): string {
  const base = import.meta.env.BASE_URL; // "/portfolio/"
  const prefix = locale === "th" ? "th/" : "";
  return `${base}${prefix}${path.replace(/^\//, "")}`;
}

export const caseStudySlug = "case-study/model-catalogue/";
