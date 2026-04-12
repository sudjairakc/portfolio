# CLAUDE.md — Portfolio

> Context for Claude Code when working in this repo.

## Stack

| Layer | Technology |
|---|---|
| Framework | **Astro 5** (static site, islands architecture) |
| Styling | **Tailwind CSS v4** (CSS-first, no config file) |
| Animations | **lottie-web** (vanilla JS, not lottie-react) |
| Icons | Font Awesome 6 + Devicon via CDN |
| Language | TypeScript |
| Deploy | GitHub Actions → GitHub Pages (`gh-pages` branch) |

## Project Structure

```
src/
  data/
    portfolio.ts       ← All personal content lives here. Edit this to update the site.
  utils/
    date.ts            ← getYear() helper
  styles/
    global.css         ← Tailwind import, CSS custom properties, utility classes
  layouts/
    Layout.astro       ← HTML shell, dark mode init script, Font Awesome 6 + Devicon CDN
  components/
    Header.astro       ← Sticky nav + mobile menu + dark mode toggle
    Footer.astro
    SplashScreen.astro ← Full-screen loader (2 s, then fades out)
    LottiePlayer.astro ← Renders a lottie JSON from public/lottie/ via path
    ThemeToggle.astro  ← Pill toggle button, persists to localStorage
    SocialMedia.astro  ← Social icon row driven by portfolio.ts
    sections/
      Greeting.astro
      Skills.astro
      Education.astro
      WorkExperience.astro
      Projects.astro
      Contact.astro
  pages/
    index.astro        ← Assembles all sections; scroll-to-top button
public/
  images/              ← Company/school logos (PNG)
  lottie/              ← Lottie JSON files (loading, sitPerson, reactDev, email)
  favicon.png + apple-touch-icon.png
```

## Dark Mode

- Driven by `html.dark` class (set/toggled by `ThemeToggle.astro`).
- Persisted to `localStorage.isDark`.
- An inline `<script is:inline>` in `Layout.astro` reads localStorage **before paint** to avoid flash of wrong theme.
- All theme-aware colours use CSS custom properties: `var(--bg)`, `var(--text)`, `var(--card-bg)`, etc. Defined in `global.css`.
- Tailwind dark variant: `@custom-variant dark (&:where(.dark, .dark *))`.

## Tailwind v4 Notes

- No `tailwind.config.js`. Configuration is in `src/styles/global.css` using `@theme`.
- Design tokens declared under `@theme` become utility classes (e.g. `--color-primary` → `bg-primary`, `text-primary`).
- Plugin is `@tailwindcss/vite` registered in `astro.config.mjs`.

## Updating Content

**All personal content** is in [`src/data/portfolio.ts`](src/data/portfolio.ts).

- Change greeting, social links, skills, education, work experience, or projects there.
- Image filenames reference files in `public/images/`. Add new images there.
- Lottie animations reference files in `public/lottie/`. Add new ones there.

## Adding a New Section

1. Create `src/components/sections/MySection.astro`.
2. Import data from `src/data/portfolio.ts`.
3. Add it to `src/pages/index.astro`.
4. Optionally add a nav link in `src/components/Header.astro`.

## LottiePlayer Usage

```astro
<LottiePlayer src="lottie/myAnimation.json" class="w-64 h-64" />
```

- `src` is relative to `public/` (no leading `/`).
- The component prepends `import.meta.env.BASE_URL` automatically.

## Scroll Animations

Add class `reveal`, `reveal-left`, or `reveal-right` to any element. An `IntersectionObserver` in `Layout.astro` adds `.visible` when the element enters the viewport, triggering a CSS fade-in.

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
