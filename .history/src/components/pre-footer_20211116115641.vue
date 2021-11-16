<template>
        <div id="mobile">
            <h1 class="subtitle">{{ad}}</h1>
            <p class="normaltext">{{normaltext}}</p>
            <div class="line">
            <div id="applestore"></div>
            <div id="googlestore"></div>
            </div>
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
.line{
    display:flex;


}
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
#applestore{
    background-image: url('/images/applestore.png');
    background-size: initial;
    background-repeat: no-repeat;
    width: 300px;
    height:100px
}
#googlestore{
     background-image: url('../images/googlestore.png');
    background-size: cover;
    width: 300px;
    height:100px

}
</style>
