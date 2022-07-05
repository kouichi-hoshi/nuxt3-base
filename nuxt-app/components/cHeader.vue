<template>
  <component :is="tagName" :class="class">
    <slot>headline</slot>
  </component>
</template>

<script>
export default {
  name: 'cHeader',
  props: {
    tagName: {
      type: String,
      default: () => {
        return 'h2'
      }
    },
    class: {
      type: String,
      default: () => {
        return 'c-header w-fit mx-auto text-6xl'
      }
    }
  }
}
</script>
