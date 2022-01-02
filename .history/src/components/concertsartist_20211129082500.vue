<template>
    <h1 class="styletitle">{{ musicstyle1 }}</h1>
    <div class="card concerts"></div>
</template>
<script>
export default {
    name:"concertsArtist",
    props:{
        artistName:String,
        artistDate:String,
        artistLocation
    }
}
</script>
<style lang="scss">

</style>