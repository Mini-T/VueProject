<template>
      <div id="artistes">
    <button
      v-for="artist in artistList"
      @click="updateSelectedTab(artist.id)"
      :key="artist.id"
      class="onglet"
      :class="{ active: selectedTab === artist.id }">
      {{ artist.tabId }}
    </button>
</template>
<script>
export default {
    name:"HomePromoNav",
    props: {
        artistList:Array,
        selected
    }
}
</script>
