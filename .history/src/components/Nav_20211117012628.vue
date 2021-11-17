<template>
  <nav class="nav">
    <h1 id="buuk">buuk</h1>
    <div id="links">
      <hr class="navhr" />
      <router-link id="Home" class="link" to="/">Home</router-link>
      <router-link id="About" class="link" to="/About">About</router-link>
      <router-link id="Concerts" class="link" to="/concerts"
        >Concerts</router-link
      >
    </div>
    <h1 id="number">+33 4 50 67 33 22</h1>
  </nav>
</template>

<script lang="ts">
export default {
  name: "Nav",
};
</script>

<style lang="scss">
#Home {
}
#About {
}
#Concerts {
  width: min-content;
  transition: all ease-in 300ms;
  border-bottom: solid 1px transparent ;
  &:hover{
    border-bottom: solid 1px pink;
    
  }
 
}
a{
  color: white;
  text-decoration: none;
}

#links {
  width: 100%;
  order: 2;
  height: 100%;
  display: flex;
  align-items: center;
}

.link {
  transition: all ease-in 300ms;
  padding: 0px 20px 0px 50px;
}
#number {
  font-size: 20px;
  font-weight: lighter;
  justify-self: flex-end;
  order: 3;
  width: 250px;
  padding: 20px;
}
#buuk {
  order: 1;
  margin: 0px;
  font-weight: 800;
  font-size: 30px;
  padding: 20px 25px 20px 25px;
}
.navhr {
  height: 75px;
  border: 1px solid #595959;
  margin: 0px 15px 0px 15px;
}
.nav {
  border-bottom: 1px solid #595959;
  height: 75px;
  width: 100%;
  display: flex;
  align-items: center;
  margin: unset;
  font-size: 20px;
  font-weight: 300;
}
</style>