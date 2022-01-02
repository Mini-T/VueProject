<template>
  <div class="home concerts">
      <Nav />
      <Header title1="Tous les concerts," subtitle1="en avant premiere." />
  </div>
  <div class="stylelist">
    <stylelist />
  </div>
</template>

<script>
import Nav from '../components/Nav.vue'
import Header from '../components/header.vue'
import stylelist from '../components/stylelist.vue'

export default {
  name: 'Concerts',
  components: {
    Header,
    Nav,
    stylelist,
  },
}
</script>

<style lang="scss">
.stylelist{
  display: flex;
  height: ;
}
.home.concerts {
  color: white;
  height: 611px;
  width: 100%;
  display: flex;
  flex-direction: column;
}
</style>