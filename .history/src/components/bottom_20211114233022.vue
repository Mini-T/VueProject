<template>
  <div class="bottom">
      <h1 class="propa">{{propagande}}</h1>
      <div v-for="card in cards" :key="card.cardtitle" class="card"> 
        <h1 class="cardtitle">{{cardtitle}}</h1>
        <p class="cardcontent">{{cardcontent}}</p>
      </div>
  </div>
</template>

<script >

export default {
  data() {
    return {
        cards: [
            {
                id:1,
                cardtitle:String,
                cardcontent:String
            },
            {
                id:2,
                cardtitle:String,
                cardcontent:String,
            },
            {
                id:3,
                cardtitle:String,
                cardcontent:String
            }
        ]
    };
  },
  name: "Bottom",
  props: {
  },
};
</script>

<style lang="scss">
    .card
</style>