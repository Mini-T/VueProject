<template>
      <div id="artistes">
    <button
      v-for="artist in artistList"
      @click="updateSelectedTab(artist.tabId)"
      :key="artist.id"
      class="onglet"
      :class="{ active: selectedTab === artist.tabId }">
      {{ artist.tabId }}
    </button>
    </div>
</template>
<script>
export default {
    import artistList from ""
    name:"HomePromoNav",
    props: {
        artistList:Array,
        selectedTab:String,
    },
    methods: {
      updateSelectedTab(tabId) {
          this.$emit("updateSelectedTab", tabId)
      }
  }
}

</script>
