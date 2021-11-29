<template>
    <div class="slider">
        <h1> {{ musicstyle }}</h1>
    </div>
</template>
<script>
export default {
    name:"stylelist",
    props: {
        musicstyle: String,
    }
}
</script>
<style lang="scss">
.slider{
    display: flex;
    width: 0%;
    margin: auto;
    height: 30vh;
    background: red;
}
</style>