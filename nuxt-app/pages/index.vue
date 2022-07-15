<script setup>
import itemsSample from '../models/itemsSample.js'
import cHeadline from '../components/cHeadline.vue'
import repeatCard from '../components/repeatCard.vue'
import SlideSplide from '../components/slideSplide.vue'

/**
 * repeatCard
 */
const items = itemsSample // repeatCardで表示するデータ
const itemsPath = '/images/sample/' //repeatCardで表示する画像のパス

/**
 * slideSplide
 */
const fileName = ['007.jpg', '008.jpg', '009.jpg', '011.jpg', '013.jpg'] // スライドで表示する画像
const filePath = '/images/sample/' // 画像のパス
const ariaLabel = 'slide' //スライド本体のaria-label属性の値
const slideAspect = 'aspect-[16/7]' //スライド画像のアスペクトレシオの設定

// スライドオプション
const slideOptions = {
  type: 'fade', // スライドの動作をフェードに指定
  speed: '1000', // スライドが切り替わる時間をミリ秒で指定
  arrows: false, // スライドを操作するためのアローボタンを使用しない設定
  autoplay: true, // ロード後、自動的にスライドを実行
  rewind: true // 最後のスライド画像が表示された後、最初の画像にもどる
}

// スライド画像のパスとファイル名を結合し配列に格納する
const slideItems = fileName.map((img) => {
  return filePath + img
})
</script>

<template>
  <NuxtLayout>
    <article class="home">
      <div class="slide">
        <SlideSplide
          class="basis-6/12"
          :slide-items="slideItems"
          :slide-options="slideOptions"
          :aspect="slideAspect"
          :aria-label="ariaLabel"
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
