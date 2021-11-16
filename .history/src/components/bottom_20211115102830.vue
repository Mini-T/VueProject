<template>
  <div class="bottom">
    <h1 class="propa">{{ propagande }}</h1>
    <div v-for="card in cards" :key="card + id" class="card">
      <h1 class="cardtitle">{{ card.id }}</h1>
      <p class="cardcontent">{{ card.cardcontent }}</p>
    </div>
  </div>
</template>

<script >
export default {
  data() {
    return {
      cards: [
        {
          id: 1,
          cardtitle: "Choisis ton artiste",
          cardcontent:
            "Nous te proposons régulièrement des concerts en avant-première, choisis le concert de ton artiste préféré parmi ceux proposés",
        },
        {
          id: 2,
          cardtitle: "Réserve ton billet",
          cardcontent:
            "buuk te propose les prix les plus attractifs du marché, plus tu réserve tôt, plus tu auras droit à un prix bas. Alors fonce, ne perds pas de temps !",
        },
        {
          id: 3,
          cardtitle: "Kiffe ton concert",
          cardcontent:
            "Nous te proposons régulièrement des concerts en avant-première, choisis le concert de ton artiste préféré parmi ceux proposés",
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
  width: 300px;
  height: 200px;
  margin: 10px;
  background: rgba(0, 0, 0, 0.2);
border-radius: 37px;
}
.bottom {
  display: grid;
  grid-template: 1fr 1fr / 1fr 1fr 1fr;
  grid-template-areas:
    "propa propa propa"
    "";
}
.propa {
  grid-area: propa;
}
.cardtitle{
  font-family: Sora;
font-style: normal;
font-weight: 800;
font-size: 30px;
line-height: 38px;
}
.cardcontent{
  
}
</style>