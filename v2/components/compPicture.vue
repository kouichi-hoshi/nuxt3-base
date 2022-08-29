<script setup>
/**
 * compPicture
 * webp画像とそのフォールバックを表示させるためのコンポーネント
 * 画像URLを受け取り拡張子がwebpになっているかをバリデートする
 */

const props = defineProps({
  class: {
    type: String,
    default: ''
  },
  imgClass: {
    type: String,
    default: ''
  },
  imgSrc: {
    type: String,
    required: true
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
  alt: {
    type: String,
    default: ''
  }
})
</script>
<template>
  <picture v-if="webpSrc" class="c-picture" :class="class">
    <source :srcset="webpSrc" type="image/webp" />
    <img class="c-picture__img" :class="imgClass" :src="imgSrc" :alt="alt" />
  </picture>
</template>

<style lang="scss" scoped>
.c-picture {
}
</style>
