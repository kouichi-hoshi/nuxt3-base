<script setup>
import itemsSample from '../models/itemsSample.js'
import cHeadline from '../components/cHeadline.vue'
import repeatCard from '../components/repeatCard.vue'
import swiperVue from '../components/swiperVue.vue'
import intersectionOA from '../components/intersectionOA.vue'

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
const slideAspect = 'aspect-[3/2]' //スライド画像のアスペクトレシオの設定

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
        class="first-view container u-maxWidth1340 relative mx-auto md:flex items-center"
      >
        <div class="first-view__title-wrap z-10 p-4">
          <intersectionOA observe tag-name="h2" class="first-view__title move">
            Third Wave <br class="hidden md:block" />Cafe
          </intersectionOA>
          <intersectionOA
            observe
            tag-name="p"
            class="first-view__sub-title move ml-4"
            >サードウェーブ カフェ</intersectionOA
          >
        </div>
        <p class="first-view__img-wrap md:absolute top-0 right-0 left-auto">
          <intersectionOA
            observe
            tagName="img"
            class="first-view__img move"
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
            inner-class="items__item"
            :items="items"
            :imgPath="itemsPath"
            titleClass="mt-2 text-xl"
          />
        </div>
      </section>
    </article>
  </NuxtLayout>
</template>

<style lang="scss">
@use '../assets/css/mixin.scss';
@use '../assets/css/variables.scss';

@import url(map-get(variables.$theme-cafe-fonts, 'url'));

@mixin move($move: 60px, $dur: 0.6s, $delay: 0s, $opa: 0.4) {
  &.move {
    transition: 1s ease-in-out;
    transform: translateX($move);
    transition-duration: $dur;
    transition-delay: $delay;
    opacity: $opa;
    @include mixin.mq-md {
    }
  }
  &.move.active {
    transform: translateX(0);
    opacity: 1;
  }
}

.cafe {
  @mixin sectionSpace($mb: 4rem, $mbMd: 14rem) {
    margin-bottom: $mb;
    @include mixin.mq-md {
      margin-bottom: $mbMd;
    }
  }

  .first-view {
    @include mixin.mq-md {
      height: 60vh;
    }
    &__title {
      font-family: map-get(variables.$theme-cafe-fonts, 'familyEn');
      font-weight: map-get(variables.$theme-cafe-fonts, 'weight');
      line-height: clamp(3.6rem, 2.467rem + 5.67vw, 7rem);
      font-size: clamp(3.6rem, 2.467rem + 5.67vw, 7rem);
      text-shadow: 1px 1px 0
        rgba(map-get(variables.$theme-cafe-colors, 'mainColor'), 0.4);
      @include move($move: -40px, $opa: 0.1);
    }

    &__sub-title {
      font-family: map-get(variables.$theme-cafe-fonts, 'familyJp');
      font-size: 1.2rem;
      @include move($move: -40px, $delay: 0.6s, $opa: 0);
    }

    &__img {
      object-fit: cover;
      height: 60vh;
      width: 100vw;
      @include mixin.mq-md {
        object-position: 50% 80%;
        width: 42vw;
      }
      @include mixin.mq-lg {
        width: 33vw;
      }
      @include move($delay: 1s, $opa: 0);
    }
    @include sectionSpace();
  }

  .slide {
    background: map-get(variables.$theme-cafe-colors, 'accentColor');
    color: map-get(variables.$theme-cafe-colors, 'mainColor');
    @include sectionSpace();
  }
}
</style>
