<template>
  <swiper
    :modules="[EffectFade, Autoplay]"
    effect="fade"
    @swiper="onSwiper"
    :loop="true"
    :autoplay="true"
  >
    <template v-for="(item, key) in items" :key="key">
      <swiper-slide>
        <img class="object-cover" :class="aspect" :src="item" :alt="key" />
      </swiper-slide>
    </template>
  </swiper>
</template>

<script>
import { EffectFade } from 'swiper'
import { Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue' // Import Swiper Vue.js components

import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/autoplay'

export default {
  name: 'SwiperVue',
  props: {
    items: {
      /**
       *itemsの構造の説明
       * @param {Object} items.title タイトル、名前、見出しなどの短い文字列
       * @param {Object} items.text 説明文
       * @param {Object} items.fileName ファイル名
       * @param {Object} items.href このアイテムのリンク先URL
       */
      type: Object,
      required: true
    },
    aspect: {
      type: String,
      default: 'aspect-[16/9]'
    }
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper)
    }
    const onSlideChange = () => {
      console.log('slide change')
    }
    return {
      onSwiper,
      onSlideChange,
      EffectFade,
      Autoplay
    }
  },
  components: {
    Swiper,
    SwiperSlide
  }
}
</script>
