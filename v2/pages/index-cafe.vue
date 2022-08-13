<script setup>
import itemsSample from '../models/itemsSample.js'
import cHeadline from '../components/cHeadline.vue'
import repeatCard from '../components/repeatCard.vue'
import intersectionOA from '../components/intersectionOA.vue'
import slideSplide from '../components/slideSplide.vue'

/**
 * Web font
 */
useHead({
  link: [
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@400;700&family=Noto+Sans+JP:wght@400;500&display=swap'
    }
  ]
})

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
  <NuxtLayout name="cafe">
    <article class="cafe">
      <section class="first-view container u-maxWidth1340 relative mx-auto md:flex items-center">
        <svg
          class="first-view__bg-img"
          width="301"
          height="353"
          viewBox="0 0 301
          353"
        >
          <use href="/images/cafe-page/coffee-30293.svg#symbol" />
        </svg>

        <div class="first-view__title-wrap z-10 p-4">
          <h2 class="first-view__title mt-24 md:mt-0">Third Wave <br class="hidden md:block" />Cafe</h2>
          <p class="first-view__sub-title ml-4">サードウェーブ カフェ</p>
        </div>
        <p>
          <img
            class="first-view__img md:absolute top-0 right-0 left-auto shadow-2xl"
            src="/images/cafe-page/cafe.jpg"
            alt=""
          />
        </p>
      </section>

      <div class="slide flex">
        <div class="basis-2/5 p-6 flex items-center justify-center">test</div>
        <div class="basis-3/5">
          <slideSplide
            :slide-items="slideItems"
            :slide-options="slideOptions"
            :aspect="slideAspect"
            :aria-label="ariaLabel"
          />
        </div>
      </div>

      <header class="mb-8 py-8">
        <cHeader class="text-6xl w-fit mx-auto"> Cafe </cHeader>
      </header>
      <section class="items container u-maxWidth1340 mx-auto">
        <header class="mb-8 py-8">
          <cHeadline class="items__header"> Items </cHeadline>
        </header>
        <div class="items__item-wrap grid grid-cols-2 gap-6 md:grid-cols-3 xl:grid-cols-4">
          <repeatCard inner-class="items__item" :items="items" :imgPath="itemsPath" titleClass="mt-2 text-xl" />
        </div>
      </section>
    </article>
  </NuxtLayout>
</template>

<style lang="scss">
@use '@splidejs/vue-splide/css';
@use '../assets/css/mixin.scss';
@use '../assets/css/variables.scss';

// セクション間の余白統一用
@mixin sectionSpace($mb: 4rem, $mbMd: 14rem) {
  margin-bottom: $mb;
  @include mixin.mq-md {
    margin-bottom: $mbMd;
  }
}

.cafe {
  .first-view {
    @include mixin.mq-md {
      height: 85vh;
    }

    &__bg-img {
      position: absolute;
      color: rgba(map-get(variables.$theme-cafe-colors, 'mainColor'), 0);
      fill: rgba(#4c453e, 1);
      opacity: 0;
      transform: scale(160%) rotate(15deg) translate(40%);
      @include mixin.mq-md {
        transform: scale(200%) rotate(15deg) translate(75%, 5%);
      }
    }

    &__title {
      font-family: 'Libre Baskerville', serif;
      font-weight: 400;
      line-height: clamp(3.6rem, 2.467rem + 5.67vw, 7rem);
      font-size: clamp(3.6rem, 2.467rem + 5.67vw, 7rem);
      text-shadow: 1px 1px 0 rgba(map-get(variables.$theme-cafe-colors, 'mainColor'), 0.6);
    }

    &__sub-title {
      max-width: 100%;
      font-size: 1.2rem;
      font-family: 'Noto Sans JP', sans-serif;
    }

    &__img {
      object-fit: cover;
      height: 80vh;
      width: 100vw;
      @include mixin.mq-md {
        object-position: 50% 80%;
        width: 42vw;
      }
      @include mixin.mq-lg {
        width: 40vw;
      }
      @include mixin.mq-xl {
        width: 28vw;
      }
    }
    @include sectionSpace();

    // アニメーション用
    @mixin anime($moveX: false, $opa: false, $dur: 0.6s, $fun: ease-in-out, $delay: 1s) {
      transition: $dur $fun $delay;
      @if $moveX {
        transform: translateX($moveX);
      }
      @if ($opa) {
        opacity: $opa;
      }
      &.active {
        @if $moveX {
          transform: translateX(0);
        }
        @if ($opa) {
          opacity: 1;
        }
      }
    }
    // first-view__bg-img
    .anime-01 {
      opacity: 0;
      animation-name: fade;
      animation-duration: 4s;
      // animation-delay: 2s;
      animation-fill-mode: forwards;
    }
    @keyframes fade {
      90% {
        opacity: 0.6;
      }
      100% {
        opacity: 0.2;
      }
    }
    // first-view__title
    .anime-02 {
      @include anime($moveX: -90px, $opa: 0, $dur: 1s, $delay: 1.5s);
    }
    // first-view__img
    .anime-03 {
      @include anime($moveX: 90px, $opa: 0, $dur: 0.6s, $delay: 2s);
    }
    // first-view__sub-title
    .anime-04 {
      clip-path: inset(0 100% 0 0);
      @include anime($dur: 1s, $delay: 2.8s);
      &.active {
        clip-path: inset(0 0 0 0);
      }
    }
  }

  .slide {
    background: map-get(variables.$theme-cafe-colors, 'accentColor');
    color: map-get(variables.$theme-cafe-colors, 'mainColor');
    @include sectionSpace();
  }
}
</style>
