<template>
  <div class="slider">
    <h1 class="styletitle">{{ musicstyle1 }}</h1>
    <div class="wrapper">
      <i class="fas fa-chevron-left arrow" id="leftarr" aria-label="Previous slide" @click="slide(-1)" ></i>
    <ConcertsArtist :artiste="artiste" v-for="artiste in RapRnb" :key="artiste.id" />
    <i class="fas fa-chevron-right arrow" id="rightarr"></i>
    </div>
    
  </div>
  <div class="slider">
    <h1 class="styletitle">{{ musicstyle2 }}</h1>
    <div class="wrapper">
      <i class="fas fa-chevron-left arrow" id="leftarr" aria-label="Previous slide" @click="slide(-1)"></i>
    <ConcertsArtist :artiste="artiste" v-for="artiste in Variet" :key="artiste.id" />
    <i class="fas fa-chevron-right arrow" id="rightarr" aria-label="Next slide" @click="slide(1)"></i>
    </div>
    
  </div>
  <div class="slider">
    <h1 class="styletitle">{{ musicstyle3 }}</h1>
    <div class="wrapper">
    <i class="fas fa-chevron-left arrow" id="leftarr" aria-label="Previous slide" @click="slide(-1)"></i>
    <ConcertsArtist :artiste="artiste" v-for="artiste in Electro" :key="artiste.id" />
    <i class="fas fa-chevron-right arrow" id="rightarr" aria-label="Next slide" @click="slide(1)"></i>
    </div>
    


  </div>
  
</template>
<script>
import ConcertsArtist from "../components/concertsartist.vue";
export default {
  components: { ConcertsArtist },
  name: "Stylelist",
  props: {
    Electro:Array,
    Variet:Array,
    RapRnb: Array,
    artiste:Object,
    musicstyle1: String,
    musicstyle2: String,
    musicstyle3: String,
  },
  data(){
    return{
       current: 0,
    direction: 1,
    transitionName: "fade",
    show: false,
    slides: [
      { className: "blue" },
      { className: "red" },
      { className: "yellow" }
    ]
    }
  },
  methods: {
    slide(dir) {
      this.direction = dir;
      dir === 1
        ? (this.transitionName = "slide-next")
        : (this.transitionName = "slide-prev");
      var len = this.slides.length;
      this.current = (this.current + dir % len + len) % len;
    }
  },
};
</script>
<style lang="scss">
.wrapper{
  display: flex;

}
.styletitle {
  background: linear-gradient(179.6deg, #211C39 -2.19%, #927BF9 102.14%);
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
#leftarr{
  left: 0px;
  bottom: 0px;
}
#rightarr{
  right: 0px;
  bottom: 0px;
}
.arrow{
  text-shadow: rgb(0, 0, 0) 3px 0 5px;
  align-self: center;
  position: relative;
  font-size: 80px;
  color: white;
}
</style>