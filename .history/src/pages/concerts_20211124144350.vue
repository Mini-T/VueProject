<template>
  <div class="home concerts">
      <Nav />
      <Header />
  </div>
</template>

<script>
import Nav from '../components/Nav.vue'
import Title from '../components/header.vue'

export default {
  name: 'Concerts',
  components: {
    Title,
    Nav,
  },
}
</script>

<style lang="scss">
.home.concerts {
  color: white;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
}
</style>