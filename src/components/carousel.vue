<template>
  <div class="artistes">
    <HomePromoNav
      :artistList="artistList"
      v-model:selectedTab="this.selectedTab"
      @update-selected-tab="this.updateSelectedTab"
    />
    <Image
      :artistList="artistList"
      v-model:artist="artistList.filter((obj) => obj.tabId === 'Angele')[0]"
      cta ="Réserver"
    />
    
  </div>
</template>

<script>
import HomePromoNav from "./HomepromoNav.vue"
import Image from "./Image.vue"
export default {
  components: { Image, HomePromoNav },
  name: "Carousel",
  selectedTab: "Angele",
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