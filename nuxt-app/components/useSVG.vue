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
    type: Number,
    default: 32
  },
  scale: {
    type: Number,
    default: 1
  }
})
function setSize(s) {
  return `width: ${String(s)}px; height: ${String(s)}px;`
}
function setScale(s) {
  return `transform: scale(${String(s)});`
}
</script>

<template>
  <div class="use-svg" :style="setSize(size)">
    <svg class="use-svg__img" :style="setScale(scale)" :viewBox="viewBox">
      <use :href="href" />
    </svg>
  </div>
</template>

<style lang="scss" scoped>
@use '../assets/css/global' as g;

.use-svg {
  transform-origin: center;
  &__img {
    fill: g.$cWhite;
  }
}
</style>
