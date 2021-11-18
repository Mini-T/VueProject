import './header.vue.css.proxy.js';
const defaultExport = {
  name: "Header",
  props: {
    title1: String,
    subtitle1: String
  }
};
import { toDisplayString as _toDisplayString, createElementVNode as _createElementVNode, Fragment as _Fragment, openBlock as _openBlock, createElementBlock as _createElementBlock } from "../../_snowpack/pkg/vue.js"

const _hoisted_1 = { class: "header" }
const _hoisted_2 = { class: "bigtitle" }
const _hoisted_3 = { class: "subtitle" }
const _hoisted_4 = /*#__PURE__*/_createElementVNode("svg", {
  id: "svgcaca",
  width: "217",
  height: "211",
  viewBox: "0 0 217 211",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /*#__PURE__*/_createElementVNode("path", {
    d: "M191.343 51.6972C201.535 73.2841 205.995 87.6163 211.516 115.75C217.037 144.061 223.407 186.527 203.022 202.451C182.636 218.376 135.283 207.937 89.4164 190.95C43.5496 174.141 -1.04314 150.785 0.0185889 126.72C1.08032 102.656 47.5842 77.8846 80.0731 51.8741C112.562 26.0407 131.249 -1.0314 148.449 0.030247C165.649 0.914955 181.362 29.9334 191.343 51.6972Z",
    fill: "#1C1637"
  })
], -1)

export function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock(_Fragment, null, [
    _createElementVNode("div", _hoisted_1, [
      _createElementVNode("h1", _hoisted_2, _toDisplayString(_ctx.title1), 1),
      _createElementVNode("h2", _hoisted_3, _toDisplayString(_ctx.subtitle1), 1)
    ]),
    _hoisted_4
  ], 64))
};

defaultExport.render = render;

export default defaultExport;