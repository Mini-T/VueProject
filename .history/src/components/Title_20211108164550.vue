<template>
  <div class="welcome">
    <h1 class="bigtitle">{{ title1 }}</h1>
    <h2 class="subtitle">{{subtitle1}}</h2>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Title',
  props: {
    title1: String,
    subtitle1:String,
    
  },
}
</script>
<style lang="scss">
  .bigtitle{
        font-size: 60px;
  }
  .subtitle{
      font-size: 50px;
      font: webkit-linear-gradient(89.6deg, #D99CF0 -2.19%, #927BF9 102.14%);
    
      }
</style>