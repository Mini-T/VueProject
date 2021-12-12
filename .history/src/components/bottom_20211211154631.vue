<template>
  <div class="bottom">
    <h1 class="propa">{{ propagande }}</h1>
    
    <div v-for="card in cards" :key="card + id" class="card">
      <div class="wrap">
        <h1 :id="`${card.id}`" class="cardindex">{{ card.index }}</h1>
        <h1 :id="`${card.cardtitleid}`" class="cardtitle">
          {{ card.cardtitle }}
        </h1>
        <p :id="`${card.cardcontentid}`" class="cardcontent">
          {{ card.cardcontent }}
        </p>
      </div>
    </div>
   
  </div>
</template>

<script >
export default {
  data() {
    return {
      cards: [
        {
          index: 1,
          id: "card1",
          cardtitle: "Choisis ton artiste",
          cardtitleid: "card1title",
          cardcontent:
            "Nous te proposons régulièrement des concerts en avant-première, choisis le concert de ton artiste préféré parmi ceux proposés",
          cardcontentid: "card1content",
        },
        {
          index: 2,
          id: "card2",
          cardtitle: "Réserve ton billet",
          cardtitleid: "card2title",
          cardcontent:
            "buuk te propose les prix les plus attractifs du marché, plus tu réserve tôt, plus tu auras droit à un prix bas. Alors fonce, ne perds pas de temps !",
          cardcontentid: "card2content",
        },
        {
          index: 3,
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
  margin: 10px;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 37px;
  width: 337px;
  padding-left: 40px;
  padding-right: 40px;
  height: 237px;
}
.wrap{
  position: relative;
  bottom: 25%;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
}
.bottom {
  margin-top: 200px;
  justify-content: center;
  display: grid;
  grid-template: 1fr 1fr / 1fr 1fr 1fr;
  grid-template-areas:
    "propa propa propa"
    "card1 card2 card3";
}
.propa {
  z-index: 1;
  grid-area: propa;
  font-size: 60px;
  text-align: center;
}
.cardtitle {
  background: -webkit-linear-gradient(left, #d99cf0 -2.19%, #927bf9 102.14%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  order: 1;
  align-self: flex-start;
  font-family: Sora;
  font-style: normal;
  font-weight: 800;
  margin: 0px;
  font-size: 30px;
  line-height: 38px;
}
.cardcontent {
  order: 2;
  font-family: Sora;
  font-style: normal;
  font-weight: 200;
  font-size: 18px;
  line-height: 23px;

  color: #ffffff;
}
.cardindex {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 70px;
  width: 70px;
  background: linear-gradient(135deg, #d79cf1 0%, #967df9 100%);
  border-radius: 14px;
  order: 0;
  align-self: flex-start;
  font-family: Sora;
  font-style: normal;
  font-weight: 800;
  font-size: 35px;
  line-height: 38px;
}
#card1 {
  grid-area: card1;
}
#card2 {
  grid-area: card2;
}
#card3 {
  grid-area: card3;
}
#svgpropa {
  position: absolute;
  left: 20%;
  bottom: 24%;

}
</style>