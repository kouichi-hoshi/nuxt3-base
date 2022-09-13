<script setup>
const props = defineProps({
  href: {
    type: String,
    required: true
  },
  viewBox: {
    type: String,
    default: '0 0 32 32'
  },
  size: {
    type: String,
    default: '32'
  },
  scale: {
    type: String,
    default: '1'
  },
  innerClass: {
    type: String,
    default: ''
  }
})
//TODO: CSS変数を変更する関数に変える
function setSize(s) {
  // return `width: ${s}px; height: ${s}px;`
  return `width: ${s}px;`
}
//TODO: CSS変数を変更する関数に変える
function setScale(s) {
  return `transform: scale(${s});`
}
</script>

<template>
  <div class="use-svg" :style="setSize(size)">
    <svg class="use-svg__img" :class="innerClass" :style="setScale(scale)" :viewBox="viewBox">
      <use :href="href" />
    </svg>
  </div>
</template>

<style lang="scss" scoped>
@use '../assets/css/global' as g;

.use-svg {
  transform-origin: center;
  &__img {
    fill: g.$cBlack;
  }
  &__img--white {
    fill: g.$cWhite;
  }
}
</style>
