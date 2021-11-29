<template>
  <footer>
    <h1 id="logo" class="subtitle">buuk</h1>
    <div>
      <a class="footerlink" href="#">Conditions de ventes</a>
      <a class="footerlink" href="#">Mentions légales</a>
      <a id="issuenumber" class="footerlink" href="#"
        >Un problème ? +33 4 50 44 56 03</a
      >
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {};
  },
  name: "Footer",
};
</script>
<style lang="scss">


footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fafafa;
  width: 100%;
  height: 120px;
}

.footerlink {
    transition: all ease-in 300ms;
  margin: 50px;
  font-style: normal;
  padding-bottom: 5px;
  font-weight: 300;
  font-size: 20px;
  line-height: 25px;
  color: #000000 !important;
  border-bottom: solid 1px transparent;
  &:hover {
      color: #D28AE7;
      padding-bottom: 0px;
      border-bottom: solid 1px rgb(153, 0, 255);
    }
  }
#issuenumber {
  font-weight: 600;
}
#logo {
  margin-left: 50px;
}
</style>