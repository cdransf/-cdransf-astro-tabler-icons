const fs = require("fs");
const path = require("path");

const ICONS_DIR = path.join('node_modules', '@tabler', 'icons', 'icons', 'outline')
const OUTPUT_FILE = path.resolve("src/utils/icons.js");

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

// Add HEAD and TAIL to the ICONS object
icons.HEAD = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'>";
icons.TAIL = "</svg>";

// Write the ICONS object to a file
const outputContent = `const ICONS = ${JSON.stringify(icons, null, 2)};\n\nexport default ICONS;`;
fs.writeFileSync(OUTPUT_FILE, outputContent);

console.log(`ICONS object generated at ${OUTPUT_FILE}`);
