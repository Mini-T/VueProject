<template>
    <div class="card concerts" :style="`background-image:url('${artist.link}')`"></div>
</template>
<script>
export default {
    name:"concertsArtist",
    props:{
        artistName:String,
        artistDate:String,
        artistLocation:String,
        RapRnb:Array,
    }
}
</script>
<style lang="scss">
.card.concerts {
  height: 460px;
  width: 338px;
  border-radius: 30px;
}
</style>