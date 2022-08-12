<template>
  <component :is="tagName" :class="class">
    <slot></slot>
  </component>
</template>

<script>
export default {
  name: 'cHeadLine',
  props: {
    tagName: {
      type: String,
      default: () => {
        return 'h3'
      }
    },
    class: {
      type: String,
      default: () => {
        return 'c-headline w-fit mx-auto mb-8 text-2xl md:text-4xl'
      }
    }
  }
}
</script>
