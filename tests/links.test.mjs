import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { SKIP, has, walk, rel, read, htmlFiles, readHtml } from "./helpers.mjs";

const resolves = (u) => {
  const p = decodeURIComponent(u.replace(/[?#].*$/, "")).replace(/^\//, "").replace(/\/$/, "");
  return p === "" ? has("index.html") : has(p) || has(`${p}/index.html`) || has(`${p}.html`);
};
const urls = (html) => {
  const out = [];
  for (const m of html.matchAll(/\s(?:href|src|srcset|imagesrcset)\s*=\s*("([^"]*)"|'([^']*)')/g)) {
    const v = m[2] ?? m[3];
    // srcset: "url 1x, url 2x" - first token of each comma-separated candidate.
    for (const part of v.includes(" ") && /\s\d+(\.\d+)?[wx]/.test(v) ? v.split(",") : [v])
      out.push(part.trim().split(/\s+/)[0]);
  }
  return out.filter((u) => u.startsWith("/") && !u.startsWith("//"));
};

describe("links", { skip: SKIP }, () => {
  for (const f of htmlFiles()) {
    it(`${f}: internal urls resolve`, () => {
      const missing = [...new Set(urls(readHtml(f)))].filter((u) => !resolves(u));
      assert.deepEqual(missing, []);
    });
  }
  it("no references to deleted assets", () => {
    const dead = ["profile_photo.jpg", "Ilton_Andrew_CV.pdf", "Ilton_Andrew_CV-2.pdf", "IA.png", "fullname.png"];
    const hits = walk()
      .filter((f) => /\.(html|xml|txt|js|css|json|webmanifest)$/.test(f))
      .flatMap((f) => dead.filter((d) => read(rel(f)).includes(d)).map((d) => `${rel(f)}: ${d}`));
    assert.deepEqual(hits, []);
    assert.deepEqual(dead.filter((d) => has(d) || has(`images/${d}`)), []);
  });
});
