<template>
  <div class="home">
    <Title title1="Les meilleurs concerts," subtitle1="En avant-première." />
    <Nav />
    
    <svg
      class="svgcaca"
      width="217"
      height="211"
      viewBox="0 0 217 211"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
    
      <path
        d="M191.343 51.6972C201.535 73.2841 205.995 87.6163 211.516 115.75C217.037 144.061 223.407 186.527 203.022 202.451C182.636 218.376 135.283 207.937 89.4164 190.95C43.5496 174.141 -1.04314 150.785 0.0185889 126.72C1.08032 102.656 47.5842 77.8846 80.0731 51.8741C112.562 26.0407 131.249 -1.0314 148.449 0.030247C165.649 0.914955 181.362 29.9334 191.343 51.6972Z"
        fill="#1C1637"/>
    </svg>
    <Carousel :artiste1="" />
  </div>
</template>
<script>
import Nav from "../components/Nav.vue";
import Title from "../components/Title.vue";
import Carousel from "../components/carousel.vue";
export default {
  name: "Home",
  components: {
    Title,
    Nav,
    Carousel,
  },
};
</script>


<style lang="scss">
.home {
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