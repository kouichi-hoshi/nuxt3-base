<template>
  <component :is="tagName" v-if="!btn" :class="class">
    <NuxtLink
      :class="['c-button rounded-full', { center: center }]"
      :to="link"
      :target="checkLinkType(link) ? '_self' : '_blank'"
    >
      {{ label }}
    </NuxtLink>
  </component>
  <div v-else>
    <button>{{ label }}</button>
  </div>
</template>

<script>
import checkLinkType from '../functions/checkLinkType.js'

export default {
  props: {
    center: {
      type: Boolean,
      default: () => {
        return false
      }
    },
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
      required: true
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
  padding: 0.8em 1.2em;
  font-size: 0.8em;
  display: inline-block;
  &.center {
    display: block;
    width: fit-content;
    margin: 0 auto;
  }
}
</style>
