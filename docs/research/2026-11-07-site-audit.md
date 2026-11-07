# iltonandrew.com.br — site audit (2026-11-07)

Research input for the Astro rebuild. Sources: repo `iltonandrew/iltonandrew.com.br` (cloned to `~/engineering/iltonandrew.com.br`), live site, Lighthouse (mobile), curl probes, Astro docs.

## 1. What is live today

| Item | Value |
|---|---|
| Stack | Next.js 13.2 (pages router), Chakra UI 2, Emotion, framer-motion, `typewriter-effect`, custom `useTranslation` hook over two JSON files, `next-mdx-remote`, Vercel + Vercel Analytics |
| Repo | created 2020-12-21, 59 commits, last push 2025-09-09, public |
| Routes | `/` (pt-BR, unprefixed), `/en`, `/blog`, `/en/blog`, `/blog/[slug]` |
| Hosting | Vercel (`gru1` edge), `x-vercel-cache: HIT` |
| Design | dark by default (Chakra `gray.800` #1a202c), brand pink `#f652a0` + cyan `#00ffff`, Inter, chrome/pink 3D wordmark SVG (`public/fullname.svg`), hero photo of you DJing on a rooftop, light mode toggle exists |

### Page structure (`/en`)
1. Header: wordmark, "About me", "What I've done so far" (dropdown: Where I worked / Projects), "Get in touch" (mailto), flag language toggle, color-mode toggle, pink "Blog" button.
2. Hero: "Ilton Andrew" + typewriter (Engineer / Developer / I build things for the web_), one-line bio, two buttons (Where I worked / Get in touch), round DJ photo.
3. "My Professional Experience": 6 entries with logos (Media Hero · XP · Pipefy · XP intern · Amigos da Poli · Poli Júnior), each with a description and a "Worked with:" stack line.
4. "Side Projects": Gege Converter, Zoroscopo (both link out).
5. "Download Resume" button (PDF).
6. Footer: wordmark + 5 social icons.

## 2. What is broken or stale

- **Blog never shipped.** `/en/blog/hello-world` → 404 (the pt-BR slug works). The only post is a 2020 sample about `Array.reduce` with a YouTube embed; the English card shows a Portuguese summary; the card title is a `<Link>` with no `href`.
- **Content is stale.** Media Hero shows "February 2023 – Present". The EN CV PDF offered for download still lists XP Inc. (Aug 2022) as current job. 4 CV PDFs are shipped, 2 are unused.
- **Dead social links.** Twitter and YouTube footer icons point to `#`.
- **No SEO plumbing.** No `sitemap.xml`, `robots.txt`, RSS, canonical, or `hreflang` alternates between pt-BR and EN. `og:image` is a relative path to an 800×600 photo. Meta description is just "Portfolio & Blog".
- **Heavy for a static page.** 243 KB gzipped JS across 10 scripts; the hero photo is a 255 KB JPEG served through Chakra `Img` (no `next/image`, no responsive sizes).
- **Lighthouse mobile:** Accessibility 94, Best Practices 100, SEO 100. Failures: white-on-pink buttons at 3.16:1 contrast (need 4.5:1), grey bio text at 4.06:1, no `<main>` landmark.
- **Nav dropdown "Projects" item has no href.**
- README is the untouched create-next-app template.

## 3. What works and is worth keeping

- The identity: dark, pink/cyan, chrome wordmark, DJ photo. It is distinctive and already yours.
- The copy structure: EN and pt-BR key sets are in sync (`locales/*/common.json`), experience descriptions are well written and can be ported as-is, then updated.
- Company logos (`public/images/companies/`), flags, wordmark SVGs.
- URL scheme: pt-BR unprefixed, `/en` prefixed. Astro's default (`prefixDefaultLocale: false`) matches it exactly, so existing links keep working.

## 4. Prior art in your own GitHub

- `gege.codes` and `thebyte.blog` are both AstroPaper (Astro 4, Tailwind 3, fuse.js search, satori OG images). Good reference for what you already liked in an Astro blog; AstroPaper itself is single-language.
- `i18n-tailwind-nextjs-starter-blog` fork (2022) shows the bilingual-blog itch is old.
- Your GitHub profile README literally says: "planning on a new version using Astro 👀".

## 5. Astro, as of today

- Stable line is **Astro 6.x** (6.2 shipped 2026-04-30); 7.0 is in alpha (June 2026). Build on 6.
- **i18n routing is built in:** `i18n.locales`, `defaultLocale`, `routing.prefixDefaultLocale` (default `false`, matches the current URLs), `fallback`, `getRelativeLocaleUrl()`, `Astro.currentLocale`. Pages live in `src/pages/` for pt-BR and `src/pages/en/` for English.
- **Content Layer collections:** `src/content.config.ts` with `glob()` loader + Zod schema. Per-language posts go in `src/content/blog/pt-br/` and `src/content/blog/en/`; filter with `id.startsWith('en/')`. Untranslated posts can fall back to the other language or simply not appear.
- `@astrojs/sitemap` supports i18n locale maps (`hreflang`); `@astrojs/rss` gives one feed per language; `astro:assets` handles responsive images at build time.
- Zero JS by default. The typewriter and scroll-in animations are the only interactive bits today and both can be CSS.

## 6. Open decisions for the design conversation

1. Scope of the refresh: same page, new engine, updated content, or a rethink of what the home page says now that the job and the side projects have moved on.
2. What the blog is for and who reads it (decides tone, topics, whether every post is bilingual or posts can be single-language).
3. Visual direction: keep the pink/cyan/chrome identity or evolve it.
4. Analytics: Vercel Analytics today; PostHog is already in your toolbox.
5. Hosting stays on Vercel (static output works there with zero config) unless you want to move.
