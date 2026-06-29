import { B as BananaSlug } from "./github-slugger.mjs";
import { v as visit } from "./unist-util-visit.mjs";
import { h as headingRank } from "./hast-util-heading-rank.mjs";
import { t as toString } from "./hast-util-to-string.mjs";
const emptyOptions = {};
const slugs = new BananaSlug();
function rehypeSlug(options) {
  const settings = options || emptyOptions;
  const prefix = settings.prefix || "";
  return function (tree) {
    slugs.reset();
    visit(tree, "element", function (node) {
      if (headingRank(node) && !node.properties.id) {
        node.properties.id = prefix + slugs.slug(toString(node));
      }
    });
  };
}
export { rehypeSlug as r };
