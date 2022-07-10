<template>
  <component :is="tagName" :class="class">{{ mdlTitle }}</component>
</template>

<script>
export default {
  name: 'MdlTitle',
  props: {
    mdlTitle: {
      type: String,
      required: true
    },
    class: {
      type: String,
      default: () => {
        return ''
      }
    },
    tagName: {
      type: String,
      default: () => {
        return 'h1'
      }
    }
  }
}
</script>
