<template>
  <div class="bottom">
    <h1 class="propa">{{ propagande }}</h1>
    <div v-for="card in cards" :key="card + id" class="card">
      <h1 :id="`${card.id}`" class="cardindex">{{ card.id }}</h1>
      <h1 :id="`${card.cardtitleid}`" class="cardtitle">{{ card.cardtitle }}</h1>
      <p :id="`${card.cardcontentid}`" class="cardcontent">{{ card.cardcontent }}</p>
    </div>
  </div>
</template>

<script >
export default {
  data() {
    return {
      cards: [
        {
          id: "card1",
          cardtitle: "Choisis ton artiste",
          cardtitleid: "card1title",
          cardcontent:
            "Nous te proposons régulièrement des concerts en avant-première, choisis le concert de ton artiste préféré parmi ceux proposés",
          cardcontentid: "card1content",
        },
        {
          id: "card2",
          cardtitle: "Réserve ton billet",
          cardtitleid: "card2title",
          cardcontent:
            "buuk te propose les prix les plus attractifs du marché, plus tu réserve tôt, plus tu auras droit à un prix bas. Alors fonce, ne perds pas de temps !",
          cardcontentid: "card2content",
        },
        {
          id: "card3",
          cardtitle: "Kiffe ton concert",
          cardtitleid: "card3title",
          cardcontent:
            "Nous te proposons régulièrement des concerts en avant-première, choisis le concert de ton artiste préféré parmi ceux proposés",
          cardcontentid: "card3content",
        },
      ],
    };
  },
  name: "Bottom",
  props: {
    propagande: String,
  },
};
</script>

<style lang="scss">
.card {
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 37px;
  height: 237px;
  width: 417px;
}
.bottom {
  justify-content: center;
  widows: 100%;
  display: grid;
  grid-template: 1fr 1fr / 1fr 1fr 1fr;
  grid-template-areas:
    "propa propa propa"
    "";
}
.propa {
  grid-area: propa;
}
.cardtitle {
  background: -webkit-linear-gradient(left, #d99cf0 -2.19%, #927bf9 102.14%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  order: 2;
  align-self: flex-start;
  font-family: Sora;
  font-style: normal;
  font-weight: 800;
  font-size: 30px;
  line-height: 38px;
}
.cardcontent {
  order: 3;
  font-family: Sora;
  font-style: normal;
  font-weight: 200;
  font-size: 18px;
  line-height: 23px;

  color: #ffffff;
}
.cardindex {
  order: 1;
  align-self: flex-start;
  font-family: Sora;
  font-style: normal;
  font-weight: 800;
  font-size: 30px;
  line-height: 38px;
}
#card1{
  
}
</style>