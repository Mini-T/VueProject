<template>
  <div id="artistes">
    <button
      v-for="artist in artistList"
      @click="updateSelectedTab(artist.id)"
      :key="artist.id"
      class="onglet"
      :class="{ active: selectedTab === artist.id }"
    >
      {{ artist.tabId }}
    </button>
    <hr>
  </div>
</template>

<script>
import Image from "../components/PromoImage.vue"
export default {
  data() {
    return {
      name: "Carousel",
      
      selectedTab: "Angele",
      props: {},
    };
  },
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
}
.active {
  background: linear-gradient(75.5deg, #da8be3 0%, #9681fd 95.43%);
}

</style>