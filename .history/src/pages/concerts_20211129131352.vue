<template>
  <div class="home concerts">
    <Nav />
    <Header title1="Tous les concerts," subtitle1="en avant premiere." />
  </div>
  <div class="stylelist">
    <Stylelist :RapRnb="RapRnb" musicstyle1="Rap/Rnb" />
  </div>
  <Footer />
</template>

<script>
import Nav from "../components/Nav.vue";
import Header from "../components/header.vue";
import Stylelist from "../components/stylelist.vue";
import Footer from "../components/footer.vue";

export default {
  data() {
    return {
      RapRnb: [
        {
          id: 1,
          name: "Dadju",
          location: "Marseille, Vélodrome",
          date: "Le 20 janvier 2022",
          img: "https://picsum.photos/200/300?random=1" 
        },
        {
          id: 2,
          name: "Damso",
          location: "Stade Mager, Chambéry",
          date: "20 Janvier 2022",
          img: "https://picsum.photos/200/300?random=1", 
        },
        {
          id: 3,
          name: "Angèle",
          location: "Parc des sports, Annecy",
          date: "20 Janvier 2022",
          img: "https://picsum.photos/200/300?random=1",
        },
        {
          id: 4,
          name: "Louane",
          location: "Le phare, Chambéry",
          date: "20 Janvier 2022",
          img: "https://picsum.photos/200/300?random=1",
        },
        {
          id: 5,
          name: "Amir",
          location: "Marseille, Vélodrome",
          date: "20 Janvier 2022",
          img: "https://picsum.photos/200/300?random=1",
        },
      ],Variété
    }
  },
  name: "Concerts",
  components: {
    Header,
    Nav,
    Stylelist,
    Footer,
  },
};
</script>

<style lang="scss">
.stylelist {
  height: 100%;
  width: 100%;
}
.home.concerts {
  color: white;
  height: 611px;
  width: 100%;
  display: flex;
  flex-direction: column;
}
</style>