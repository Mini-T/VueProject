<template>
    <div class="card concerts" :style="`background-image:url('${artiste.img}')`">
        <h1>{{a}}</h1>
    </div>
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