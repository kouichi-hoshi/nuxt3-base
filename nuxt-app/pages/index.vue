<template>
  <NuxtLayout>
    <article class="home">
      <div class="slide">
        <swiperVue :items="slideItems" :aspect="aspect" />
      </div>
      <header class="mb-8 py-8">
        <cHeader class="text-6xl w-fit mx-auto"> Home </cHeader>
      </header>
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
import swiperVue from '../components/swiperVue.vue'

export default {
  setup() {
    const items = itemsSample // Itemセクションで表示するデータ
    const itemsPath = '/images/sample/' //Itemセクションで表示する画像のパス

    const slideData = {
      images: ['007.jpg', '008.jpg', '009.jpg', '011.jpg', '013.jpg'], // スライドで表示する画像
      src: '/images/sample/', // 画像のパス
      aspect: 'aspect-[16/7]' //スライド画像のアスペクトレシオの設定
    }
    // スライド画像のパスとファイル名を結合し配列に格納する
    const slideItems = slideData.images.map((img) => {
      return slideData.src + img
    })
    const aspect = slideData.aspect

    return {
      items,
      itemsPath,
      slideItems,
      aspect
    }
  },
  components: {
    repeatCard,
    cHeadline,
    swiperVue
  }
}
</script>
