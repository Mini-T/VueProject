<template>
  <div class="home">
    <Nav />
    <Header title1="Les meilleurs concerts," subtitle1="En avant-première." />
    <Carousel :artistList="artistList" />
    <Bottom propagande="buuk, le rêve des fans de concerts." />
  </div>
  <div class="prefooter">
    <PreFooter
      ad="buuk, aussi sur ton téléphone !"
      normaltext="Télécharge l’application book sur ton smartphone pour pouvoir réserver encore plus facilement et être tenu au courant grâce aux notifications des derniers concerts disponibles sur la plateforme"
    />
  </div>
  <Footer />
</template>
<script>
import axios from 'axios'
import Nav from "../components/Nav.vue";
import Header from "../components/header.vue";
import Carousel from "../components/carousel.vue";
import Bottom from "../components/bottom.vue";
import PreFooter from "../components/pre-footer.vue";
import Footer from "../components/footer.vue";

export default {
  data() {
    return {
      concertsApi:[],
  
    }
  },

  name: "Home",
  components: {
    Nav,
    Header,
    Carousel,
    Bottom,
    PreFooter,
    Footer,
  },
  mounted () {
		const bearerToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjM2MDQ0NjE4LCJleHAiOjE2Mzg2MzY2MTh9.L3GsjGPD6XaEPdjt6AVNRHXmjhXXWBcI2LyU3DjwP8E'
    axios
      .get('https://buuk-api.herokuapp.com/concerts', { headers: {"Authorization" : `Bearer ${bearerToken}`} })
      .then(response => {
        this.concertsApi = response.data.slice(0, 5)
        console.log(this.concertsApi)
        console.log(response)
      })
  }
};
</script>


<style lang="scss">
body {
  background-color: white;
}
html {
  ::-webkit-scrollbar {
    display: none;
    overflow-x: hidden;
  }
}
.home {
  padding: 0px;

  background: radial-gradient(
    51.9% 336.54% at 51.9% 50%,
    #241b4d 0%,
    #1b1b1b 100%
  );
  border-radius: 0px 0px 150px 150px;
  background-size: cover;
  background-repeat: no-repeat;
  margin: 0px;
  color: white;

  width: 100vw;
  height: 2459px;
  left: 0px;
  top: 0px;
  display: flex;
  align-items: center;
  flex-direction: column;
}
.prefooter {
  height: 780px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>