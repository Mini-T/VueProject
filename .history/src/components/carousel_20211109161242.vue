<template>
  <div id="artistes">
    <button id="grid-1" class="onglet">{{ artiste1 }}</button>
    <button id="grid-2" class="onglet">{{ artiste2 }}</button>
    <hr id="hr1" />
    <button id="grid-3" class="onglet">{{ artiste3 }}</button>
    <hr id="hr2" />
    <button id="grid-4" class="onglet">{{ artiste4 }}</button>
    <hr id="hr3" />
    <button id="grid-5" class="onglet">{{ artiste5 }}</button>
    <div id="image">
      <div class="left">
        <h1 class="desctitle">
          {{ date }}
        </h1>
        <h2 class="descsubtitle">{{ lieu }}</h2>
      </div>
      <div class="right">
        <button id="reserver">{{ cta }}</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "Carousel",
  props: {
    artiste1: String,
    artiste2: String,
    artiste3: String,
    artiste4: String,
    artiste5: String,
    date: String,
    lieu: String,
    cta: String,
  },
};
</script>

<style lang="scss">
#reserver{
  border: none;
  font-size:25px;
  padding: 22px 40px 22px 40px
}
.left{
  width: 100%;
  justify-self: flex-start;
}
.right{
  padding: 53px;
  justify-self: flex-end;
}
$hrnames: "hr1" "hr2" "hr3";
@each $hrname in $hrnames {
  ##{$hrname} {
    grid-area: #{$hrname};
  }
}
#artistes {
  width: 85vw;
  height: 90vh;
  display: grid;
  grid-template-rows: 10vh 3fr;
  grid-template-columns: 1fr 1fr 1px 1fr 1px 1fr 1px 1fr;
  grid-template-areas:
    "grid-1 grid-2 hr1 grid-3 hr2 grid-4 hr3 grid-5"
    "img img img img img img img img";
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
#grid-1 {
  background: linear-gradient(75.5deg, #da8be3 0%, #9681fd 95.43%);
}
#image {
  display: flex;
  grid-area: img;
  background-image: url("https://picsum.photos/200/300?random=1");
  background-size: cover;
  width: 100%;
  align-items: flex-end;
}
</style>