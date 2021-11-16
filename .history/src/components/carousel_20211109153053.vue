<template>
<div id="artistes">
  <button id="grid-1" class="onglet">{{ artiste1 }}</button>
  <button id="grid-2" class="onglet">{{ artiste2 }}</button>
    <hr id="hr1">
  <button id="grid-3" class="onglet">{{ artiste3 }}</button>
    <hr id="hr2">
  <button id="grid-4" class="onglet">{{ artiste4 }}</button>
    <hr id="hr3">
  <button id="grid-5" class="onglet">{{ artiste5 }}</button>
  <div id="image">{{ test }}</div>
  </div>
</template>

<script lang="ts">
export default {
  name: "Carousel",
  props: {
    artiste1 : String,
    artiste2 : String,
    artiste3 : String,
    artiste4 : String,
    artiste5 : String,
    test : String,
  },
};
</script>

<style lang="scss">
for $i form
#artistes{
  width: 85vw;
  height: 90vh;
  display: grid;
  grid-template-rows: 10vh 3fr;
  grid-template-columns: 1FR 1FR 1PX 1FR 1PX 1FR 1PX 1Fr;
  grid-template-areas:  "grid-1 grid-2 hr grid-3 hr grid-4 hr  grid-5"
                        "img img img img img";
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
$names: 'grid-1' 'grid-2' 'grid-3' 'grid-4' 'grid-5';
@each $name in $names {
  ##{$name} {
    grid-area: #{$name};
    background: transparent;;
  }
}
    #grid-1{
      background: linear-gradient(75.5deg, #DA8BE3 0%, #9681FD 95.43%);
    }
#image{
  grid-area: img;
  background-image: url('https://picsum.photos/200/300?random=1');
  background-size: cover;
  width:100%;
}
</style>