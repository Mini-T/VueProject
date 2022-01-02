<script>
  import Spinner from '../src/components/Spinner.vue'
  export default {
    data() {
      return{
        spin: {
          val: false
        }
      }
    },
    provide()
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
  <Spinner :start="spin" />
   <router-view />
</div>
 
</template>