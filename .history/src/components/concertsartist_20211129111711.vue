<template>
  <div class="card concerts" :style="`background-image:('${artiste.img}')`">
    <h2 class="card">{{ artiste.date }}</h2>
    <h1>{{ artiste.name }}</h1>
    <h2>{{ artiste.location }}</h2>
  </div>
</template>
<script>
export default {
  name: "concertsArtist",
  props: {
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