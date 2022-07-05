<template>
  <component :is="tagName" :class="class">
    <slot>headline</slot>
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
        return 'c-headline w-fit mx-auto text-4xl'
      }
    }
  }
}
</script>
