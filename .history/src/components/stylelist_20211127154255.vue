<template>
  <div class="slider">
    <h1 class="styletitle">{{ musicstyle1 }}</h1>
  </div>
  <div class="slider">
    <h1 class="styletitle">{{ musicstyle2 }}</h1>
  </div>
  <div class="slider">
    <h1 class="styletitle">{{ musicstyle3 }}</h1>
  </div>
</template>
<script>
export default {
  name: "stylelist",
  props: {
    musicstyle1: String,
    musicstyle2: String,
    musicstyle3: String,
  },
};
</script>
<style lang="scss">
.styletitle{
    
}
.slider {
  display: flex;
  width: 90%;
  margin: auto;
  margin-top: 5vh;
  margin-bottom: 5vh;
  height: 30vh;
  background: #F3EEFF;
  padding: 30px;
  border-radius: 47px;
}
</style>