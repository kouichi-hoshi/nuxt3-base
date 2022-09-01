<template>
  <header :class="outerClass">
    <component :is="tagName" :class="innerClass">
      <slot></slot>
    </component>
  </header>
</template>

<script>
export default {
  name: 'CHeader',
  props: {
    tagName: {
      type: String,
      default: () => {
        return 'h2'
      }
    },
    outerClass: {
      type: String,
      default: () => {
        return 'c-header mb-6 md:mb-12'
      }
    },
    innerClass: {
      type: String,
      default: () => {
        return 'text-4xl md:text-6xl text-center w-fit mx-auto'
      }
    }
  }
}
</script>
