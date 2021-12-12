<template>
  <div class="cardconcerts" :style="`background-image:url('${artiste.img}')`">
    <div class="darklayer pos">
      <h2 class="lildate">{{ artiste.date }}</h2>
      <h1 class="artisttitle">{{ artiste.name }}</h1>
      <h2 class="regularloc">{{ artiste.location }}</h2>
    </div>
  </div>
</template>
<script>
export default {
  name: "concertsArtist",
  props: {
    artiste: Object,
  },
  components: {},
};
</script>
<style lang="scss">
.darklayer.pos {
  width: 100%;
  height: 100%;
  z-index: 5;
  display: grid;
  grid-template: 30px 1fr 10% / 1fr 1fr;
  grid-template-areas:
    ". lildate"
    "artisttitle artisttitle"
    "regularloc regularloc";
  color: white;
  border-radius: 30px;
}
.artisttitle {
  grid-area: artisttitle;
  font-size: 30px;
  align-self: flex-end;
  order: 2;
  font-weight: 800;
}
.lildate {
  font-weight: 400;
  grid-area: lildate;
  justify-self: flex-end;
  font-size: 14px;
}
.regularloc {
  width: 100%;
  grid-area: regularloc;
  order: 1;
  align-self: flex-end;
  font-weight: 300;
  font-size: 20px;
}
.cardconcerts {
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: cover;
  background-position: center;
  height: 460px;
  margin: 21px;
  padding: 20PX;
  width: 338px;
  border-radius: 30px;
}
</style>