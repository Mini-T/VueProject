<template>
    <footer>
        <h1 id="logo" class="subtitle">buuk</h1>
        <div>
            <a class="footerlink" href="#">Conditions de ventes</a>
            <hr id="underline1" class="hoverhr">
            <a class="footerlink" href="#">Mentions légales</a>
            <hr id="underline2" class="hoverhr">
            <a id="issuenumber" class="footerlink" href="#">Un problème ? +33 4 50 44 56 03</a>
            <hr id="underline3" class="hoverhr">
        </div>
    </footer>
</template>

<script>
export default {
    data() {
        return{
        }
    },
    name: "Footer",
   
}

</script>
<style lang="scss">
#underline1{right: 4vw;}
#underline2{right: 40vw;}
#underline3{left: 20vw}
.hoverhr{
    width: 100px;
    position: absolute;
}
footer{
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #FAFAFA;
    width: 100%;
    height: 120px;
}
.footerlink{
    margin: 50px;
    font-style: normal;
    
font-weight: 300;
font-size: 20px;
line-height: 25px;
color: #000000;
&:hover{   
       
    background: -webkit-linear-gradient(left, #d99cf0 -2.19%, #927bf9 102.14%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
}
#issuenumber{
    font-weight: 600;
}
#logo{
    margin-left:50px;
}
</style>