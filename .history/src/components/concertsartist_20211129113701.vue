<template>
  <div class="card concerts" :style="`background:'${artiste.img}'`">
    <h2 class="lildate">{{ artiste.date }}</h2>
    <h1 class="artisttitle">{{ artiste.name }}</h1>
    <h2 class="regularloc">{{ artiste.location }}</h2>
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
.artisttitle{
    font-size: 30px;
}
.lildate{
    justify-self: flex-end;
    font-size: 14px;
}
.regularloc{
    font-size: 20px;
}
.card.concerts {
    display: flex;
  height: 460px;
width: 338px;

border-radius: 30px;

}
</style>