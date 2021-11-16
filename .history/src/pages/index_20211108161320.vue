<template>
  <div class="home">
      <Title message>
      <Nav />
  </div>
</template>

<script>

import Nav from '../components/Nav.vue'
import Title from '../components/Title.vue'

export default {
  name: 'Home',
  components: {
    Welcome,
    Nav,
  },
}
</script>

<style lang="scss">

.home {
  color: white;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>