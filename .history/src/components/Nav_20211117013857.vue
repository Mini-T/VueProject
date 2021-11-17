<template>
  <nav class="nav">
    <h1 id="buuk">buuk</h1>
    <div id="links">
      <hr class="navhr" />
      <router-link class="link" to="/">Home</router-link>
      <router-link class="link" to="/About">About</router-link>
      <router-link class="link" to="/concerts"
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
  width: min-content;
  transition: all ease-in 300ms;
  border-bottom: solid 1px transparent ;
  padding-bottom: 15px;
  &:hover{
    padding-bottom: 10px;
    color: rgb(255, 255, 255);
    border-bottom: solid 1px rgb(255, 149, 255);
    
  }
  transition: all ease-in 300ms;
  margin: 0px 25px 0px 25px;
  padding: 10PX;
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