<template>
  <div class="welcome">
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
 .welcome{
     display: flex;
     height: 100%;
     align-self: center;
     z-index: 1;
     order: 1;
    }
.bigtitle {
  font-size: 60px;
}
.subtitle {
  font-size: 50px;
  background: -webkit-linear-gradient(left, #d99cf0 -2.19%, #927bf9 102.14%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>