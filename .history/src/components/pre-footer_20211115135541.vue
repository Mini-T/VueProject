<template>
        <div id="mobile">
            <h1 class="subtitle">{{ad}}</h1>
            <p class="normaltext">{{normaltext}}</p>
        </div>
</template>
<script>
export default{
    data() {
        return{
        }
    },
    name: "PreFooter",
    props:{
        ad:String,
        normaltext:String
    }
}

    
        

</script>
<style lang="scss">
.normaltext{

}
</style>
