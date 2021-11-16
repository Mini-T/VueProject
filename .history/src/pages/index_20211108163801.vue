<template>
  <div class="home">
      <Title title1="OHAZOIHFIOZE" subtitle1="okzdfj" />
      <Nav />
  </div>
</template>

<script>
import Nav from '../components/Nav.vue'
import Title from '../components/Title.vue'

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
  color: white;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
}
</style>