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
    type: String
  },
  removeDefaultClass: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <template v-if="!btn" :is="tagName">
    <a :class="{ 'c-button': !removeDefaultClass }" :href="href" :target="checkLinkType(href) ? '_self' : '_blank'">
      <slot></slot>
    </a>
  </template>
  <template v-else>
    <button :class="{ 'c-button': !removeDefaultClass }">
      <slot></slot>
    </button>
  </template>
</template>

<style lang="scss" scoped>
@use '../assets/css/global' as g;

.c-button {
  @include g.button();
}
.c-button__white {
  @include g.button-30;
}
</style>
