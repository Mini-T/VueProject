<template>
  <div class="header">
    <h1 class="bigtitle">{{ title1 }}</h1>
    <h2 class="subtitle">{{ subtitle1 }}</h2>
  </div>
</template>

<script lang="ts">
export default {
  name: "Title",
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
</style>