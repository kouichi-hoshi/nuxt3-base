<template>
  <NuxtPage />
</template>

<style lang="scss">
// アニメーション用
@mixin anime($dur: 0.6s, $fade: fadeIn) {
  animation-delay: 0;
  animation-name: $fade;
  animation-duration: $dur;
  animation-fill-mode: forwards;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes fadeOnt {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
//ページ遷移時インタラクション
.page-enter-active,
.page-leave-active {
  // transition: opacity 0.5s;
  @include anime;
}
.page-enter,
.page-leave-active {
  // opacity: 0;
  @include anime($fade: fadeOut);
}
</style>
