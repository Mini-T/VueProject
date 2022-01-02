<template>
  <div class="slider">
    <h1 class="styitle">{{ musicstyle1 }}</h1>
    <swiper navig
    
    :slides-per-view="3"
    :space-between="50"
    @swiper="onSwiper"
    @slideChange="onSlideChange" class="wrapper">
    <swiper-slide>
      <ConcertsArtist
        :artiste="artiste"
        v-for="artiste in RapRnb"
        :key="artiste.id"/>
        </swiper-slide>
    </swiper>
  </div>
  <div class="slider">
    <h1 class="styitle">{{ musicstyle2 }}</h1>
    <swiper navig
    
    :slides-per-view="3"
    :space-between="50"
    @swiper="onSwiper"
    @slideChange="onSlideChange" class="wrapper"><swiper-slide>
      <ConcertsArtist
        :artiste="artiste"
        v-for="artiste in Variet"
        :key="artiste.id"
      /></swiper-slide>
    </swiper>
  </div>
  <div class="slider">
    <h1 class="styitle">{{ musicstyle3 }}</h1>
    <swiper navig
    :slides-per-view="3"
    :space-between="50"
    @swiper="onSwiper"
    @slideChange="onSlideChange" class="wrapper"><swiper-slide>
      <ConcertsArtist
        :artiste="artiste"
        v-for="artiste in Electro"
        :key="artiste.id"
      /></swiper-slide>
    </swiper>
  </div>
</template>
<script>
 
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import 'swiper/css';

  import ConcertsArtist from "../components/concertsartist.vue";
export default {
  data() {
    return {
      
    };
  },

  components: { ConcertsArtist, Swiper, SwiperSlide },
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
  setup() {
      const onSwiper = (swiper) => {
        console.log(swiper);
      };
      const onSlideChange = () => {
        console.log('slide change');
      };
      return {
        onSwiper,
        onSlideChange,

      };
    },
};
</script>
<style lang="scss">
.wrapper {
  display: flex;
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