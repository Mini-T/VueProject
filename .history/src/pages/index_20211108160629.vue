<template>
  <div class="home">
      <Welcome message="ZEBI"/>
      <Title></Title>
      <Nav />
  </div>
</template>

<script>
import Title from 
import Welcome from '../components/Welcome.vue'
import Nav from '../components/Nav.vue'

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