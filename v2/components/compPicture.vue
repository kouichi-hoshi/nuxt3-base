<script setup>
const props = defineProps({
  class: {
    type: String,
    default: ''
  },
  sourceClass: {
    type: String,
    default: ''
  },
  webpSrc: {
    type: String,
    validator: (url) => {
      const extension = url.split('.').pop().trim()
      if (extension === 'webp') {
        return true
      } else {
        return false
      }
    }
  },
  imgClass: {
    type: String,
    default: ''
  },
  imgSrc: {
    type: String,
    required: true
  },
  alt: {
    type: String,
    default: ''
  }
})
</script>
<template>
  <picture v-if="webpSrc" class="c-picture" :class="class">
    <source :class="sourceClass" :srcset="webpSrc" type="image/webp" />
    <img :class="imgClass" :src="imgSrc" :alt="alt" />
  </picture>
  <img v-else :class="imgClass" :src="imgSrc" :alt="alt" />
</template>
