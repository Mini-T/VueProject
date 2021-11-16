<template>
  <div class="about">
       <Title title1="OHAZOIHFIOZE" subtitle1="okzdfj" />
      <Nav />
  </div>
</template>

<script>
import Nav from '../components/Nav.vue'
import Title from '../components/Title.vue'

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