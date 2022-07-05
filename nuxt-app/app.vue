<template>
  <NuxtPage />
</template>

<style lang="scss">
//ページ遷移時インタラクション
.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s;
}
.page-enter,
.page-leave-active {
  opacity: 0;
}
</style>
