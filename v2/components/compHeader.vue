<script setup>
const props = defineProps({
  tagName: {
    type: String,
    default: 'h2'
  },
  // class: {
  //   type: String,
  //   default: 'mb-6 md:mb-12'
  // },
  innerClass: {
    type: String,
    default: ''
  },
  removeDefaultClass: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <header :class="{ 'c-header': !removeDefaultClass }">
    <component :is="tagName" class="c-header__inner" :class="innerClass">
      <slot></slot>
    </component>
  </header>
</template>

<style lang="scss" scoped>
@use '../assets/css/mixin.scss';
@use '../assets/css/variables.scss';

.c-header {
  @include mixin.c-header();
}
</style>
