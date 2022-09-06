<script setup>
import checkLinkType from '../functions/checkLinkType.js'

const props = defineProps({
  tagName: {
    type: String,
    default: 'div'
  },
  href: {
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
  <aside>
    <div :class="{ 'c-banner': !removeDefaultClass }">
      <a class="c-banner__inner" :href="href" :target="checkLinkType(href) ? '_self' : '_blank'">
        <slot></slot>
      </a>
    </div>
  </aside>
</template>

<style lang="scss" scoped>
@use '../assets/css/global' as g;

.c-banner {
  //TODO: mixin化する
  border: 1px solid black;
  width: fit-content;
  &__inner {
    padding: 1rem;
    display: block;
  }
}
</style>
