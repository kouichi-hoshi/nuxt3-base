<script setup>
// import { defineProps } from 'vue'
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
    type: Object
  },
  ariaLabel: {
    type: String,
    default: ''
  },
  slideAspect: {
    type: String,
    default: 'aspect-[16/9]'
  },
  view: {
    type: String,
    default: 'default'
  },
})
</script>

<template>
  <!-- 1列 画像 フェード -->
  <Splide v-if="view === 'default'" tag="section" :aria-label="ariaLabel" :options="slideOptions">
    <SplideSlide v-for="(slideItem, key) in slideItems" :key="key">
      <img class="object-cover" :class="slideAspect" :src="slideItem" :alt="key" />
    </SplideSlide>
  </Splide>

  <!-- md-> 1列 左画像 右テキスト フェード TODO-->
  <Splide v-if="view === 'img-text'" tag="section" :aria-label="ariaLabel" :options="slideOptions">
    <SplideSlide v-for="(slideItem, key) in slideItems" :key="key">
      <div class="p-4 pb-12">
        <a :href="slideItem.href">
          <picture>
            <source class="object-cover" :class="slideAspect" :srcset="slideItem.webp" type="image/webp" />
            <img class="object-cover" :class="slideAspect" :src="slideItem.src" :alt="slideItem.alt" />
          </picture>
        </a>
        <p class="text-sm md:text-xl mb-6 md:mb-2 mt-4 text-center">{{ slideItem.caption }}</p>
      </div>
    </SplideSlide>
  </Splide>
</template>

<style lang="scss">
// @use '../assets/css/mixin.scss';
// @use '../assets/css/variables.scss';

.splide {
  width: 100%;
  margin: 0 auto;
  &__arrow {
    border-radius: 0;
  }
  &__arrow--next {
    margin-right: -2rem;
  }
  &__arrow--prev {
    margin-left: -2rem;
  }
  &__pagination {
    bottom: -2rem;
  }
}
</style>
