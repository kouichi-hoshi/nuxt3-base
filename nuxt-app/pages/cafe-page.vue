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
const slideAspect = 'aspect-[16/6]' //スライド画像のアスペクトレシオの設定

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
  <NuxtLayout name="cafe">
    <article class="cafe">
      <section
        class="first-view container u-maxWidth1340 relative mx-auto md:flex items-center pt-16 px-4 pb-16 md:p-0"
      >
        <div class="first-view__text z-10 mb-4">
          <h2 class="first-view__title">
            Third Wave <br class="hidden md:block" />Cafe
          </h2>
          <p class="first-view__sub-title">サードウェーブ カフェ</p>
        </div>
        <p class="first-view__img-wrap md:absolute top-0 right-0">
          <img
            class="first-view__img"
            src="/images/cafe-page/cafe.jpg"
            alt=""
          />
        </p>
      </section>

      <div class="slide flex">
        <div class="basis-6/12 p-6 flex items-center justify-center">test</div>
        <swiperVue
          class="basis-6/12"
          :slide-items="slideItems"
          :slide-option="slideOption"
          :slide-aspect="slideAspect"
        />
      </div>
      <header class="mb-8 py-8">
        <cHeader class="text-6xl w-fit mx-auto"> Cafe </cHeader>
      </header>
      <section class="items container u-maxWidth1340 mx-auto">
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

<style lang="scss" scoped>
@use '../assets/css/mixin.scss';
@use '../assets/css/variables.scss';
@use '../assets/css/utility.scss';

.cafe {
  @mixin sectionSpace($mb: 48px, $mbMd: 96px) {
    margin-bottom: $mb;
    @include mixin.mq-md {
      margin-bottom: $mbMd;
    }
  }

  .first-view {
    @include mixin.mq-md {
      height: 80vh;
    }
    &__text {
    }
    &__title {
      line-height: clamp(3.8rem, 2.067rem + 8.67vw, 9rem);
      font-size: clamp(3.8rem, 2.067rem + 8.67vw, 9rem);
    }
    &__img-wrap {
      height: 100%;
    }
    &__img {
      @include mixin.mq-md {
        max-width: revert;
        max-height: 100%;
      }
    }
    @include sectionSpace();
  }
  .slide {
    background: map-get(variables.$theme-cafe-colors, 'accentColor');
    color: #fff;
    @include sectionSpace();
  }
}
</style>
