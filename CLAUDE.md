# CLAUDE.md — Portfolio

> Context for Claude Code when working in this repo.

## Stack

| Layer | Technology |
|---|---|
| Framework | **Astro 5** (static site, islands architecture) |
| Styling | **Tailwind CSS v4** (CSS-first, no config file) |
| Icons | Font Awesome 6 + Devicon via CDN |
| Language | TypeScript |
| Deploy | GitHub Actions → GitHub Pages (`gh-pages` branch) |

## Project Structure

```
src/
  data/
    portfolio.ts       ← Locale-independent config (socials, tech stack) + getContent()
    content/
      types.ts         ← Content interface. en.ts is authoritative; th.ts mirrors it.
      en.ts / th.ts    ← ALL copy lives here. Edit these to update the site.
  utils/
    date.ts            ← getYear() helper
    path.ts            ← localePath() + caseStudySlug for locale-aware URLs
  styles/
    global.css         ← Tailwind import, CSS custom properties, utility classes
  layouts/
    Layout.astro       ← HTML shell, dark-mode init, og/JSON-LD meta, reveal observer
  components/
    Navbar.astro       ← Fixed pill nav, mobile menu, language switcher, theme toggle
    Hero.astro         ← Greeting, badge, CTAs, socials, tech card
    ProofStrip.astro   ← Three outcome cards under the hero + case-study link
    HomeContent.astro  ← Assembles the home page sections; scroll-to-top button
    CaseStudyContent.astro ← Shared body for the case-study route
    Footer.astro
    sections/
      Skills.astro
      Education.astro
      WorkExperience.astro
      AICollaboration.astro
      Projects.astro
      Contact.astro
  pages/
    index.astro                        ← en home
    th/index.astro                     ← th home
    case-study/model-catalogue.astro   ← en case study
    th/case-study/model-catalogue.astro
public/
  images/              ← Company/school/project logos (PNG)
  og-image.png         ← 1200×630 social card (regenerate with rsvg-convert)
  favicon.png + apple-touch-icon.png + manifest.json + robots.txt
```

## Dark Mode

- Driven by `html.dark` class (set/toggled by the theme button in `Navbar.astro`).
- Persisted to `localStorage.isDark`.
- An inline `<script is:inline>` in `Layout.astro` reads localStorage **before paint** to avoid flash of wrong theme.
- All theme-aware colours use CSS custom properties: `var(--bg)`, `var(--text)`, `var(--card-bg)`, etc. Defined in `global.css`.
- Tailwind dark variant: `@custom-variant dark (&:where(.dark, .dark *))`.

## Tailwind v4 Notes

- No `tailwind.config.js`. Configuration is in `src/styles/global.css` using `@theme`.
- Design tokens declared under `@theme` become utility classes (e.g. `--color-primary` → `bg-primary`, `text-primary`).
- Plugin is `@tailwindcss/vite` registered in `astro.config.mjs`.

## Updating Content

**All copy** is in [`src/data/content/en.ts`](src/data/content/en.ts) and
[`src/data/content/th.ts`](src/data/content/th.ts). Both must satisfy
[`types.ts`](src/data/content/types.ts) — `en.ts` defines the shape, `th.ts` mirrors it,
so adding a field means editing all three or the build fails.

Locale-independent config (social links, tech-stack icons, hero chips) stays in
[`src/data/portfolio.ts`](src/data/portfolio.ts).

- Image filenames reference files in `public/images/`. Add new images there.
- A project with no `image` falls back to its `icon` (Font Awesome class).
- Projects with no public URL use `privateNote` instead of `links`.

### Claims discipline

Numbers on this site are ratios and counts of James's own work. Employer revenue,
currency amounts, carrier names, table names, and raw record counts stay out — see the
`disclosure` field in the case-study content. Don't reintroduce them.

## Adding a New Section

1. Add the fields to `Content` in `src/data/content/types.ts`.
2. Fill them in **both** `en.ts` and `th.ts`.
3. Create `src/components/sections/MySection.astro`, reading
   `getContent(Astro.currentLocale)`.
4. Add it to `src/components/HomeContent.astro` (shared by both locales).
5. Optionally add a nav link in `src/components/Navbar.astro` — section links there are
   absolute (`${homeHref}#id`) so they also work from the case-study subpages.

## Adding a New Page

Create the route twice — `src/pages/foo.astro` and `src/pages/th/foo.astro` — both
rendering one shared body component, the way the case study does. Build locale-aware
links with `localePath()` from `src/utils/path.ts`; never hardcode `/portfolio/`.

## Scroll Animations

Add class `reveal`, `reveal-left`, or `reveal-right` to any element. An
`IntersectionObserver` in `Layout.astro` adds **`.is-visible`** when the element enters
the viewport, triggering a CSS fade-in. Elements start at `opacity: 0`, so anything
rendered outside that observer's reach stays invisible.

## Social Card

`public/og-image.png` is 1200×630 and referenced as an absolute URL via `Astro.site`.
It is generated from an SVG with `rsvg-convert -w 1200 -h 630 og.svg -o public/og-image.png`.
Regenerate it whenever the headline role or the proof points change.

## Local Development

```bash
npm install
npm run dev        # http://localhost:4321/portfolio/
npm run build      # Output → dist/
npm run preview    # Preview dist/ locally
```

## Deploy

Push to `master` → GitHub Actions builds and pushes `dist/` to the `gh-pages` branch automatically.

Live site: **https://sudjairakc.github.io/portfolio**

The `base` in `astro.config.mjs` is `"portfolio"`. Do not change this without also updating the GitHub Pages settings.

### GitHub Pages Settings (important)

In repo **Settings → Pages → Build and deployment**:
- **Source** must be set to **"Deploy from a branch"**
- **Branch** must be **`gh-pages`** / `/ (root)`

Do NOT set Source to "GitHub Actions" — that triggers Jekyll and will fail on `.astro` files.
The actual build is handled by `.github/workflows/deploy.yml`, which pushes `dist/` to `gh-pages`.

### Prettier / Formatting

- Run `npm run format` before committing after editing any `.astro`, `.ts`, or `.css` file.
- `prettier-plugin-astro` is required and declared in `.prettierrc` — do not remove it.
- `dist/` and `.astro/` are excluded via `.gitignore` (which Prettier uses as its ignore path).
