<template>
  <div id="image" :style="`background-image:url('${artist.link}')`">
    <div id="darklayer">
      <div class="left">
        <h1 class="desctitle">
          {{ artist.date }}
        </h1>
        <h2 class="descsubtitle">{{ artist.lieu }}</h2>
      </div>
      <div class="right">
        <button id="reserver">Réserver</button>
      </div>
    </div>
  </div>
</template>
<script>


export default {
    name:"Image",
    props:{
        artistList:Array,
        cta: String,
        artist: Object,
    }
}
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
  &:hover{
    background: linear-gradient(72.83deg, #dfacec 0%, #c3b4ff 100%);
    box-shadow: ;
  }
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