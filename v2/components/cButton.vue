<template>
  <template :is="tagName" v-if="!btn">
    <a
      class="c-button rounded-full inline-block w-fit py-2 px-4"
      :class="class"
      :href="link"
      :target="checkLinkType(link) ? '_self' : '_blank'"
    >
      {{ label }}
    </a>
  </template>
  <div v-else>
    <button :class="class" class="c-button rounded-full w-fit py-2 px-4 w-28 text-center">
      {{ label }}
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
  // border-radius: 100vmax;
  color: map-get(variables.$theme-base-colors, 'cWhite');
  background: map-get(variables.$theme-base-colors, 'subColor');
  // &.center {
  //   display: block;
  //   width: fit-content;
  // }
}
</style>
