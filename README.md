# iltonandrew.com.br

Personal site of Ilton Andrew: home, blog and résumé, in Portuguese and English. Static Astro 7 site deployed on Vercel.

## Commands

| Command | What it does |
| --- | --- |
| `npm run dev` | Dev server |
| `npm run build` | Static build to `dist/` |
| `npm run preview` | Serve the build |
| `npm run check` | `astro check` (types + templates) |
| `npm test` | Node test runner over `tests/` (needs a built `dist/`) |
| `npm run verify` | Build, then test |
| `npm run cv:pdf` | Build to a temp dir and regenerate `public/resumes/*.pdf` from the CV pages with headless Chrome |

## Content

- **Copy**: `src/i18n/pt-BR.json` and `src/i18n/en.json`. Keep both files in sync. Résumé content lives under `cv.*` and `work.*`.
- **Blog posts**: `src/content/blog/<locale>/<slug>.md` (`pt-BR` or `en`). To add one, create the file with this frontmatter (schema in `src/content.config.ts`):

  ```md
  ---
  title: "Post title"
  summary: "One-line summary"
  date: 2026-01-31
  tags: [astro]        # optional, default []
  image: ./cover.jpg   # optional, local image or absolute URL
  draft: false         # optional, default false
  ---
  ```

- **PDFs**: after changing résumé copy or the CV styles, run `npm run cv:pdf` and commit the updated PDFs.

## Locales and URLs

pt-BR is the default and unprefixed; English is prefixed with `/en`.

| Page | pt-BR | en |
| --- | --- | --- |
| Home | `/` | `/en` |
| Blog | `/blog` | `/en/blog` |
| CV | `/cv` | `/en/cv` |

There is a single bilingual `404.html`.
