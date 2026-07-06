import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://sudjairakc.github.io",
  base: "/portfolio/",
  i18n: {
    locales: ["en", "th"],
    defaultLocale: "en",
    routing: {
      prefixDefaultLocale: false,
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
