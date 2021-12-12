<template>
<div class="wrapper" v-if="datasloaded===false">
<div class="circle circle15"></div>
</div>
  <div v-else class="home">
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
      artistList: [
        {
          id: 1,
          tabId: "Angele",
          lieu: "J'ai tout oublié",
          date: "Je sais pas",
          link: "/images/Angele.jpg",
        },
        {
          id: 2,
          tabId: "Damso",
          lieu: "Dans sa caravane",
          date: "n'importe quand",
          link: "/images/damso.jpeg",
        },
        {
          id: 3,
          tabId: "Nekfeu",
          lieu: "Pas chez son ex",
          date: "Quand il aura oublié son ex",
          link: "/images/nekfeu.jpg",
        },
        {
          id: 4,
          tabId: "Vald",
          lieu: "Dans sa chambre (celle du mec de la chambre)",
          date: "16 Juillet 2022",
          link: "/images/vald.jpg",
        },
        {
          id: 5,
          tabId: "Ziak",
          lieu: "En prison, avec tout ses copains",
          date: "12 novembre 2021",
          link: "/images/Ziak.jpg",
        },
      ],
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
  let datasloaded = false
		const bearerToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjM2MDQ0NjE4LCJleHAiOjE2Mzg2MzY2MTh9.L3GsjGPD6XaEPdjt6AVNRHXmjhXXWBcI2LyU3DjwP8E'
    axios
      .get('https://buuk-api.herokuapp.com/concerts', { headers: {"Authorization" : `Bearer ${bearerToken}`} })
      set
      .then(response => {
        this.concertsApi = response.data.slice(0, 5)
        console.log(this.concertsApi)
        console.log(response)
        console.log(datasloaded)
        datasloaded = true
      })
  }
};
</script>


<style lang="scss">
.wrapper {
  position:fixed;
  width: 100VW;
  background: white;
  height: 100VH;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5;
}
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
#bm {
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: white;
  z-index: 2;
}
.circle15 {
  position: fixed;
  
  width: 100px;
  height: 100px;
  transform: translateZ(0);
  border-radius: 50%;
  box-shadow: inset 0 0 0 25px #ff006e;
}

.circle15:before,
.circle15:after {
  position: absolute;
  border-radius: 50%;
  content: "";
  width: 50%;
  height: 100%;
}
.circle15:before {
  top: 0;
  left: 0;
  background: rgb(255, 255, 255);
  border-radius: 100px 0 0 100px;
  transform-origin: center right;
  animation: effect15 2s infinite ease 1.5s;
}
.circle15:after {
  top: 0;
  right: 0;
  background: rgb(255, 255, 255);
  border-radius: 0 100px 100px 0;
  transform-origin: center left;
  animation: effect15 2s infinite ease;
}

@keyframes effect15 {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>