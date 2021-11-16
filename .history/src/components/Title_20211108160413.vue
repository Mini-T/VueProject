<template>
  <div class="welcome">
    <h1>{{ title1 }}</h1>
    <h2></h2>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Title',
  props: {
    message: String,
  },
}
</script>
<style lang="scss">
  .welcome{
    color: red;
    }
</style>