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

.c-header--En {
  font-weight: bold;
  @include g.header($fontSize: 1.4rem, $lineHeigh: 1.6rem, $fontSizeM: 1.6rem, $lineHeighM: 1);
  @include g.dataTitle(
    $position: before,
    $ff: g.$defaultFontFamilyEn,
    $fontSize: 2.6rem,
    $lineHeigh: 4.2rem,
    $fontSizeM: 3.75rem,
    $lineHeighM: 1
  );
}
</style>
