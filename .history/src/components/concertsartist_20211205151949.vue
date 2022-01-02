<template>
  <div class="card concerts" :style="`background-image:url('${artiste.img}')`">
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
  width: 100%;
  font-size: 30px;
  align-self: flex-end;
  order: 1;
  font-weight: 800;

}
.lildate {
  font-weight: 400;
    width: 100%;
    justify-self: flex-end;
    font-size: 14px;
}
.regularloc {
 align-self: flex-end;
  font-weight: 300;
  font-size: 20px;
}
.card.concerts {
    background-size: cover;
    background-position: center;
    flex-direction: row;
  display: flex;
  color: white;
  height: 460px;
  width: 338px;
  border-radius: 30px;
}
</style>