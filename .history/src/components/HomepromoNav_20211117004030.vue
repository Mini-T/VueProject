<template>
  <div id="artistes">
    <button
      v-for="artist in artistList"
      @click="updateSelectedTab(artist.tabId)"
      :key="artist.tabId"
      class="onglet"
      :class="{ active: selectedTab === artist.tabId }"
    >
      {{ artist.tabId }}
    </button>
  </div>
</template>
<script>
export default {
  name: "HomePromoNav",
  props: {
    artistList: Array,
    selectedTab: String,
  },

  methods: {
    updateSelectedTab(tabId) {
      this.$emit("updateSelectedTab", tabId);
    },
  },
};
</script>
<style lang="scss">

#artistes {
  width: 85vw;
  display: flex;
  flex-direction: row;
}
.onglet {
  border: solid 1;
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
  border: none;
  background: linear-gradient(75.5deg, #da8be3 0%, #9681fd 95.43%);
}
</style>
