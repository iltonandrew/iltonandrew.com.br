import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { join, relative, sep } from "node:path";
import { fileURLToPath } from "node:url";

export const ROOT = fileURLToPath(new URL("..", import.meta.url));
export const DIST = join(ROOT, "dist");
export const SITE = "https://iltonandrew.com.br";
export const BUILT = existsSync(DIST);
// Pass to describe(): reports "build first" instead of crashing when dist/ is missing.
export const SKIP = BUILT ? false : "dist/ missing - run `npx astro build` first";

export const dist = (p) => join(DIST, p);
export const has = (p) => existsSync(dist(p));
export const read = (p) => readFileSync(dist(p), "utf8");
export const size = (p) => statSync(dist(p)).size;
export const readHtml = (p) => (has(p) ? read(p) : "");

export const readJson = (p) => JSON.parse(readFileSync(join(ROOT, p), "utf8"));
export const copy = { "pt-BR": () => readJson("src/i18n/pt-BR.json"), en: () => readJson("src/i18n/en.json") };
export const LOCALES = ["pt-BR", "en"];
export const prefix = (l) => (l === "en" ? "/en" : "");

export function walk(dir = DIST) {
  if (!existsSync(dir)) return [];
  return readdirSync(dir, { withFileTypes: true }).flatMap((e) =>
    e.isDirectory() ? walk(join(dir, e.name)) : [join(dir, e.name)],
  );
}
export const rel = (abs) => relative(DIST, abs).split(sep).join("/");
export const htmlFiles = () => walk().filter((f) => f.endsWith(".html")).map(rel);

/** dist-relative html path -> URL path ("index.html" -> "/", "en/cv/index.html" -> "/en/cv"). */
export function urlOf(file) {
  const p = "/" + file.replace(/(^|\/)index\.html$/, "").replace(/\.html$/, "");
  return p.length > 1 ? p.replace(/\/$/, "") : "/";
}
export const langOf = (file) => (/^en(\/|$)/.test(file) ? "en" : "pt-BR");

/** Blog slugs per locale, from src/content/blog/<locale>/*.md */
export function slugs(locale) {
  const dir = join(ROOT, "src/content/blog", locale);
  return existsSync(dir) ? readdirSync(dir).filter((f) => f.endsWith(".md")).map((f) => f.slice(0, -3)) : [];
}
export const postFile = (l, slug) => join(ROOT, "src/content/blog", l, slug + ".md");
/** Tiny frontmatter reader: top-level `key: value` scalars only. */
export function frontmatter(l, slug) {
  const m = readFileSync(postFile(l, slug), "utf8").match(/^---\n([\s\S]*?)\n---/);
  const out = {};
  for (const line of (m?.[1] ?? "").split("\n")) {
    const k = line.match(/^(\w+):\s*(.*)$/);
    if (k) out[k[1]] = k[2].trim().replace(/^(["'])(.*)\1$/, "$2");
  }
  return out;
}

/** All attributes of every <tag ...> in html: [{attr: value}] */
export function tags(html, name) {
  const re = new RegExp(`<${name}(\\s[^>]*)?>`, "gi");
  return [...html.matchAll(re)].map((m) => {
    const attrs = {};
    for (const a of (m[1] ?? "").matchAll(/([^\s=/>]+)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+)))?/g))
      attrs[a[1].toLowerCase()] = a[2] ?? a[3] ?? a[4] ?? "";
    return attrs;
  });
}
export const metaContent = (html, key) =>
  tags(html, "meta").find((t) => t.name === key || t.property === key)?.content;
export const links = (html, rel) => tags(html, "link").filter((t) => t.rel === rel);
export const decode = (s) =>
  s.replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#39;|&#x27;/g, "'");
/** Plain text of html, entities decoded - for matching copy that may be escaped (e.g. "&amp;"). */
export const text = (html) => decode(html.replace(/<(script|style)[\s\S]*?<\/\1>/gi, "").replace(/<[^>]+>/g, " "));
export const count = (s, sub) => s.split(sub).length - 1;
