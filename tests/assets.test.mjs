import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { SKIP, has, read, size, readHtml, tags } from "./helpers.mjs";

describe("assets", { skip: SKIP }, () => {
  for (const f of ["resumes/Ilton_Andrew-CV-EN.pdf", "resumes/Ilton_Andrew-CV-PT-BR.pdf"])
    it(`${f} is a >20KB pdf`, () => {
      assert.ok(has(f));
      assert.ok(size(f) > 20_000);
      assert.equal(read(f).slice(0, 4), "%PDF");
    });
  it("og.jpg > 20KB", () => assert.ok(has("og.jpg") && size("og.jpg") > 20_000));

  for (const f of ["index.html", "en/index.html"]) {
    const html = readHtml(f);
    it(`${f}: company images exist`, () => {
      const refs = [...new Set([...html.matchAll(/["'(\s]\/(images\/companies\/[^"'\s)?#]+)/g)].map((m) => m[1]))];
      assert.ok(refs.length > 0, "no company images referenced");
      assert.deepEqual(refs.filter((r) => !has(r)), []);
    });
    it(`${f}: hero photo optimized via /_astro/`, () => {
      const img = tags(html, "img").find((i) => (i.src ?? "").startsWith("/_astro/") && i.srcset);
      assert.ok(img, "no <img> from /_astro/ with srcset");
      assert.ok(img.width && img.height, "missing width/height");
      assert.ok(img.alt && img.alt.trim(), "empty alt");
    });
  }
});
