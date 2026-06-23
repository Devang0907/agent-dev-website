import { s as structuredClone } from "./ungap__structured-clone.mjs";
import { c as convertElement } from "./hast-util-is-element.mjs";
import { v as visit } from "./unist-util-visit.mjs";
import { h as headingRank } from "./hast-util-heading-rank.mjs";
import { S as SKIP } from "./unist-util-visit-parents.mjs";
const contentDefaults = {
  type: "element",
  tagName: "span",
  properties: { className: ["icon", "icon-link"] },
  children: []
};
const emptyOptions = {};
function rehypeAutolinkHeadings(options) {
  const settings = options || emptyOptions;
  let properties = settings.properties;
  const headingOroperties = settings.headingProperties;
  const behavior = settings.behavior || "prepend";
  const content = settings.content;
  const group = settings.group;
  const is = convertElement(settings.test);
  let method;
  if (behavior === "after" || behavior === "before") {
    method = around;
  } else if (behavior === "wrap") {
    method = wrap;
  } else {
    method = inject;
    if (!properties) {
      properties = { ariaHidden: "true", tabIndex: -1 };
    }
  }
  return function(tree) {
    visit(tree, "element", function(node, index, parent) {
      if (headingRank(node) && node.properties.id && is(node, index, parent)) {
        Object.assign(node.properties, toProperties(headingOroperties, node));
        return method(node, index, parent);
      }
    });
  };
  function inject(node) {
    const children = toChildren(content || contentDefaults, node);
    node.children[behavior === "prepend" ? "unshift" : "push"](
      create(node, toProperties(properties, node), children)
    );
    return [SKIP];
  }
  function around(node, index, parent) {
    if (typeof index !== "number" || !parent) return;
    const children = toChildren(content || contentDefaults, node);
    const link = create(node, toProperties(properties, node), children);
    let nodes = behavior === "before" ? [link, node] : [node, link];
    if (group) {
      const grouping = toNode(group, node);
      if (grouping && !Array.isArray(grouping) && grouping.type === "element") {
        grouping.children = nodes;
        nodes = [grouping];
      }
    }
    parent.children.splice(index, 1, ...nodes);
    return [SKIP, index + nodes.length];
  }
  function wrap(node) {
    let before = node.children;
    let after = [];
    if (typeof content === "function") {
      before = [];
      after = content(node);
    } else if (content) {
      after = clone(content);
    }
    node.children = [
      create(
        node,
        toProperties(properties, node),
        Array.isArray(after) ? [...before, ...after] : [...before, after]
      )
    ];
    return [SKIP];
  }
}
function clone(thing) {
  return (
    /** @type {Cloneable<T>} */
    structuredClone(thing)
  );
}
function create(node, properties, children) {
  return {
    type: "element",
    tagName: "a",
    properties: { ...properties, href: "#" + node.properties.id },
    children
  };
}
function toChildren(value, node) {
  const result = toNode(value, node);
  return Array.isArray(result) ? result : [result];
}
function toNode(value, node) {
  if (typeof value === "function") return value(node);
  return clone(value);
}
function toProperties(value, node) {
  if (typeof value === "function") return value(node);
  return value ? clone(value) : {};
}
export {
  rehypeAutolinkHeadings as r
};
