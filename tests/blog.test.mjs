import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { SKIP, SITE, LOCALES, prefix, slugs, frontmatter, readHtml, read, has, tags, text } from "./helpers.mjs";

const idx = (l) => (l === "en" ? "en/blog/index.html" : "blog/index.html");

describe("blog", { skip: SKIP }, () => {
  for (const l of LOCALES) {
    const other = LOCALES.find((x) => x !== l);
    for (const s of slugs(l)) {
      const fm = frontmatter(l, s);
      it(`${l}/${s}: linked from index`, () =>
        assert.ok(tags(readHtml(idx(l)), "a").some((a) => a.href === `${prefix(l)}/blog/${s}`)));
      it(`${l}/${s}: page has title`, () =>
        assert.ok(text(readHtml(`${prefix(l)}/blog/${s}/index.html`.replace(/^\//, ""))).includes(fm.title)));
      it(`${l}/${s}: summary not in ${other} index`, () => {
        const o = frontmatter(other, s)?.summary;
        if (!fm.summary || (slugs(other).includes(s) && o === fm.summary)) return; // identical copy, nothing to assert
        assert.ok(!text(readHtml(idx(other))).includes(fm.summary));
      });
      it(`${l}: rss links post`, () => {
        const xml = has(l === "en" ? "en/rss.xml" : "rss.xml") ? read(l === "en" ? "en/rss.xml" : "rss.xml") : "";
        assert.match(xml, /^\s*<\?xml/);
        assert.ok(xml.includes(`<link>${SITE}${prefix(l)}/blog/${s}</link>`));
      });
    }
  }
  it("sitemap-0.xml lists both homes and hreflang alternates", () => {
    const x = has("sitemap-0.xml") ? read("sitemap-0.xml") : "";
    assert.ok(x.includes(`<loc>${SITE}/</loc>`), "pt-BR home");
    assert.ok(x.includes(`<loc>${SITE}/en</loc>`), "en home");
    assert.match(x, /<xhtml:link[^>]*hreflang=/);
  });
});
