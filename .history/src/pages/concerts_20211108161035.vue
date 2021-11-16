<template>
  <div class="about">
      <Welcome message="CON, SERS"/>
      <Nav />
  </div>
</template>

<script>
import title from '../components/Title.vue'
import Nav from '../components/Nav.vue'

export default {
  name: 'About',
  components: {
    Welcome,
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