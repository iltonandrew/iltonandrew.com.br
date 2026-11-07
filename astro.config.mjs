// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://iltonandrew.com.br",
  trailingSlash: "never",
  i18n: {
    defaultLocale: "pt-BR",
    locales: ["pt-BR", "en"],
    // pt-BR stays unprefixed (/), English under /en — same URLs as the old site.
    routing: { prefixDefaultLocale: false },
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: "pt-BR",
        locales: { "pt-BR": "pt-BR", en: "en" },
      },
    }),
  ],
});
