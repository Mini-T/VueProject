<template>
    <button class="onglet">{{artiste1}}</button>
    <button class="onglet">{{artiste1}}</button>
    <button class="onglet">{{artiste1}}</button>
    <button class="onglet">{{artiste1}}</button>
    <button class="onglet">{{artiste1}}</button>
</template>

<script lang="ts">
export default {
  name: 'carrousel',
   props: {
    artiste1: String,
    subtitle1: String,
  },
}
</script>

<style>

</style>