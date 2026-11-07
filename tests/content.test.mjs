import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { SKIP, copy, readHtml, text, tags, count, LOCALES, prefix } from "./helpers.mjs";

const home = (l) => (l === "en" ? "en/index.html" : "index.html");
const cv = (l) => (l === "en" ? "en/cv/index.html" : "cv/index.html");
const pdf = (l) => `/resumes/Ilton_Andrew-CV-${l === "en" ? "EN" : "PT-BR"}.pdf`;

/** Experience section: from the work.title heading to the side-projects heading (or end). */
function experience(t, c) {
  const a = t.indexOf(c.work.title);
  const b = t.indexOf(c.work.sideProjects.title, a);
  return a < 0 ? "" : t.slice(a, b < 0 ? undefined : b);
}

describe("content", { skip: SKIP }, () => {
  for (const l of LOCALES) {
    const c = copy[l]();
    const companies = Object.values(c.work.companies);
    const side = [c.work.sideProjects.converter, c.work.sideProjects.zoroscopo];

    describe(`home ${l}`, () => {
      const html = readHtml(home(l));
      const t = text(html);
      const exp = experience(t, c);
      it("companies: name and role", () => {
        for (const co of companies) {
          assert.ok(t.includes(co.name), `name: ${co.name}`);
          assert.ok(t.includes(co.role), `role: ${co.role}`);
        }
      });
      it("McKinsey before Media Hero", () => {
        const { mckinsey, mediaHero } = c.work.companies;
        const a = exp.indexOf(mckinsey.name), b = exp.indexOf(mediaHero.name);
        assert.ok(a >= 0 && b >= 0 && a < b);
      });
      it("'present' appears once in experience", () => assert.equal(count(exp, c.work.present), 1));
      it("7 experience entries", () => {
        assert.equal(companies.length, 7);
        for (const co of companies) assert.ok(exp.includes(co.name), co.name);
      });
      it("side projects: names and links", () => {
        const hrefs = tags(html, "a").map((a) => a.href);
        for (const p of side) {
          assert.ok(t.includes(p.name), p.name);
          assert.ok(hrefs.includes(p.link), p.link);
        }
      });
    });

    describe(`cv ${l}`, () => {
      const html = readHtml(cv(l));
      const t = text(html);
      it("summary, companies, education, certification", () => {
        assert.ok(t.includes(c.cv.summary));
        for (const co of companies) assert.ok(t.includes(co.name), co.name);
        assert.ok(t.includes(c.cv.educationEntries.poli.school));
        assert.ok(t.includes(c.cv.certificationEntries.gcpAce.name));
      });
      it("links to the locale PDF", () => assert.ok(tags(html, "a").some((a) => a.href === pdf(l))));
    });
  }
});
