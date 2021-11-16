<template>
  <div class="artistes">
    <HomePromoNav :artistList="artistList" 
        v-model:selectedTab="this.selectedTab" 
        @update-selected-tab="this.updateSelectedTab" />
    <Image
      v-modelartist"
      cta="Reserver"
    />
  </div>
</template>

<script>
import HomePromoNav from "./HomepromoNav.vue"
import Image from "./Image.vue";
export default {
  data() {
    return {};
  },
  name: "Carousel",
  components: {
    Image,
    HomePromoNav,
  },
  selectedTab: "Angele",
  props: {
    artistList: Array,
    selectedTab: String,
  },
  methods: {
    updateSelectedTab(tabId) {
          this.selectedTab = tabId
      }
  }
  
};
</script>

<style lang="scss">
#artistes {
  width: 85vw;
  display: flex;
}
.onglet {
  font-weight: 800;
  font-size: 25px;
  border: none;
  color: white;
  border-radius: 30px 30px 0px 0px;
  width: 17vw;
  height: 10vh;
  background: transparent;
}
.active {
  background: linear-gradient(75.5deg, #da8be3 0%, #9681fd 95.43%);
}
</style>