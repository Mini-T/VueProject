<script>
  import Spinner from '../src/components/Spinner.vue'
  export default {
    components: {
      Spinner
    },
    setup() {
      return {};
    },
  };
</script>
<template>
<div id="app">
  <Spinner  />
   <router-view/>
</div>
 
</template>