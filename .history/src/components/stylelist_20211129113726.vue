<template>
  <div class="slider">
    <h1 class="styletitle">{{ musicstyle1 }}</h1>
    <div class="wrapper">
    <ConcertsArtist :artiste="artiste" v-for="artiste in RapRnb" :key="artiste.id" />
    </div>
  </div>
  
</template>
<script>
import ConcertsArtist from "../components/concertsartist.vue";
export default {
  components: { ConcertsArtist },
  name: "Stylelist",
  props: {
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
  background: linear-gradient(200deg, #211c39 -2.19%, #927bf9 102.14%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.slider {
  display: flex;
  flex-direction: column;
  
  margin: auto;
  height: 674px;
width: 1757px;
border-radius: 47px;

  margin-top: 5vh;
  margin-bottom: 5vh;
  height: 50vh;
  background: #f3eeff;
  padding: 30px;
  border-radius: 47px;
}
</style>