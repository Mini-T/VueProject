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
    provide() {
      return{
        mySpinner: this.spin
      }
    },
    components: {
      Spinner
    },
    setup() {
      return {};
    },
  };
</script>
<template>
<div id="app" v-if="datasloaded != true" :class="{hide : datasloaded}">
  <Spinner :start="spin.val" />
  start
   <router-view />
</div>
 
</template>