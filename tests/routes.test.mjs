import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { SKIP, has, walk, rel, read, slugs, LOCALES, prefix } from "./helpers.mjs";

const files = [
  "index.html", "en/index.html", "blog/index.html", "en/blog/index.html",
  "cv/index.html", "en/cv/index.html", "404.html", "rss.xml", "en/rss.xml",
  "sitemap-index.xml", "sitemap-0.xml", "robots.txt",
  "resumes/Ilton_Andrew-CV-EN.pdf", "resumes/Ilton_Andrew-CV-PT-BR.pdf",
  "og.jpg", "favicon.ico", "fullname.svg",
];

describe("routes", { skip: SKIP }, () => {
  for (const f of files) it(`dist/${f} exists`, () => assert.ok(has(f)));
  it("dist/images/companies/* exists", () =>
    assert.ok(walk().some((f) => rel(f).startsWith("images/companies/"))));
  for (const l of LOCALES) {
    it(`has posts source for ${l}`, () => assert.ok(slugs(l).length > 0));
    for (const s of slugs(l)) it(`${prefix(l)}/blog/${s} exists`, () => assert.ok(has(`${prefix(l).slice(1)}/blog/${s}/index.html`.replace(/^\//, ""))));
  }
  it("no _next directory", () => assert.ok(!has("_next")));
  it("no html references /_next/", () => {
    const bad = walk().filter((f) => f.endsWith(".html") && read(rel(f)).includes("/_next/")).map(rel);
    assert.deepEqual(bad, []);
  });
});
