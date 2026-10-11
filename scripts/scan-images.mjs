// Scans public/images and writes the list of image files that actually exist to
// src/content/generated/available-images.json.
//
// Components use this list to decide whether to render the real photo (next/image)
// or a graceful branded placeholder. Runs automatically before `npm run dev` and
// `npm run build`, so dropping approved JPG/PNG files into public/images/ and
// rebuilding is enough to make them appear — no code changes needed.
import { mkdirSync, readdirSync, statSync, writeFileSync } from "node:fs";
import { dirname, join, relative, sep } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const publicDir = join(root, "public");
const imagesDir = join(publicDir, "images");
const outFile = join(root, "src", "content", "generated", "available-images.json");
const IMAGE_EXT = /\.(jpe?g|png|webp|avif|gif|svg)$/i;

function walk(dir) {
  let out = [];
  let entries = [];
  try {
    entries = readdirSync(dir);
  } catch {
    return out;
  }
  for (const name of entries) {
    const full = join(dir, name);
    if (statSync(full).isDirectory()) out = out.concat(walk(full));
    else if (IMAGE_EXT.test(name)) out.push("/" + relative(publicDir, full).split(sep).join("/"));
  }
  return out;
}

const files = walk(imagesDir).sort();
mkdirSync(dirname(outFile), { recursive: true });
writeFileSync(outFile, JSON.stringify(files, null, 2) + "\n", "utf8");
console.log(`[images:scan] ${files.length} image(s) found in public/images`);
