<template>
  <nav class="nav">
    <div id="links">
    <h1 id="buuk">buuk</h1>
    <hr class="navhr">
    <router-link class="link" to="/">Home</router-link>
    <router-link class="link" to="/About">About</router-link>
    <router-link class="link"  to="/concerts">Concerts</router-link>
 </div>
    <p id="number">+33 4 50 67 33 22</p>
  </nav>
</template>

<script lang="ts">
export default {
  name: 'carrousel',
}
</script>

<style>

</style>