import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { SKIP, SITE, copy, readHtml, htmlFiles, urlOf, langOf, links, tags, text } from "./helpers.mjs";

const keys = (o, p = "") =>
  Object.entries(o).flatMap(([k, v]) => (v && typeof v === "object" ? keys(v, `${p}${k}.`) : [`${p}${k}`])).sort();

describe("i18n", { skip: SKIP }, () => {
  it("en.json and pt-BR.json have identical key trees", () =>
    assert.deepEqual(keys(copy.en()), keys(copy["pt-BR"]())));

  for (const f of htmlFiles()) {
    const html = readHtml(f);
    const lang = langOf(f);
    it(`${f}: html lang`, () => {
      if (f === "404.html") return assert.match(html, /<html[^>]*\slang="(pt-BR|en)"/);
      assert.match(html, new RegExp(`<html[^>]*\\slang="${lang}"`));
    });
    if (f === "404.html") continue;
    const url = urlOf(f);
    const abs = SITE + url;
    it(`${f}: hreflang alternates + canonical`, () => {
      const alts = links(html, "alternate").filter((l) => l.hreflang);
      for (const h of ["pt-BR", "en", "x-default"]) {
        const a = alts.find((l) => l.hreflang === h);
        assert.ok(a, `missing hreflang=${h}`);
        assert.ok(a.href.startsWith(SITE + "/") || a.href === SITE, `${h} href not absolute: ${a.href}`);
      }
      const canon = links(html, "canonical");
      assert.equal(canon.length, 1);
      assert.equal(canon[0].href, abs);
    });
  }

  // Copy appears in the right language only.
  const pairs = [
    ["", "work.title", (c) => c.work.title, "index.html", "en/index.html"],
    ["", "blog.title", (c) => c.blog.title, "blog/index.html", "en/blog/index.html"],
    ["", "cv.title", (c) => c.cv.title, "cv/index.html", "en/cv/index.html"],
  ];
  for (const [, name, get, ptPath, enPath] of pairs) {
    const pt = get(copy["pt-BR"]()), en = get(copy.en());
    it(`${name}: pt-BR page has pt, not en`, () => {
      const t = text(readHtml(ptPath));
      assert.ok(t.includes(pt));
      if (!pt.includes(en) && !en.includes(pt)) assert.ok(!t.includes(en));
    });
    it(`${name}: en page has en, not pt-BR`, () => {
      const t = text(readHtml(enPath));
      assert.ok(t.includes(en));
      if (!pt.includes(en) && !en.includes(pt)) assert.ok(!t.includes(pt));
    });
  }
});
