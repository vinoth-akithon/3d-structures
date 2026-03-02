const fs = require("fs");
const path = require("path");

const baseDir = path.join(__dirname, "src/assets/images/projects");

function toKebabCase(str) {
  return str
    .replace(/\(.*?\)/g, "") // remove parentheses and contents
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-") // replace non-alphanumeric with hyphens
    .replace(/^-+|-+$/g, ""); // kill leading/trailing hyphens
}

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walkDir(fullPath);
    } else if (file.endsWith(".webp")) {
      const parsed = path.parse(file);
      const newName = toKebabCase(parsed.name) + parsed.ext;
      const newPath = path.join(dir, newName);
      if (fullPath !== newPath) {
        console.log(`Renaming: "${file}" -> "${newName}"`);
        fs.renameSync(fullPath, newPath);
      }
    }
  }
}

try {
  walkDir(baseDir);
  console.log("✅ Done renaming files");
} catch (err) {
  console.error("❌ Error renaming files:", err);
}
