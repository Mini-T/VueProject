<template>
        <div id="mobile">
            <h1 class="subtitle">{{ad}}</h1>
            <p class="normaltext">{{normaltext}}</p>
            <img src="/"></img>
            <img src="/"></img>
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
        normaltext:String,
    }
}

    
        

</script>
<style lang="scss">
#mobile
{
    width:800px;
}
.normaltext{
font-family: Sora;
font-style: normal;
font-weight: normal;
font-size: 24px;
line-height: 30px;

color: #000000;
}

</style>
