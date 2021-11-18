import './HomepromoNav.vue.css.proxy.js';

const defaultExport = {
  name: "HomePromoNav",
  props: {
    artistList: Array,
    selectedTab: String,
  },

  methods: {
    updateSelectedTab(tabId) {
      this.$emit("updateSelectedTab", tabId);
    },
  },
};

import { renderList as _renderList, Fragment as _Fragment, openBlock as _openBlock, createElementBlock as _createElementBlock, toDisplayString as _toDisplayString, normalizeClass as _normalizeClass } from "../../_snowpack/pkg/vue.js"

const _hoisted_1 = { id: "artistes" }
const _hoisted_2 = ["onClick"]

export function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("div", _hoisted_1, [
    (_openBlock(true), _createElementBlock(_Fragment, null, _renderList(_ctx.artistList, (artist) => {
      return (_openBlock(), _createElementBlock("button", {
        onClick: $event => (_ctx.updateSelectedTab(artist.tabId)),
        key: artist.tabId,
        class: _normalizeClass(["onglet", { active: _ctx.selectedTab === artist.tabId }])
      }, _toDisplayString(artist.tabId), 11, _hoisted_2))
    }), 128))
  ]))
};

defaultExport.render = render;

export default defaultExport;