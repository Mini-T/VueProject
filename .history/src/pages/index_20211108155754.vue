<template>
  <div class="home">
      <Welcome message="ZEBI"/>
      <Nav />
  </div>
</template>

<script>
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
.welcome{
  color: ;
  }
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