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
  // c-headline w-fit mx-auto mb-8 text-2xl md:text-4xl
  display: block;
  width: fit-content;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 2rem;
  font-size: 1.875rem;
  line-height: 2.25rem;
}
</style>
