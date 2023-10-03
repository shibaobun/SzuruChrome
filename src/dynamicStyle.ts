import { TagCategoryColor } from "./models";

export function makeCssName(prefix: string, name: string) {
  return prefix + "-" + name.replace(/[^a-z0-9]/g, "_");
}

export function refreshTagCategoryColorMap(tagCategories: TagCategoryColor[], styleElement?: HTMLStyleElement) {
  if (styleElement) {
    document.head.removeChild(styleElement);
  }
  styleElement = document.createElement("style");
  document.head.appendChild(styleElement);
  for (const category of tagCategories) {
    const ruleName = makeCssName("tag", category.name);
    styleElement.sheet!.insertRule(`.${ruleName} { color: ${category.color} }`, styleElement.sheet!.cssRules.length);
    console.log("adding " + category);
  }
  return styleElement;
}
