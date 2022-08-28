<script setup>
import { Splide, SplideSlide } from '@splidejs/vue-splide'

import '@splidejs/vue-splide/css' // デフォルトのテーマ
// import '@splidejs/vue-splide/css/skyblue'// ほかのテーマ
// import '@splidejs/vue-splide/css/sea-green' // ほかのテーマ
// import '@splidejs/vue-splide/css/core'// コアスタイルのみ

const props = defineProps({
  slideItems: {
    type: Array,
    required: true
  },
  slideOptions: {
    type: Object,
    default: {
      type: 'fade', // スライドの動作をフェードに指定
      interval: '4000', //自動再生の間隔をミリ秒単位で指定
      speed: '1000', // スライドが切り替わる時間をミリ秒で指定
      arrows: true, // スライドを操作するためのアローボタンを使用しない設定
      autoplay: true, // ロード後、自動的にスライドを実行
      rewind: true, // 最後のスライド画像が表示された後、最初の画像にもどる
      slideAspect: 'aspect-[16/9]'
    }
  }
})
</script>

<template>
  <Splide tag="div" aria-label="スライド" :options="slideOptions">
    <SplideSlide v-for="(slideItem, key) in slideItems" :key="key">
      <a :href="slideItem.href">
        <img class="object-cover w-full" :class="slideOptions.slideAspect" :src="slideItem.src" :alt="slideItem.key" />
      </a>
    </SplideSlide>
  </Splide>
</template>

<style lang="scss">
.splide {
  width: 100%;
  margin: 0 auto;
  &__arrow {
    border-radius: 0;
  }
}
</style>
