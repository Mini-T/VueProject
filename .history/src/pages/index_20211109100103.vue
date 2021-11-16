<template>
  <div class="home">
      <Title title1="Les meilleurs concerts," subtitle1="En avant-première." />
      <Nav />
      <Carrousel artiste1="Angele" artiste2="Angele" artiste3="Angele" artiste4="Angele" artiste5="Angele" />
  </div>
</template>
<script>
import Nav from '../components/Nav.vue'
import Title from '../components/Title.vue'
import carrousel from '../components/carrousel.vue'

export default {
  name: 'Home',
  components: {
    Title,
    Nav,
  },
}
</script>


<style lang="scss">

.home {
  background: radial-gradient(51.9% 336.54% at 51.9% 50%, #241B4D 0%, #1B1B1B 100%);
  border-radius: 0px 0px 150px 150px;
  background-size: cover;
  background-repeat: no-repeat;
  margin: 0px;
  color: white;
  position: absolute;
  width: 1920px;
  height: 2459px;
  left: 0px;
  top: 0px;
  display: flex;
  align-items: center;
  flex-direction: column;
}
</style>