<template>
  <div class="slider">
    <h1 class="styletitle">{{ musicstyle1 }}</h1>
    <concertsArtist  v-for="artist in artistList" />
  </div>
  <div class="slider">
    <h1 class="styletitle">{{ musicstyle2 }}</h1>
      <concertsArtist />
  </div>
  <div class="slider">
    <h1 class="styletitle">{{ musicstyle3 }}</h1>
      <concertsArtist />
  </div>
</template>
<script>
import concertsArtist from "../components/concertsartist.vue";
export default {
  components: { concertsArtist },
  name: "stylelist",
  props: {
    musicstyle1: String,
    musicstyle2: String,
    musicstyle3: String,
  },
};
</script>
<style lang="scss">
.card.concerts {
  height: 460px;
  width: 338px;
  border-radius: 30px;
}
.styletitle {
  background: linear-gradient(89.6deg, #211C39 -2.19%, #927BF9 102.14%);

  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.slider {
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: auto;
  margin-top: 5vh;
  margin-bottom: 5vh;
  height: 50vh;
  background: #f3eeff;
  padding: 30px;
  border-radius: 47px;
}
</style>