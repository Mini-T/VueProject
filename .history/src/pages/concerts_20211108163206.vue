<template>
  <div class="concerts">
       <Title title1="OHAZOIHFIOZE" subtitle1="okzdfj" />
      <Nav />
  </div>
</template>

<script>
import Nav from '../components/Nav.vue'
import Title from '../components/Title.vue'

export default {
  name: 'Concerts',
  components: {
    Title,
    Nav,
  },
}
</script>

<style lang="scss">
.concerts {
  color: white;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>