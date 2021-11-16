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
      }
</style>