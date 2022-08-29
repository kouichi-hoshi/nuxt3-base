<script setup>
/**
 * compButton
 * ボタンを表示させるコンポーネント
 * props.btn コンポーネントを呼び出すとき、
 * btn文字列をセットするとbutton要素、セットしなければa要素としてレンダリングされる
 */
import checkLinkType from '../functions/checkLinkType.js'

const props = defineProps({
  props: {
    // buttonタグにする場合使用
    btn: {
      type: Boolean,
      default: () => {
        return false
      }
    },
    tagName: {
      type: String,
      default: () => {
        return 'div'
      }
    },
    href: {
      type: String
    },
    class: {
      type: String,
      default: ''
    }
  }
})
</script>

<template>
  <template v-if="!btn" :is="tagName">
    <a class="c-button" :class="class" :href="href" :target="checkLinkType(href) ? '_self' : '_blank'">
      <slot></slot>
    </a>
  </template>
  <div v-else>
    <button class="c-button" :class="class">
      {{ label }}
      <slot></slot>
    </button>
  </div>
</template>

<style lang="scss" scoped>
@use '../assets/css/mixin.scss';
@use '../assets/css/variables.scss';

.c-button {
  @include mixin.c-button();
}
</style>
