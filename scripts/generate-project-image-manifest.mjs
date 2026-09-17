import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const PROJECTS_ROOT = path.join(ROOT, "public", "images", "projects");
const OUTPUT = path.join(ROOT, "src", "lib", "project-image-manifest.json");

const MAX_SERVABLE_BYTES = 50 * 1024 * 1024;
const ALLOWED_EXTENSIONS = new Set([".jpg", ".jpeg", ".png", ".webp"]);

function listProjectGallery(folder) {
  const directory = path.join(PROJECTS_ROOT, folder);

  if (!fs.existsSync(directory) || !fs.statSync(directory).isDirectory()) {
    throw new Error(`Project folder missing: ${folder}`);
  }

  return fs
    .readdirSync(directory)
    .filter((filename) => {
      if (filename.startsWith(".")) return false;

      const extension = path.extname(filename).toLowerCase();
      if (!ALLOWED_EXTENSIONS.has(extension)) return false;

      const filePath = path.join(directory, filename);
      const stats = fs.statSync(filePath);
      return stats.isFile() && stats.size <= MAX_SERVABLE_BYTES;
    })
    .sort((left, right) => left.localeCompare(right));
}

if (!fs.existsSync(PROJECTS_ROOT)) {
  throw new Error(`Projects image root missing: ${PROJECTS_ROOT}`);
}

const manifest = {};

for (const folder of fs.readdirSync(PROJECTS_ROOT).sort((left, right) => left.localeCompare(right))) {
  const directory = path.join(PROJECTS_ROOT, folder);
  if (!fs.statSync(directory).isDirectory()) continue;

  manifest[folder] = listProjectGallery(folder);
}

fs.writeFileSync(OUTPUT, `${JSON.stringify(manifest, null, 2)}\n`);

console.log(
  `Wrote ${Object.values(manifest).reduce((total, files) => total + files.length, 0)} project images across ${Object.keys(manifest).length} folders to ${path.relative(ROOT, OUTPUT)}`,
);
