<template>
  <div class="welcome">
    <h1>{{ title1 }}</h1>
    <h2>{{subtitle1}}</h2>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Title',
  props: {
    title1: String,
    
  },
}
</script>
<style lang="scss">
  .welcome{
    color: red;
    }
</style>