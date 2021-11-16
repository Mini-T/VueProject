<template>
    <footer>
        <h1 id="logo" class="subtitle">buuk</h1>
        <div>
            <a class="footerlink" href="#">Conditions de ventes</a>
            <a class="footerlink" href="#">Mentions légales</a>
            <a id="issuenumber" href="#">Un problème ? +33 4 50 44 56 03</a>
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
footer{
    display: flex;
    justify-content: flex-end;
    background: #FAFAFA;
}
.footerlink{
    font-style: normal;
font-weight: 300;
font-size: 20px;
line-height: 25px;

color: #000000;
}
#issuenumber{
    font-weight: 600;
}
#logo
        
</style>