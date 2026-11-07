import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { SKIP, readHtml, htmlFiles, tags, metaContent, count } from "./helpers.mjs";

describe("a11y", { skip: SKIP }, () => {
  for (const f of htmlFiles()) {
    const html = readHtml(f);
    const is404 = f === "404.html";
    it(`${f}: structure`, () => {
      assert.equal(count(html, "<main"), 1, "<main count");
      const h1 = (html.match(/<h1[\s>]/g) ?? []).length;
      assert.ok(is404 ? h1 >= 1 && h1 <= 2 : h1 === 1, `<h1 count ${h1}`);
      assert.ok(tags(html, "img").every((i) => "alt" in i), "img without alt");
      assert.match(html, /<title[^>]*>\s*\S[\s\S]*?<\/title>/);
      assert.ok(metaContent(html, "description")?.trim(), "meta description");
      assert.ok(tags(html, "meta").some((m) => m.name === "viewport"), "viewport");
    });
  }
});
