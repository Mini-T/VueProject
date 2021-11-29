<template>
  <div class="slider">
    <h1>{{ musicstyle1 }}</h1>
  </div>
  <div class="slider">
    <h1>{{ musicstyle2 }}</h1>
  </div>
  <div class="slider">
    <h1>{{ musicstyle3 }}</h1>
  </div>
</template>
<script>
export default {
  name: "stylelist",
  props: {
    musicstyle1: String,
    musicstyle1: String,
    musicstyle3: String,
  },
};
</script>
<style lang="scss">
.slider {
  display: flex;
  width: 90%;
  margin: auto;
  margin-top: 5vh;
  margin-bottom: 5vh;
  height: 30vh;
  background: red;
}
</style>