<script setup>
/**
 * compButton
 * ボタンを表示させるコンポーネント
 * btn属性をセットするとbutton要素、セットしなければa要素としてレンダリングされる
 * removeDefaultClass属性をセットするとc-buttonクラスを除去する
 */
import checkLinkType from '../functions/checkLinkType.js'

const props = defineProps({
  // buttonタグにする場合使用
  btn: {
    type: Boolean,
    default: false
  },
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
  <a
    v-if="!btn"
    :class="{ 'c-button': !removeDefaultClass }"
    :href="href"
    :target="checkLinkType(href) ? '_self' : '_blank'"
  >
    <slot></slot>
  </a>
  <button v-else :class="{ 'c-button': !removeDefaultClass }">
    <slot></slot>
  </button>
</template>

<style lang="scss" scoped>
@use '../assets/css/global' as g;
</style>
