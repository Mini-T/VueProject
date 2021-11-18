import './Nav.vue.css.proxy.js';
const defaultExport = {
  name: "Nav"
};
import { createElementVNode as _createElementVNode, createTextVNode as _createTextVNode, resolveComponent as _resolveComponent, withCtx as _withCtx, createVNode as _createVNode, openBlock as _openBlock, createElementBlock as _createElementBlock } from "../../_snowpack/pkg/vue.js"

const _hoisted_1 = { class: "nav" }
const _hoisted_2 = /*#__PURE__*/_createElementVNode("h1", { id: "buuk" }, "buuk", -1)
const _hoisted_3 = { id: "links" }
const _hoisted_4 = /*#__PURE__*/_createElementVNode("hr", { class: "navhr" }, null, -1)
const _hoisted_5 = /*#__PURE__*/_createTextVNode("Home")
const _hoisted_6 = /*#__PURE__*/_createTextVNode("About")
const _hoisted_7 = /*#__PURE__*/_createTextVNode("Concerts")
const _hoisted_8 = /*#__PURE__*/_createElementVNode("h1", { id: "number" }, "+33 4 50 67 33 22", -1)

export function render(_ctx, _cache) {
  const _component_router_link = _resolveComponent("router-link")

  return (_openBlock(), _createElementBlock("nav", _hoisted_1, [
    _hoisted_2,
    _createElementVNode("div", _hoisted_3, [
      _hoisted_4,
      _createVNode(_component_router_link, {
        class: "link",
        to: "/"
      }, {
        default: _withCtx(() => [
          _hoisted_5
        ]),
        _: 1
      }),
      _createVNode(_component_router_link, {
        class: "link",
        to: "/About"
      }, {
        default: _withCtx(() => [
          _hoisted_6
        ]),
        _: 1
      }),
      _createVNode(_component_router_link, {
        class: "link",
        to: "/concerts"
      }, {
        default: _withCtx(() => [
          _hoisted_7
        ]),
        _: 1
      })
    ]),
    _hoisted_8
  ]))
};

defaultExport.render = render;

export default defaultExport;