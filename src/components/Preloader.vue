<template>
  <Teleport to="body">
    <div class="preloader">
      <div class="preloader-item"></div>
    </div>
  </Teleport>
</template>

<style lang="scss" scoped>
.preloader {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  &-item {
    width: 48px;
    height: 48px;
    border: 8px solid #fff;
    border-bottom-color: lightblue;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
  }
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>
