<template>
  <div class="slider">
    <h1 class="styitle">{{ musicstyle1 }}</h1>
    <div class="wrapcontainer">
      <button class="slidebtn" :class="{'mousedownbutton' : clicked}" @mouseup="clicked = false" @click="prev1" @mousedown="clicked = true">
        <i class="gg-chevron-left "></i>
      </button>
      <div
        class="wrapper"
        :style="{ transform: `translateX(${slideIndex1}px)` }"
      >
        <ConcertsArtist
          :artiste="artiste"
          v-for="artiste in RapRnb"
          :key="artiste.id"
        />
        <div class="cardconcerts longer"> <span class="trolled">Rien de plus ici ... Gros con</span></div>
      </div>
      <button class="slidebtn next" @click="next1">
        <i class="gg-chevron-right"></i>
      </button>
    </div>
  </div>
  <div class="slider">
    <h1 class="styitle">{{ musicstyle2 }}</h1>
    <div class="wrapcontainer">
      <button class="slidebtn" @click="prev2">
        <i class="gg-chevron-left"></i>
      </button>
      <div
        class="wrapper"
        :style="{ transform: `translateX(${slideIndex2}px)` }"
      >
        <ConcertsArtist
          :artiste="artiste"
          v-for="artiste in Variet"
          :key="artiste.id"
        />
        <div class="cardconcerts longer"> <span class="trolled">Rien de plus ici ... Gros con</span></div>
      </div>
      <button class="slidebtn next" @click="next2">
        <i class="gg-chevron-right"></i>
      </button>
    </div>
  </div>
  <div class="slider">
    <h1 class="styitle">{{ musicstyle3 }}</h1>
    <div class="wrapcontainer">
      <button class="slidebtn" @click="prev3">
        <i class="gg-chevron-left"></i>
      </button>
      <div
        class="wrapper"
        :style="{ transform: `translateX(${slideIndex3}px)` }"
      >
        <ConcertsArtist
          :artiste="artiste"
          v-for="artiste in Electro"
          :key="artiste.id"
        />
        <div class="cardconcerts longer"> <span class="trolled">Rien de plus ici ... Gros con</span></div> 
      </div>
      <button class="slidebtn next" @click="next3">
        <i class="gg-chevron-right"></i>
      </button>
    </div>
  </div>
</template>
<script>
import ConcertsArtist from "../components/concertsartist.vue";
export default {
  data() {
    return {
      slideIndex1:0,
      slideIndex2:0,
      slideIndex3:0,
      clicked:true
    };
  },
  methods: {
    next1() {
      console.log(this.slideIndex1);
      if (this.slideIndex1 === -1940) {
        this.slideIndex1 = 0;
      } else {
        this.slideIndex1 -= 388;
      }
     
    },
    prev1() {
      console.log(this.slideIndex1);
      if (this.slideIndex1 === 0) {
        this.slideIndex1 = -1940;
      } else {
        this.slideIndex1 += 388;
      }
    },
    next2() {
      console.log(this.slideIndex2);
      if (this.slideIndex2 === -1940) {
        this.slideIndex2 = 0;
      } else {
        this.slideIndex2 -= 388;
      }
     
    },
    prev2() {
      console.log(this.slideIndex2);
      if (this.slideIndex2 === 0) {
        this.slideIndex2 = -1940;
      } else {
        this.slideIndex2 += 388;
      }
    },
    next3() {
      console.log(this.slideIndex3);
      if (this.slideIndex3 === -1940) {
        this.slideIndex3 = 0;
      } else {
        this.slideIndex3 -= 388;
      }
     
    },
    prev3() {
      console.log(this.slideIndex3);
      if (this.slideIndex3 === 0) {
        this.slideIndex3 = -1940;
      } else {
        this.slideIndex3 += 388;
      }
    },
  },

  components: { ConcertsArtist },
  name: "Stylelist",
  props: {
    Electro: Array,
    Variet: Array,
    RapRnb: Array,
    artiste: Object,
    musicstyle1: String,
    musicstyle2: String,
    musicstyle3: String,
  },
};
</script>
<style lang="scss">
@import url("https://css.gg/chevron-left.css");
@import url("https://css.gg/chevron-right.css");
.mousedownbutton{
  width: 30px !important;
  height: 30px !important;
  font-size: 30px;
  background: rgb(24, 24, 24) !important;
  color: white;
}
.trolled{
  font-size: 2vw;
  
}
.cardconcerts.longer{
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url('/images/Freeze.jfif');
  background-size: cover;
  background-position: center;
  color:purple
}
.wrapcontainer {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
}
.slidebtn {
  transition: all cubic-bezier(0.075, 0.82, 0.165, 1) 300ms;
  padding: 5px;
  position: relative;
  z-index: 4;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  &.next {
    right: 39%;
  }
}
.wrapper {
  transition: all cubic-bezier(1, -0.13, 0.07, 1.13) 400ms;
  position: relative;
  display: flex;
  align-items: center;
}
.styitle {
  background: linear-gradient(179.6deg, #211c39 -2.19%, #927bf9 102.14%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.slider {
  overflow: hidden;
  display: flex;
  flex-direction: column;
  margin: auto;
  height: 674px;
  width: 1757px;
  border-radius: 47px;

  margin-top: 5vh;
  margin-bottom: 5vh;

  background: #f3eeff;
  padding: 30px;
}
#leftarr {
  left: 0px;
  bottom: 0px;
}
#rightarr {
  right: 0px;
  bottom: 0px;
}
.arrow {
  text-shadow: rgb(0, 0, 0) 3px 0 5px;
  align-self: center;
  position: relative;
  font-size: 80px;
  color: white;
}
</style>