// Renders the CV pages to PDF with headless Chrome. No extra deps.
import { execFileSync } from "node:child_process";
import { existsSync, rmSync, statSync, mkdirSync } from "node:fs";
import { resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const build = resolve(root, ".cv-build");
const candidates = [
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  "/Applications/Chromium.app/Contents/MacOS/Chromium",
  "/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge",
];
let chrome = candidates.find(existsSync);
if (!chrome) {
  for (const bin of ["google-chrome", "chromium", "chromium-browser", "microsoft-edge"]) {
    try {
      chrome = execFileSync("which", [bin], { encoding: "utf8" }).trim();
      if (chrome) break;
    } catch {}
  }
}
if (!chrome) throw new Error("No Chrome/Chromium/Edge found");

const jobs = [
  [".cv-build/cv/index.html", "public/resumes/Ilton_Andrew-CV-PT-BR.pdf"],
  [".cv-build/en/cv/index.html", "public/resumes/Ilton_Andrew-CV-EN.pdf"],
];

try {
  rmSync(build, { recursive: true, force: true });
  execFileSync("npx", ["astro", "build", "--outDir", ".cv-build"], { cwd: root, stdio: "inherit" });
  mkdirSync(resolve(root, "public/resumes"), { recursive: true });
  for (const [src, out] of jobs) {
    const dest = resolve(root, out);
    execFileSync(chrome, [
      "--headless=new", "--disable-gpu", "--no-pdf-header-footer",
      "--virtual-time-budget=2000",
      `--print-to-pdf=${dest}`, `file://${resolve(root, src)}`,
    ], { stdio: "ignore" });
    console.log(`${out}  ${(statSync(dest).size / 1024).toFixed(0)} KB`);
  }
} finally {
  rmSync(build, { recursive: true, force: true });
}
