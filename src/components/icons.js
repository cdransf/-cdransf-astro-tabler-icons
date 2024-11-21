import ICONS from "../utils/icons.js";
import Icon from "./Icon.astro";

const components = {};

Object.keys(ICONS).forEach((key) => {
  if (key !== "HEAD" && key !== "TAIL") components[key] = (props) => <Icon {...props} name={key} />;
});

export default components;
