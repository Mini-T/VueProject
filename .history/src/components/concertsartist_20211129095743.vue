<template>
  <div class="card concerts" :style="`background-image:url('${artiste.fond}')`">
    <h2>{{ artiste.date }}</h2>
    <h1>{{ artiste.name }}</h1>
    <h2>{{ artiste.location }}</h2>
  </div>
</template>
<script>
export default {
  name: "concertsArtist",
  props: {
    artistName: String,
    artistDate: String,
    artistLocation: String,
    RapRnb: Array,
    artiste:Object,
  },
};
</script>
<style lang="scss">
.card.concerts {
  height: 460px;
  width: 338px;
  border-radius: 30px;
}
</style>