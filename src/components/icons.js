import ICONS from "../utils/icons.js";

const components = {};

Object.keys(ICONS).forEach((key) => {
  if (key !== "HEAD" && key !== "TAIL") {
    components[key] = ({
      size = 24,
      color = "currentColor",
      className = "",
      attrs = {},
    }) => {
      const contents = ICONS[key];

      if (!contents) {
        console.error(`Icon "${key}" not found in ICONS.`);
        return null;
      }

      const attributes = Object.entries(attrs)
        .map(([key, value]) => `${key}="${value}"`)
        .join(" ");

      return `
        ${ICONS.HEAD.slice(0, -1)} aria-hidden="true" 
        width="${size}" height="${size}" 
        fill="${color}" class="${className}" ${attributes}>
        ${contents}${ICONS.TAIL}
      `;
    };
  }
});

export default components;
