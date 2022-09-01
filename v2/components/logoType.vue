<script setup>
const props = defineProps({
  mdlTitle: {
    type: String,
    required: true
  },
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
  <component :is="tagName" :class="className">{{ mdlTitle }}</component>
</template>
