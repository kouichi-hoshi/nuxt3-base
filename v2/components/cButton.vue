<template>
  <component :is="tagName" v-if="!btn">
    <a class="c-button" :class="class" :href="link" :target="checkLinkType(link) ? '_self' : '_blank'">
      {{ label }}
      <slot></slot>
    </a>
  </component>
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
      type: String,
      default: ''
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
@use '../assets/css/global' as g;

.c-button {
  color: g.$cWhite;
  background: g.$cGray;
}
</style>
