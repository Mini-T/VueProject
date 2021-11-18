import './index.vue.css.proxy.js';

import Nav from "../components/Nav.vue.js";
import Header from "../components/header.vue.js";
import Carousel from "../components/carousel.vue.js";
import Bottom from "../components/bottom.vue.js";
import PreFooter from "../components/pre-footer.vue.js";
import Footer from "../components/footer.vue.js";

const defaultExport = {
  data() {
    return {
      artistList: [
        {
          id: 1,
          tabId: "Angele",
          lieu: "J'ai tout oublié",
          date: "Je sais pas",
          link: "/images/Angele.jpg",
        },
        {
          id: 2,
          tabId: "Damso",
          lieu: "Dans sa caravane",
          date: "n'importe quand",
          link: "/images/damso.jpeg",
        },
        {
          id: 3,
          tabId: "Nekfeu",
          lieu: "Pas chez son ex",
          date: "Quand il aura oublié son ex",
          link: "/images/nekfeu.jpg",
        },
        {
          id: 4,
          tabId: "Vald",
          lieu: "Dans sa chambre (celle du mec de la chambre)",
          date: "16 Juillet 2022",
          link: "/images/vald.jpg",
        },
        {
          id: 5,
          tabId: "Ziak",
          lieu: "En prison, avec tout ses copains",
          date: "12 novembre 2021",
          link: "/images/Ziak.jpg",
        },
      ],
    };
  },

  name: "Home",
  components: {
    Nav,
    Header,
    Carousel,
    Bottom,
    PreFooter,
    Footer,
  },
};

import { resolveComponent as _resolveComponent, createVNode as _createVNode, createElementVNode as _createElementVNode, Fragment as _Fragment, openBlock as _openBlock, createElementBlock as _createElementBlock } from "../../_snowpack/pkg/vue.js"

const _hoisted_1 = { class: "home" }
const _hoisted_2 = { class: "prefooter" }

export function render(_ctx, _cache) {
  const _component_Nav = _resolveComponent("Nav")
  const _component_Header = _resolveComponent("Header")
  const _component_Carousel = _resolveComponent("Carousel")
  const _component_Bottom = _resolveComponent("Bottom")
  const _component_PreFooter = _resolveComponent("PreFooter")
  const _component_Footer = _resolveComponent("Footer")

  return (_openBlock(), _createElementBlock(_Fragment, null, [
    _createElementVNode("div", _hoisted_1, [
      _createVNode(_component_Nav),
      _createVNode(_component_Header, {
        title1: "Les meilleurs concerts,",
        subtitle1: "En avant-première."
      }),
      _createVNode(_component_Carousel, { artistList: _ctx.artistList }, null, 8, ["artistList"]),
      _createVNode(_component_Bottom, { propagande: "buuk, le rêve des fans de concerts." })
    ]),
    _createElementVNode("div", _hoisted_2, [
      _createVNode(_component_PreFooter, {
        ad: "buuk, aussi sur ton téléphone !",
        normaltext: "Télécharge l’application book sur ton smartphone pour pouvoir réserver encore plus facilement et être tenu au courant grâce aux notifications des derniers concerts disponibles sur la plateforme"
      })
    ]),
    _createVNode(_component_Footer)
  ], 64))
};

defaultExport.render = render;

export default defaultExport;