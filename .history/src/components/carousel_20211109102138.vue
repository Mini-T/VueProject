<template>
  <button class="onglet">{{ artiste1 }}</button>
  <button class="onglet">{{ artiste2 }}</button>
  <button class="onglet">{{ artiste3 }}</button>
  <button class="onglet">{{ artiste4 }}</button>
  <button class="onglet">{{ artiste5 }}</button>
  <div id="image">{{ test }}</div>
</template>

<script lang="ts">
export default {
  name: "carousel",
  props: {
    artiste1: String,
    artiste2: String,
    artiste3: String,
    artiste4: String,
    artiste5: String,
  },
};
</script>

<style>
.onglet {
    background: linear-gradient(75.5deg, #DA8BE3 0%, #9681FD 95.43%);
border-radius: 30px 30px 0px 0px; 
z-index: 1;
}
#image {
  background-image: url("https://picsum.photos/200/300?random=1");
  background-size: cover;

  width: 1740px;
  height: 766px;
}
</style>