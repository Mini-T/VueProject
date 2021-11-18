import './Image.vue.css.proxy.js';



const defaultExport = {
    name:"Image",
    props:{
        artistList:Array,
        cta: String,
        artist: Object,
    }
}

import { toDisplayString as _toDisplayString, createElementVNode as _createElementVNode, normalizeStyle as _normalizeStyle, openBlock as _openBlock, createElementBlock as _createElementBlock } from "../../_snowpack/pkg/vue.js"

const _hoisted_1 = { id: "darklayer" }
const _hoisted_2 = { class: "left" }
const _hoisted_3 = { class: "desctitle" }
const _hoisted_4 = { class: "descsubtitle" }
const _hoisted_5 = /*#__PURE__*/_createElementVNode("div", { class: "right" }, [
  /*#__PURE__*/_createElementVNode("button", { id: "reserver" }, "Réserver")
], -1)

export function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("div", {
    id: "image",
    style: _normalizeStyle(`background-image:url('${_ctx.artist.link}')`)
  }, [
    _createElementVNode("div", _hoisted_1, [
      _createElementVNode("div", _hoisted_2, [
        _createElementVNode("h1", _hoisted_3, _toDisplayString(_ctx.artist.date), 1),
        _createElementVNode("h2", _hoisted_4, _toDisplayString(_ctx.artist.lieu), 1)
      ]),
      _hoisted_5
    ])
  ], 4))
};

defaultExport.render = render;

export default defaultExport;