<template>
  <div class="home concerts">
      <Nav />
      <Header title1="Tous les concerts," subtitle1="en avant premiere." />
  </div>
  <div class="stylelist">
    <stylelist musicstyle1="rap/rnb" musicstyle2="Variété Française" musicstyle3="Electro" />
  </div>
  <Footer />
</template>

<script>
import Nav from '../components/Nav.vue'
import Header from '../components/header.vue'
import stylelist from '../components/stylelist.vue'
import Footer from '../components/footer.vue'

export default {
  data(){
    return{

    }
  },
  name: 'Concerts',
  components: {
    Header,
    Nav,
    stylelist,
    Footer,
  },
}
</script>

<style lang="scss">
.stylelist{
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