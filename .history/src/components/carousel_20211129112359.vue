<template>
  <div class="artistes">
    <HomePromoNav
      :artistList="artistList"
      v-model:selectedTab="this.selectedTab"
      @update-selected-tab="this.updateSelectedTab"
    />
    <Image
      v-model:artist="artistList.filter((obj) => obj.tabId === this.selectedTab)[0]"
    />
    
  </div>
</template>

<script>
import HomePromoNav from "./HomepromoNav.vue"
import Image from "./Image.vue"
export default {
  data(){
    return {
      selectedTab: "Angele",
    }
  },
  components: { Image, HomePromoNav },
  name: "Carousel",
  
  props: {
    artistList: Array,
  },
  methods: {
    updateSelectedTab(tabId) {
      this.selectedTab = tabId;
      console.log('lksjf')
    },
  },
};
</script>

<style lang="scss">
</style>