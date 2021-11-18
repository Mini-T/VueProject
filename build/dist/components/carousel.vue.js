
import HomePromoNav from "./HomepromoNav.vue.js"
import Image from "./Image.vue.js"
const defaultExport = {
  data(){
    return {
      selectedTab: "Angele",
    }
  },
  components: { Image, HomePromoNav },
  name: "Carousel",
  
  props: {
    artistList: Array,
  },
  methods: {
    updateSelectedTab(tabId) {
      this.selectedTab = tabId;
      console.log('lksjf')
    },
  },
};

import { resolveComponent as _resolveComponent, createVNode as _createVNode, openBlock as _openBlock, createElementBlock as _createElementBlock } from "../../_snowpack/pkg/vue.js"

const _hoisted_1 = { class: "artistes" }

export function render(_ctx, _cache) {
  const _component_HomePromoNav = _resolveComponent("HomePromoNav")
  const _component_Image = _resolveComponent("Image")

  return (_openBlock(), _createElementBlock("div", _hoisted_1, [
    _createVNode(_component_HomePromoNav, {
      artistList: _ctx.artistList,
      selectedTab: this.selectedTab,
      "onUpdate:selectedTab": _cache[0] || (_cache[0] = $event => ((this.selectedTab) = $event)),
      onUpdateSelectedTab: this.updateSelectedTab
    }, null, 8, ["artistList", "selectedTab", "onUpdateSelectedTab"]),
    _createVNode(_component_Image, {
      artist: _ctx.artistList.filter((obj) => obj.tabId === this.selectedTab)[0],
      "onUpdate:artist": _cache[1] || (_cache[1] = $event => ((_ctx.artistList.filter((obj) => obj.tabId === this.selectedTab)[0]) = $event))
    }, null, 8, ["artist"])
  ]))
};

defaultExport.render = render;

export default defaultExport;