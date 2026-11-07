import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { SKIP, SITE, has, read, readHtml, htmlFiles, metaContent, langOf } from "./helpers.mjs";

describe("seo", { skip: SKIP }, () => {
  it("robots.txt points at sitemap-index", () =>
    assert.ok((has("robots.txt") ? read("robots.txt") : "").includes(`Sitemap: ${SITE}/sitemap-index.xml`)));

  for (const f of htmlFiles()) {
    const html = readHtml(f);
    it(`${f}: open graph + twitter`, () => {
      for (const k of ["og:title", "og:description"]) assert.ok(metaContent(html, k)?.trim(), k);
      // Post images may be external (e.g. Unsplash); any absolute https URL is valid.
      assert.match(metaContent(html, "og:image") ?? "", /^https:\/\//, "og:image absolute");
      assert.match(metaContent(html, "og:locale") ?? "", /^(pt_BR|en_US|en)$/);
      assert.ok(metaContent(html, "twitter:card"), "twitter:card");
      const isPost = /(^|\/)blog\/[^/]+\/index\.html$/.test(f);
      assert.equal(metaContent(html, "og:type"), isPost ? "article" : "website");
    });
  }
});
