<template>
  <div class="bottom">
    <h1 class="propa">{{ propagande }}</h1>
    <div id=index v-for="card in cards" :key="(card + index)" class="card">
      <h1 class="cardtitle">{{ index     }}</h1>
      <p class="cardcontent">{{ cardcontent }}</p>
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
          cardcontent:"Nous te proposons régulièrement des concerts en avant-première, choisis le concert de ton artiste préféré parmi ceux proposés",
        },
        {
          id: 2,
          cardtitle:"Réserve ton billet",
          cardcontent: "buuk te propose les prix les plus attractifs du marché, plus tu réserve tôt, plus tu auras droit à un prix bas. Alors fonce, ne perds pas de temps !",
        },
        {
          id: 3,
          cardtitle: "Kiffe ton concert",
          cardcontent: "Nous te proposons régulièrement des concerts en avant-première, choisis le concert de ton artiste préféré parmi ceux proposés",
        },
      ],
    };
  },
  name: "Bottom",
  props: {
    // propagande: String,
    // cardtitle: String,
    // cardcontent: String,
  },
};
</script>

<style lang="scss">
.card {
  width: 300px;
  height: 200px;
  background-color: red;
}
</style>