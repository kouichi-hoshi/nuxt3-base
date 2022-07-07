<template>
  <swiper
    :modules="[EffectFade, Autoplay]"
    effect="fade"
    @swiper="onSwiper"
    :loop="slideOption.loop"
    :autoplay="slideOption.autoplay"
  >
    <template v-for="(item, key) in slideItems" :key="key">
      <swiper-slide>
        <img class="object-cover" :class="slideAspect" :src="item" :alt="key" />
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
    slideItems: {
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
    slideOption: {
      type: Object,
      default: {
        loop: true,
        autoplay: {
          delay: 5000
        }
      }
    },
    slideAspect: {
      type: String,
      default: 'aspect-[16/9]' // TailwindCSSのclassを使用
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
