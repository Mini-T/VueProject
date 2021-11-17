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
  transition: all ease-in 300ms;
  font-weight: 800;
  font-size: 25px;
  border-left: solid 1px;
  border-right: solid 1px;
  border-image: linear-gradient(to top, grey 20%, transparent 80% 1; 
  border-top: none;
  border-bottom: none;
  color: white;
  width: 17vw;
  height: 10vh;
  background: transparent;
  &:hover{
    background-color: #da8be313;
    border-left: solid 1px #da8be317;
  border-right: solid 1px #da8be317; 
  border-top: none;
  border-bottom: none;
  }
}
.active {
  border-radius: 30px 30px 0px 0px;
  border: none;
  background: linear-gradient(75.5deg, #da8be3 0%, #9681fd 95.43%);
}
</style>
