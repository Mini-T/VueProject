<template>
  <div class="wrapper">
    <div class="circle circle15"></div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
.wrapper {
  position: fixed;
  width: 100vw;
  background: white;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5;
}
.circle15 {
  position: fixed;

  width: 100px;
  height: 100px;
  transform: translateZ(0);
  border-radius: 50%;
  box-shadow: inset 0 0 0 25px #ff006e;
}

.circle15:before,
.circle15:after {
  position: absolute;
  border-radius: 50%;
  content: "";
  width: 50%;
  height: 100%;
}
.circle15:before {
  top: 0;
  left: 0;
  background: rgb(255, 255, 255);
  border-radius: 100px 0 0 100px;
  transform-origin: center right;
  animation: effect15 2s infinite ease 1.5s;
}
.circle15:after {
  top: 0;
  right: 0;
  background: rgb(255, 255, 255);
  border-radius: 0 100px 100px 0;
  transform-origin: center left;
  animation: effect15 2s infinite ease;
}

@keyframes effect15 {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>