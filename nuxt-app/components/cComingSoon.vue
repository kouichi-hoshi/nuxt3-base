<template>
  <div class="coming-soon flex items-center">
    <div class="coming-soon__inner p-6">Coming Soon</div>
  </div>
</template>

<style lang="scss">
@use '../assets/css/mixin.scss';
@use '../assets/css/variables.scss';
.coming-soon {
  background: rgba(map-get(variables.$theme-base-colors, 'cGray'), 0.6);
  overflow: hidden;
  &__inner {
    width: 100%;
    text-align: center;
    background: rgba(map-get(variables.$theme-base-colors, 'cGray'), 0.7);
    color: map-get(variables.$theme-base-colors, 'cWhite');
    transform: rotate(-4deg) scale(110%);
    font-size: 120%;
  }
}
</style>
