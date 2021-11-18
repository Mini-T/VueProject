import './bottom.vue.css.proxy.js';

const defaultExport = {
  data() {
    return {
      cards: [
        {
          index: 1,
          id: "card1",
          cardtitle: "Choisis ton artiste",
          cardtitleid: "card1title",
          cardcontent:
            "Nous te proposons régulièrement des concerts en avant-première, choisis le concert de ton artiste préféré parmi ceux proposés",
          cardcontentid: "card1content",
        },
        {
          index: 2,
          id: "card2",
          cardtitle: "Réserve ton billet",
          cardtitleid: "card2title",
          cardcontent:
            "buuk te propose les prix les plus attractifs du marché, plus tu réserve tôt, plus tu auras droit à un prix bas. Alors fonce, ne perds pas de temps !",
          cardcontentid: "card2content",
        },
        {
          index: 3,
          id: "card3",
          cardtitle: "Kiffe ton concert",
          cardtitleid: "card3title",
          cardcontent:
            "Nous te proposons régulièrement des concerts en avant-première, choisis le concert de ton artiste préféré parmi ceux proposés",
          cardcontentid: "card3content",
        },
      ],
    };
  },
  name: "Bottom",
  props: {
    propagande: String,
  },
};

import { toDisplayString as _toDisplayString, createElementVNode as _createElementVNode, renderList as _renderList, Fragment as _Fragment, openBlock as _openBlock, createElementBlock as _createElementBlock } from "../../_snowpack/pkg/vue.js"

const _hoisted_1 = { class: "bottom" }
const _hoisted_2 = { class: "propa" }
const _hoisted_3 = { class: "wrap" }
const _hoisted_4 = ["id"]
const _hoisted_5 = ["id"]
const _hoisted_6 = ["id"]
const _hoisted_7 = /*#__PURE__*/_createElementVNode("svg", {
  id: "svgpropa",
  width: "257",
  height: "198",
  viewBox: "0 0 257 198",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /*#__PURE__*/_createElementVNode("path", {
    d: "M214.455 45.6472C224.811 63.0566 247.655 74.3172 253.937 89.0135C260.468 103.65 250.496 121.972 238.349 137.258C226.202 152.544 212.034 164.889 195.978 164.385C180.016 163.726 162.414 150.157 139.567 157.599C116.659 164.792 88.6604 193.089 64.3851 197.317C40.0151 201.699 19.3092 181.761 8.61481 157.979C-1.98481 134.043 -2.47814 106.109 5.74381 82.6747C13.871 59.3946 30.9626 40.5549 49.8913 30.4948C69.0692 20.3751 90.0842 19.0349 106.723 20.3221C123.208 21.5145 135.376 25.5834 151.686 19.4423C167.747 13.3607 188.011 -2.68187 197.045 0.951429C206.234 4.67949 204.1 28.2378 214.455 45.6472Z",
    fill: "#000001",
    "fill-opacity": "0.12"
  })
], -1)

export function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("div", _hoisted_1, [
    _createElementVNode("h1", _hoisted_2, _toDisplayString(_ctx.propagande), 1),
    (_openBlock(true), _createElementBlock(_Fragment, null, _renderList(_ctx.cards, (card) => {
      return (_openBlock(), _createElementBlock("div", {
        key: card + _ctx.id,
        class: "card"
      }, [
        _createElementVNode("div", _hoisted_3, [
          _createElementVNode("h1", {
            id: `${card.id}`,
            class: "cardindex"
          }, _toDisplayString(card.index), 9, _hoisted_4),
          _createElementVNode("h1", {
            id: `${card.cardtitleid}`,
            class: "cardtitle"
          }, _toDisplayString(card.cardtitle), 9, _hoisted_5),
          _createElementVNode("p", {
            id: `${card.cardcontentid}`,
            class: "cardcontent"
          }, _toDisplayString(card.cardcontent), 9, _hoisted_6)
        ])
      ]))
    }), 128)),
    _hoisted_7
  ]))
};

defaultExport.render = render;

export default defaultExport;