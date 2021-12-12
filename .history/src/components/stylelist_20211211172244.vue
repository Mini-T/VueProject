<template>
  <div class="slider">
    <h1 class="styitle">{{ musicstyle1 }}</h1>
    <div class="wrapcontainer">

      <button class="slidebtn"  @click="prev">
        <i class="gg-chevron-left"></i>
      </button>
      <button class="slidebtn" @click="next">
        <i class="gg-chevron-right"></i>
      </button>
    </div>
    <div class="wrapper" :style="{transform: `translateX(${slideIndex}px)`}" >
      <ConcertsArtist
        :artiste="artiste"
        v-for="artiste in RapRnb"
        :key="artiste.id"
      />
    </div>
      
  </div>
  <div class="slider">
    <h1 class="styitle">{{ musicstyle2 }}</h1>
    <div class="wrapcontainer">

      <button class="slidebtn"  @click="prev">
        <i class="gg-chevron-left"></i>
      </button>
    <div class="wrapper" :style="{transform: `translateX(${slideIndex}px)`}">
      <ConcertsArtist
        :artiste="artiste"
        v-for="artiste in Variet"
        :key="artiste.id"
      />
    </div>
      <button class="slidebtn" @click="next">
        <i class="gg-chevron-right"></i>
      </button>
    </div>
  </div>
  <div class="slider">
    <h1 class="styitle">{{ musicstyle3 }}</h1>
    <div class="wrapcontainer">

      <button class="slidebtn"  @click="prev">
        <i class="gg-chevron-left"></i>
      </button>
    <div class="wrapper" :style="{transform: `translateX(${slideIndex}px)`}">
      <ConcertsArtist
        :artiste="artiste"
        v-for="artiste in Electro"
        :key="artiste.id"
      />
    </div>
      <button class="slidebtn" @click="next">
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
      slideIndex: 0,
    };
  },
  methods: {
    next() {
      console.log(this.slideIndex);
      if (this.slideIndex === -1500) {
        this.slideIndex = 0;
      } else {
        this.slideIndex -= 500;
      }
    },
    prev() {
      console.log(this.slideIndex);
      if (this.slideIndex === 0) {
        this.slideIndex = -1500;
      } else {
        this.slideIndex += 500;
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
.wrapcontainer{
  display:flex;
  align-items: center;
  justify-content: flex-start;
  width: max-content;
}
.slidebtn {
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 50%;
  width: 40px;
  height: 40px;
}
.wrapper {
  position: absolute;
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