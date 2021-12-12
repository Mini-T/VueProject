<template>
  <div class="slider">
    <h1 class="styletitle">{{ musicstyle1 }}</h1>
    <div class="wrapper">
    <ConcertsArtist :artiste="artiste" v-for="artiste in RapRnb" :key="artiste.id" />
    </div>
    
  </div>
  <div class="slider">
    <h1 class="styletitle">{{ musicstyle2 }}</h1>
    <div class="wrapper">
    <ConcertsArtist :artiste="artiste" v-for="artiste in Variet" :key="artiste.id" />
    </div>
    
  </div>
  <div class="slider">
    <h1 class="styletitle">{{ musicstyle3 }}</h1>
    <div class="wrapper">
    <ConcertsArtist :artiste="artiste" v-for="artiste in Electro" :key="artiste.id" />
    </div>
    <i class="fas fa-chevron-left" id="leftarr"></i>
      <i class="fas fa-chevron-right" id="rightarr"></i>


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
  position: absolute;
  left: 0px;
  bottom: 20%%;
}
#rightarr{

}
</style>