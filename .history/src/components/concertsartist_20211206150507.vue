<template>
  <swiper-slide class="card concerts" :style="`background-image:url('${artiste.img}')`">
    <h2 class="lildate">{{ artiste.date }}</h2>
    <h1 class="artisttitle">{{ artiste.name }}</h1>
    <h2 class="regularloc">{{ artiste.location }}</h2>
  </swiper-slide>
</template>
<script>
export default {
  import SwiperSlide from 'swiper/vue';
  name: "concertsArtist",
  props: {
    artiste: Object,
  },
  components : {
     SwiperSlide
  },
};

</script>
<style lang="scss">
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
.card.concerts {
    background-size: cover;
    background-position: center;
    flex-direction: row;
  display: grid;
  grid-template: 30px 1FR 10% / 1fr 1fr;
  grid-template-areas:  ". lildate"
                        "artisttitle artisttitle"
                        "regularloc regularloc";
  color: white;
  height: 460px;
  padding: 20px;
  width: 338px;
  border-radius: 30px;
}
</style>