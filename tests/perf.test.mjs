import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { SKIP, walk, rel, size, readHtml, htmlFiles, tags } from "./helpers.mjs";

const total = (ext) => walk().filter((f) => f.endsWith(ext)).reduce((n, f) => n + size(rel(f)), 0);

describe("perf", { skip: SKIP }, () => {
  it("total JS <= 40000 bytes", () => assert.ok(total(".js") <= 40_000, `${total(".js")} bytes`));
  it("total CSS <= 60000 bytes", () => assert.ok(total(".css") <= 60_000, `${total(".css")} bytes`));
  it("home HTML <= 60000 bytes", () => {
    const n = Buffer.byteLength(readHtml("index.html"));
    assert.ok(n > 0 && n <= 60_000, `${n} bytes`);
  });
  it("scripts only from /_astro/", () => {
    const bad = htmlFiles().flatMap((f) =>
      tags(readHtml(f), "script").filter((s) => s.src && !s.src.startsWith("/_astro/")).map((s) => `${f}: ${s.src}`));
    assert.deepEqual(bad, []);
  });
});
