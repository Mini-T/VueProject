import './footer.vue.css.proxy.js';

const defaultExport = {
  data() {
    return {};
  },
  name: "Footer",
};

import { createElementVNode as _createElementVNode, openBlock as _openBlock, createElementBlock as _createElementBlock } from "../../_snowpack/pkg/vue.js"

const _hoisted_1 = /*#__PURE__*/_createElementVNode("h1", {
  id: "logo",
  class: "subtitle"
}, "buuk", -1)
const _hoisted_2 = /*#__PURE__*/_createElementVNode("div", null, [
  /*#__PURE__*/_createElementVNode("a", {
    class: "footerlink",
    href: "#"
  }, "Conditions de ventes"),
  /*#__PURE__*/_createElementVNode("a", {
    class: "footerlink",
    href: "#"
  }, "Mentions légales"),
  /*#__PURE__*/_createElementVNode("a", {
    id: "issuenumber",
    class: "footerlink",
    href: "#"
  }, "Un problème ? +33 4 50 44 56 03")
], -1)
const _hoisted_3 = [
  _hoisted_1,
  _hoisted_2
]

export function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("footer", null, _hoisted_3))
};

defaultExport.render = render;

export default defaultExport;