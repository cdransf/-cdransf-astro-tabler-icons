const fs = require("fs");
const path = require("path");

const ICONS_DIR = path.join(
  "node_modules",
  "@tabler",
  "icons",
  "icons",
  "outline"
);
const OUTPUT_FILE = path.resolve("src/utils/icons.js");

if (!fs.existsSync(ICONS_DIR)) {
  console.error(`Icons directory not found at: ${ICONS_DIR}`);
  process.exit(1);
}

const icons = fs.readdirSync(ICONS_DIR).reduce((acc, file) => {
  if (file.endsWith(".svg")) {
    const name = path.basename(file, ".svg");
    const content = fs.readFileSync(path.join(ICONS_DIR, file), "utf8");
    const cleanedContent = content
      .replace(/<svg[^>]*>/, "")
      .replace("</svg>", "")
      .trim();

    acc[name] = cleanedContent;
  }
  return acc;
}, {});

icons.HEAD = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">`;
icons.TAIL = `</svg>`;

const outputContent = `
/**
 * Auto-generated file. Do not edit directly.
 * Generated at ${new Date().toISOString()}
 */

const ICONS = ${JSON.stringify(icons, null, 2)};

export default ICONS;
`;

try {
  fs.mkdirSync(path.dirname(OUTPUT_FILE), { recursive: true });
  fs.writeFileSync(OUTPUT_FILE, outputContent.trim());
  console.log(`ICONS object successfully generated at ${OUTPUT_FILE}`);
} catch (error) {
  console.error("Error writing ICONS file:", error);
  process.exit(1);
}
