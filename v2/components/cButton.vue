<template>
  <template :is="tagName" v-if="!btn">
    <a class="c-button" :class="class" :href="link" :target="checkLinkType(link) ? '_self' : '_blank'">
      {{ label }}
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

<script>
import checkLinkType from '../functions/checkLinkType.js'

export default {
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
    link: {
      type: String
    },
    label: {
      type: String,
      required: true
    },
    class: {
      type: String,
      default: () => {
        return ''
      }
    }
  },
  data() {
    return {
      checkLinkType
    }
  }
}
</script>

<style lang="scss" scoped>
@use '../assets/css/mixin.scss';
@use '../assets/css/variables.scss';

.c-button {
  color: variables.$cWhite;
  background: variables.$cGray;
}
</style>
