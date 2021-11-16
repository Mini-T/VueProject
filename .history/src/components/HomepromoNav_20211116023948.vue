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
    data(){
        return{
             artistList: [
        {
          id: 1,
          tabId: "Angele",
          lieu: "Lyon, Palais des sports",
          date: "15 décembre 2020",
          link: "/images/Angele.jpg",
        },
        {
          id: 2,
          tabId: "Damso",
          lieu: "Lyon, Palais des sports",
          date: "15 décembre 2020",
          link: "/images/Ziak.jpg",
        },
        {
          id: 3,
          tabId: "Nekfeu",
          lieu: "Lyon, Palais des sports",
          date: "15 décembre 2020",
          link: "/images/Angele.jpg",
        },
        {
          id: 4,
          tabId: "Vald",
          lieu: "Lyon, Palais des sports",
          date: "15 décembre 2020",
          link: "/images/Angele.jpg",
        },
        {
          id: 5,
          tabId: "Ziak",
          lieu: "Lyon, Palais des sports",
          date: "15 décembre 2020",
          link: "/images/Ziak.jpg",
        },
      ],
    };
  },
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
