import './pre-footer.vue.css.proxy.js';

const defaultExport = {
  data() {
    return {};
  },
  name: "PreFooter",
  props: {
    ad: String,
    normaltext: String,
  },
};

import { toDisplayString as _toDisplayString, createElementVNode as _createElementVNode, openBlock as _openBlock, createElementBlock as _createElementBlock } from "../../_snowpack/pkg/vue.js"

const _hoisted_1 = { id: "mobile" }
const _hoisted_2 = { class: "subtitle" }
const _hoisted_3 = { class: "normaltext" }
const _hoisted_4 = /*#__PURE__*/_createElementVNode("div", { class: "line" }, [
  /*#__PURE__*/_createElementVNode("div", { id: "applestore" }),
  /*#__PURE__*/_createElementVNode("div", { id: "googlestore" })
], -1)

export function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("div", _hoisted_1, [
    _createElementVNode("h1", _hoisted_2, _toDisplayString(_ctx.ad), 1),
    _createElementVNode("p", _hoisted_3, _toDisplayString(_ctx.normaltext), 1),
    _hoisted_4
  ]))
};

defaultExport.render = render;

export default defaultExport;