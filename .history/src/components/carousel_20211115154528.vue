<template>
  <div id="artistes">
    <button
      v-for="artist in artistList"
      @click="updateSelectedTab(artist.id)"
      :key="artist.id"
      class="onglet"
      :class="{ active: selectedTab === artist.id }"
    >
      {{ artist.tabId }}
      </button>
    </div>
  
</template>

<script>
export default {
  data() {
    return {
      

  name: "Carousel",
  selectedTab: "Angele",
  props: {
    
  },
};
</script>

<style lang="scss">
.desctitle {
  margin-top: 0px;
  font-weight: 800;
  font-size: 40px;
}
.descsubtitle {
  font-weight: 200;
  font-size: 25px;
  margin-bottom: 0px;
}
#reserver {
  color: white;
  background: linear-gradient(72.83deg, #d48ae6 0%, #9a82fc 100%);
  border-radius: 14px;
  border: none;
  font-size: 25px;
  font-weight: 800;
  text-transform: uppercase;
  width: 219px;
  height: 75px;
}
.left {
  padding: 50px;
  padding-left: 100px;
  width: 100%;
  justify-self: flex-start;
}
.right {
  display: flex;
  width: 100%;
  justify-content: flex-end;
  padding: 50px;
}
$hrnames: "hr1" "hr2" "hr3";
@each $hrname in $hrnames {
  ##{$hrname} {
    grid-area: #{$hrname};
  }
}
#artistes {
  width: 85vw;
  display: flex;
}
.onglet {
  font-weight: 800;
  font-size: 25px;
  border: none;
  color: white;
  border-radius: 30px 30px 0px 0px;
  width: 17vw;
  height: 10vh;
}
$names: "grid-1" "grid-2" "grid-3" "grid-4" "grid-5";
@each $name in $names {
  ##{$name} {
    grid-area: #{$name};
    background: transparent;
  }
}
.active{
  background: linear-gradient(75.5deg, #da8be3 0%, #9681fd 95.43%)
}
#image {
  background-size: cover;
  background-position: center;
  border-radius: 0px 0px 75px 75px;
  width: 85vw;
  height: 750px;
  grid-area: img;
}
#darklayer {
  border-radius: 0px 0px 75px 75px;
  display: flex;
  align-items: flex-end;
  background: linear-gradient(
    360deg,
    rgba(37, 26, 35, 0.98) 0%,
    rgba(37, 26, 35, 0) 100%
  );
  width: 100%;
  height: 100%;
}
</style>