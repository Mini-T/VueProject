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
    artiste: Object,
  },
};
</script>
<style lang="scss">
.artisttitle {
  font-size: 30px;
  align-self: flex-end;
  order: 2;
}
.lildate {
    order: 1;
  justify-self: flex-end;
  font-size: 14px;
}
.regularloc {
    align-self: flex-end    ;
    order: 3;
  font-size: 20px;
}
.card.concerts {
  display: flex;
  color: white;
  height: 460px;
  width: 338px;
  border-radius: 30px;
}
</style>