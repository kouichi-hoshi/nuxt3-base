<template>
  <NuxtLayout>
    <article class="home">
      <header class="mb-8 py-8">
        <cHeader class="text-6xl w-fit mx-auto"> Home </cHeader>
      </header>

      <swiper
        :slides-per-view="3"
        :space-between="50"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
      >
        <template v-for="(item, key) in items" :key="key">
          <swiper-slide>
            <img
              :src="item.fileName ? itemsPath + item.fileName : noImage"
              alt=""
            />
          </swiper-slide>
        </template>
      </swiper>

      <section class="items container mx-auto">
        <header class="mb-8 py-8">
          <cHeadline class="items__header"> Items </cHeadline>
        </header>
        <div
          class="items__item-wrap grid grid-cols-2 gap-6 md:grid-cols-3 xl:grid-cols-4"
        >
          <repeatCard
            card-class="items__item"
            :items="items"
            :imgPath="itemsPath"
            titleClass="mt-2 text-xl"
          />
        </div>
      </section>
    </article>
  </NuxtLayout>
</template>

<style lang="scss" scoped>
// .main {
//   .items {
//     &__item-wrap {
//       display: flex;
//       flex-wrap: wrap;
//       gap: 1rem;
//     }
//     &__item {
//       flex: 0 1 calc((100% - 2rem) / 3);
//     }
//   }
// }
</style>

<script>
import itemsSample from '../models/itemsSample.js'
import cHeadline from '../components/cHeadline.vue'
import repeatCard from '../components/repeatCard.vue'
import { Swiper, SwiperSlide } from 'swiper/vue' // Import Swiper Vue.js components
import 'swiper/css' // Import Swiper styles

export default {
  setup() {
    const items = itemsSample // Itemセクションで表示するデータ
    const itemsPath = '/images/sample/' //Itemセクションで表示する画像のパス
    const onSwiper = (swiper) => {
      console.log(swiper)
    }
    const onSlideChange = () => {
      console.log('slide change')
    }
    return {
      items,
      itemsPath,
      onSwiper,
      onSlideChange
    }
  },
  components: {
    repeatCard,
    cHeadline,
    Swiper,
    SwiperSlide
  }
}
</script>
