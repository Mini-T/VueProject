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
<!-- <div id="app" v-if="!datasloaded===true">
  <Spinner :start="spin.val" />
   <router-view />
</div> -->
 
</template>