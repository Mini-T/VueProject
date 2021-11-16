<template>
  <nav class="nav">
       <div id="links">
    <h1 id="buuk">buuk</h1>
    <router-link to="/">Home</router-link>
    <router-link to="/About">About</router-link>
    <router-link to="/concerts">Concerts</router-link>
 </div>
    <p>+33 4 50 67 33 22</p>
  </nav>
</template>

<script lang="ts">
export default {
  name: 'Nav',
}
</script>

<style>
a, a:visited, a:hover {
  color: white;
}

a {
  margin: 0 15px;
}

.nav {
  width: 100vw;
  align-self: top;
  display: flex;
  align-items: center;
  margin: unset;
  font-size: 25px;
}
</style>