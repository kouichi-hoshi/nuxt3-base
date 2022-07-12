<script setup>
import itemsSample from '../models/itemsSample.js'
import cHeadline from '../components/cHeadline.vue'
import repeatCard from '../components/repeatCard.vue'
import swiperVue from '../components/swiperVue.vue'

/**
 * repeatCard
 */
const items = itemsSample // repeatCardで表示するデータ
const itemsPath = '/images/sample/' //repeatCardで表示する画像のパス

/**
 * swiperVue
 */
const fileName = ['007.jpg', '008.jpg', '009.jpg', '011.jpg', '013.jpg'] // スライドで表示する画像
const filePath = '/images/sample/' // 画像の格納場所
const slideAspect = 'aspect-[16/7]' //スライド画像のアスペクトレシオの設定

// Swiperのオプション
const slideOption = {
  loop: true,
  autoplay: {
    delay: 4500
  }
}

// src属性にセットするデータを生成
// スライド画像のパスとファイル名を結合する
const slideItems = fileName.map((img) => {
  return filePath + img
})
</script>

<template>
  <NuxtLayout>
    <article class="home">
      <div class="slide">
        <swiperVue
          :slide-items="slideItems"
          :slide-option="slideOption"
          :slide-aspect="slideAspect"
        />
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
            observe
            inner-class="items__item mask mask-1"
            :items="items"
            :imgPath="itemsPath"
            titleClass="mt-2 text-xl"
          />
        </div>
      </section>
    </article>
  </NuxtLayout>
</template>
