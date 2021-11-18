import './about.vue.css.proxy.js';

import Nav from '../components/Nav.vue.js'
import Title from '../components/header.vue.js'

const defaultExport = {
  name: 'About',
  components: {
   Title,
    Nav,
  },
}

import { resolveComponent as _resolveComponent, createVNode as _createVNode, openBlock as _openBlock, createElementBlock as _createElementBlock } from "../../_snowpack/pkg/vue.js"

const _hoisted_1 = { class: "about" }

export function render(_ctx, _cache) {
  const _component_Title = _resolveComponent("Title")
  const _component_Nav = _resolveComponent("Nav")

  return (_openBlock(), _createElementBlock("div", _hoisted_1, [
    _createVNode(_component_Title, {
      title1: "OHAZOIHFIOZE",
      subtitle1: "okzdfj"
    }),
    _createVNode(_component_Nav)
  ]))
};

defaultExport.render = render;

export default defaultExport;