<script setup>
/**
 * compButton
 * ボタンを表示させるコンポーネント
 * props.btn コンポーネントを呼び出すとき、
 * btn文字列をセットするとbutton要素、セットしなければa要素としてレンダリングされる
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
  class: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <template v-if="!btn" :is="tagName">
    <a class="c-button" :class="class" :href="href" :target="checkLinkType(href) ? '_self' : '_blank'">
      <slot></slot>
    </a>
  </template>
  <template v-else>
    <button class="c-button" :class="class">
      <slot></slot>
    </button>
  </template>
</template>

<style lang="scss" scoped>
@use '../assets/css/mixin.scss';
@use '../assets/css/variables.scss';

.c-button {
  @include mixin.c-button();
  &--demo {
    @include mixin.c-button($color: white, $bg: tomato, $padding: 1rem, $radius: 10vmax);
  }
}
</style>
