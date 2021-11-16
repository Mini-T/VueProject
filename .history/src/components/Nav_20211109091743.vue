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
  name: 'Nav',
}
</script>

<style>
a, a:visited, a:hover {
  color: white;
  text-decoration: none;
}

a {
  margin: 0 15px;
  
}
#links{
  height: 100%;
  display: flex;
  padding: 0px 20px 0px 25px;
  align-items: center;
  }
  
.link{
  padding:;
}
.nav {
  border: 1px solid #595959 ;
  justify-content:space-between;
  height: 75px;
  width: 100%;
  display: flex;
  align-items: center;
  margin: unset;
  font-size: 25px;
}
#number{

  padding: 20px;
  }
#buuk{
    padding: 25px 20px 20px 25Px;
    }
.navhr{
    height: 75px;
    border: 1px solid #595959;
    margin: 0px 20px  0px   20px;
}
</style>