<template>
  <div class="slider">
    <h1 class="styletitle">{{ musicstyle1 }}</h1>
    <div class="card concerts"></div>
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
.card.concerts{
    height: 460px;
width: 338px;

border-radius: 30px;

}
.styletitle {
    background: linear-gradient(89.6deg, #211c39 -2.19%, #927bf9 102.14%);
    -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.slider {
  display: flex;
  width: 90%;
  margin: auto;
  margin-top: 5vh;
  margin-bottom: 5vh;
  height: 30vh;
  background: #f3eeff;
  padding: 30px;
  border-radius: 47px;
}
</style>