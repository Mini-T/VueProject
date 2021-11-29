<template>
    <h1 class="styletitle">{{ music }}</h1>
    <div class="card concerts"></div>
</template>
<script>
export default {
    name:"concertsArtist",
    props:{
        artistName:String,
        artistDate:String,
        artistLocation:String,
    }
}
</script>
<style lang="scss">

</style>