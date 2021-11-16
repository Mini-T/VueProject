<template>
  <div class="home">
    <Nav />
    <Header title1="Les meilleurs concerts," subtitle1="En avant-première." />
    <Carousel artiste1="Ziak" artiste2="Ziak" artiste3="Ziak" artiste4="Ziak" artiste5="Ziak" date="15 décembre 2020" lieu="Lyon, palais des sports" cta="Réserver" />
    <Bottom propagande="buuk, le rêve des fans de concerts."  />
  </div>
</template>
<script>
import Nav from "../components/Nav.vue";
import Header from "../components/header.vue";
import Carousel from "../components/carousel.vue";
import Bottom from "../components/bottom.vue"
export default {
  name: "Home",
  components: {
    Header,
    Nav,
    Carousel,
    Bottom,
  },
};
</script>


<style lang="scss">

.home {
  padding: 0px;
  background: radial-gradient(
    51.9% 336.54% at 51.9% 50%,
    #241b4d 0%,
    #1b1b1b 100%
  );
  border-radius: 0px 0px 150px 150px;
  background-size: cover;
  background-repeat: no-repeat;
  margin: 0px;
  color: white;
  position: absolute;
  width: 100vw;
  height: 2459px;
  left: 0px;
  top: 0px;
  display: flex;
  align-items: center;
  flex-direction: column;
}
.svgcaca {
  position: absolute;
  top: 243px;
}
</style>