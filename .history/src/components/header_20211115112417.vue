<template>
  <div class="header">
    <h1 class="bigtitle">{{ title1 }}</h1>
    <h2 class="subtitle">{{ subtitle1 }}</h2>
  </div>
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
</template>

<script lang="ts">
export default {
  name: "Header",
  props: {
    title1: String,
    subtitle1: String,
  },
};
</script>
<style lang="scss">
.header {
height: 53vh;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
z-index: 1;
}
.bigtitle {
  margin: 0px;
  line-height: 75px;
  font-size: 60px;
}
.subtitle {
  margin: 0px;
  text-align: center;
  font-size: 50px;
  background: -webkit-linear-gradient(left, #d99cf0 -2.19%, #927bf9 102.14%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
#svgcaca {
  position: absolute;
  top: 243px;
}
</style>