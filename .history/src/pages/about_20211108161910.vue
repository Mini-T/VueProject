<template>
  <div class="about">
      <Title message="PAGE A BOUT CONNARD"/>
      <Nav />
  </div>
</template>

<script>
import Nav from '../components/Nav.vue'

export default {
  name: 'About',
  components: {
   Title,
    Nav,
  },
}
</script>

<style lang="scss">
.about {
  color: white;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>