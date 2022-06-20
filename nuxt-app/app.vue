<template>
  <div class="l-container m-6">
    <div class="l-header mb-6">
      <SiteHeader />
    </div>
    <main class="l-body">
      <h2 class="text-3xl mb-6">contents</h2>
      <NuxtPage />
    </main>
  </div>
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