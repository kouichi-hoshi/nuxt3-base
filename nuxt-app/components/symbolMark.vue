<script setup>
/**
 * シンボルマーク（SVG）をuse要素で表示する
 * TODO:汎用的に使えそうなのでコンポーネント名を変える？
 * SVGスプライトに対応させる？
 */
const props = defineProps({
  href: {
    type: String,
    required: true
  },
  viewBox: {
    type: String,
    default: '0 0 32 32'
  },
  width: {
    type: Number,
    default: 32
  }
})
function setWidth(w) {
  return `width: ${String(w)}px;`
}
</script>

<template>
  <div class="symbol-mark" :style="setWidth(width)">
    <svg :viewBox="viewBox">
      <use :href="href" />
    </svg>
  </div>
</template>

<style lang="scss" scoped>
.symbol-mark {
  height: auto;
}
</style>
