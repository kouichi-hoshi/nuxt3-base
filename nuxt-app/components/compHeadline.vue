<script setup>
const props = defineProps({
  tagName: {
    type: String,
    default: 'h3'
  }
})
</script>

<template>
  <component :is="tagName" class="c-headline">
    <slot></slot>
  </component>
</template>

<style lang="scss" scoped>
@use '../assets/css/global' as g;

.c-headline {
  @include g.c-headline();
}
</style>
