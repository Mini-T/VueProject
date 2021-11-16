<template>
    <button class="onglet">{{artiste1}}</button>
    <button class="onglet">{{artiste2}}</button>
    <button class="onglet">{{artiste3}}</button>
    <button class="onglet">{{artiste4}}</button>
    <button class="onglet">{{artiste5}}</button>
    <div id="image"></div>
</template>

<script lang="ts">
export default {
  name: 'carrousel',
   props: {
    artiste1: String,
    artiste2: String,
    artiste3: String,
    artiste4: String,
    artiste5: String,
  },
}
</script>

<style>
    #image{
        width: ;
        background-image: url('https://picsum.photos/200/300?random=1');
    }
</style>