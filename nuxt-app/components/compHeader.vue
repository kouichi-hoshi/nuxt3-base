<script setup>
const props = defineProps({
  tagName: {
    type: String,
    default: 'h2'
  },
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
@use '../assets/css/global' as g;

.c-header {
  @include g.header();
}
</style>
