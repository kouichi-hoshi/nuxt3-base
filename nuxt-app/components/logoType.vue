<script setup>
const props = defineProps({
  className: {
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
})
</script>

<template>
  <component :is="tagName" :class="className"><slot></slot></component>
</template>
