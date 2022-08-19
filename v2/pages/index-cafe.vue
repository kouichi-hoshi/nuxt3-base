<script setup>
import itemsSample from '../models/itemsSample.js'
import cHeadline from '../components/cHeadline.vue'
import repeatCard from '../components/repeatCard.vue'
import intersectionOA from '../components/intersectionOA.vue'
import slideSplide from '../components/slideSplide.vue'

definePageMeta({
  layoutTransition: true
})

/**
 * Web font
 */
useHead({
  link: [
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Bungee&family=Noto+Sans+JP:wght@400;500;700&display=swap'
    }
  ]
})

useHead({
  bodyAttrs: {
    class: 'cafe'
  }
})

/**
 * repeatCard
 */
const items = itemsSample // repeatCardで表示するデータ
const newsItems = itemsSample.slice(0, 4) // newsにわたすデータ
const itemsPath = '/images/sample/' //repeatCardで表示する画像のパス

const menuItems = [
  { name: 'Coffee', src: '/images/sample/017.jpg', text: 'コーヒー' },
  { name: 'Cafe latte', src: '/images/sample/018.jpg', text: 'カフェラテ' },
  { name: 'Cappuccino', src: '/images/sample/015.jpg', text: 'カプチーノ' },
  { name: 'Coffee', src: '/images/sample/004.jpg', text: 'コーヒー' },
  { name: 'Cafe latte', src: '/images/sample/001.jpg', text: 'カフェラテ' }
]

/**
 * slideSplide
 */
const fileName = ['007.jpg', '008.jpg', '009.jpg', '011.jpg', '013.jpg'] // スライドで表示する画像
const filePath = '/images/sample/' // 画像のパス
const ariaLabel = 'slide' //スライド本体のaria-label属性の値

// スライドオプション
const slideOptions = {
  type: 'fade', // スライドの動作をフェードに指定
  speed: '1000', // スライドが切り替わる時間をミリ秒で指定
  arrows: false, // スライドを操作するためのアローボタンを使用しない設定
  autoplay: true, // ロード後、自動的にスライドを実行
  rewind: true, // 最後のスライド画像が表示された後、最初の画像にもどる
  slideAspect: 'aspect-[1/1] md:aspect-[3/4]'
}

// スライド画像のパスとファイル名を結合し配列に格納する
const slideItems = fileName.map((img) => {
  return filePath + img
})

// スライドの最初の画像を指定する
function setSlideStart(num) {
  return { ...slideOptions, start: num }
}
</script>

<template>
  <NuxtLayout name="cafe">
    <article>
      <section class="first-view container mx-auto px-2 md:px-0 md:flex md:items-center">
        <div class="first-view__title-wrap relative z-10 md:z-0">
          <p class="first-view__sub-title text-lg md:ml-4">Coffee <span>&</span> Lunch</p>
          <h2 class="first-view__title mb-2">
            <img class="first-view__title-img" src="/images/cafe-page/title-logo.svg" alt="CAFE WOODY" />
          </h2>
          <p class="first-view__text my-2 md:mt-4 md:w-fit lg:text-xl">木のぬくもりの中でおいしいコーヒーを。</p>
        </div>
        <p class="first-view__wood absolute top-0 right-0 md:relative">
          <img src="/images/cafe-page/wood.svg" alt="" />
        </p>
        <p class="first-view__img-photo">
          <img src="/images/cafe-page/cafe.jpg" alt="" />
        </p>
      </section>

      <section id="concept" class="concept section-space px-4 xl:px-0">
        <cHeader class="concept__title" data-title="コンセプト">Concept</cHeader>

        <div class="concept__01">
          <div class="basis-1/2 order-1 relative">
            <slideSplide :slide-items="slideItems" :slide-options="setSlideStart(3)" :aria-label="ariaLabel" />
            <p class="concept__01-title text-center m-4 md:m-0">Delicious coffee</p>
          </div>
          <div class="basis-1/2 order-2 my-auto sentence">
            <cHeadline class="concept__content-title text-3xl mb-12 font-bold"> Lorem ipsum dolor sit amet </cHeadline>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
            <p>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.
            </p>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
              laborum.
            </p>
          </div>
        </div>

        <div class="concept__02">
          <div class="basis-1/2 order-2 relative">
            <slideSplide :slide-items="slideItems" :slide-options="setSlideStart(5)" :aria-label="ariaLabel" />
            <p class="concept__02-title text-center main-font text-2xl m-4 md:m-0">Hospitality</p>
          </div>
          <div class="basis-1/2 order-1 my-auto sentence">
            <h3 class="concept__content-title text-3xl mb-12 font-bold">Lorem ipsum dolor sit amet</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
            <p>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.
            </p>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
              laborum.
            </p>
          </div>
        </div>

        <div class="concept__03">
          <div class="basis-1/2 order-1 relative">
            <slideSplide :slide-items="slideItems" :slide-options="setSlideStart(1)" :aria-label="ariaLabel" />
            <p class="concept__03-title text-center main-font text-2xl m-4 md:m-0">Luxury</p>
          </div>
          <div class="basis-1/2 order-2 my-auto sentence">
            <h3 class="concept__content-title text-3xl mb-12 font-bold">Lorem ipsum dolor sit amet</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
            <p>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.
            </p>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
              laborum.
            </p>
          </div>
        </div>
      </section>

      <section id="menu" class="menu container mx-auto">
        <cHeader class="menu__title" data-title="メニュー">Menu</cHeader>
        <ul class="menu__items mb-12 md:mb-36">
          <li class="menu__item" v-for="(menuItem, i) in menuItems" :key="i">
            <p class="menu__img">
              <img :src="menuItem.src" :alt="menuItem.name" />
            </p>
            <p class="menu__name">{{ menuItem.name }}</p>
            <p class="menu__text">{{ menuItem.text }}</p>
          </li>
        </ul>
        <p class="text-center">
          <cButton class="c-button--main" label="More" />
        </p>
      </section>

      <section id="news" class="news">
        <div class="container mx-auto">
          <cHeader class="news__title" data-title="おしらせ">News</cHeader>
          <div class="news__inner mx-auto grid grid-cols-2 gap-6 mb-24 md:grid-cols-2 xl:grid-cols-4">
            <repeatCard inner-class="news__item" :items="newsItems" :imgPath="itemsPath" titleClass="mt-2 text-xl" />
          </div>
          <p class="text-center">
            <cButton class="c-button--main" label="More" />
          </p>
        </div>
      </section>
    </article>
  </NuxtLayout>
</template>

<style lang="scss">
@use '@splidejs/vue-splide/css';
@use '../assets/css/mixin.scss';
@use '../assets/css/variables.scss';

.cafe {
  // font
  $main-font: 'Bungee', cursive;
  $sub-font: 'Noto Sans JP', sans-serif;

  // セクション間の余白統一用
  @mixin sectionSpace($mt: 4rem, $mb: 4rem, $mtMd: 8rem, $mbMd: 8rem, $pt: 4rem, $pb: 4rem, $ptMd: 8rem, $pbMd: 8rem) {
    margin-top: $mt;
    margin-bottom: $mb;
    padding-top: $pt;
    padding-bottom: $pb;
    @include mixin.mq-md {
      margin-top: $mtMd;
      margin-bottom: $mbMd;
      padding-top: $ptMd;
      padding-bottom: $pbMd;
    }
  }

  font-family: $sub-font;

  // 見出しのサブタイトル用スタイル
  [data-title]::after {
    content: attr(data-title);
    display: block;
    width: fit-content;
    margin: 1rem auto;
    font-size: 1.2rem;
    font-weight: 600;
    font-family: $sub-font;
    border-bottom: 5px solid map-get(variables.$theme-cafe-colors, 'subColor');
    line-height: 4rem;
  }

  // section間の余白の共通設定
  .section-space {
    @include sectionSpace();
  }

  // font設定
  .main-font {
    font-family: $main-font;
  }
  .sub-font {
    font-family: $sub-font;
  }

  .c-button--main {
    background: map-get(variables.$theme-cafe-colors, 'subColor');
    padding: 0.5rem 2rem;
    line-height: 1.8;
  }

  .first-view {
    @include mixin.mq-md {
      height: 60vh;
    }
    @include mixin.mq-xl {
      height: 80vh;
    }
    &__title-wrap {
      @include mixin.mq-md {
        flex: 0 1 50vw;
      }
    }
    &__title img {
      @include mixin.mq-xl {
        width: 85%;
      }
    }
    &__sub-title {
      font-family: $main-font;
      color: #777777;
    }
    &__text {
      background: #fff;
      padding: 0.5rem 1rem;
      color: #777777;
    }
    &__wood {
      @include mixin.mq-md {
        flex: 0 1 20vw;
        margin-left: -5vw;
        margin-right: 5vw;
      }
      @include mixin.mq-xl {
        margin-right: 0;
        margin-bottom: -6rem;
      }
      > img {
        @include mixin.mq-md {
          transform: scale(130%);
        }
      }
    }

    &__img-photo {
      @include mixin.mq-md {
        flex: 0 1 30vw;
      }

      & > img {
        border-radius: 1rem;
        @include mixin.mq-md {
          object-fit: contain;
          width: 100%;
          height: 60vh;
        }
        @include mixin.mq-xl {
          object-fit: cover;
          height: 80vh;
        }
      }
    }
  }

  .concept {
    background: map-get(variables.$theme-cafe-colors, 'accentColor');
    color: map-get(variables.$theme-cafe-colors, 'mainColor');
    @include sectionSpace($mt: 0, $mtMd: -6rem);

    &__title {
      font-weight: 500;
      font-family: $main-font;
      color: variables.$cWhite;
      &[data-title]::after {
        color: map-get(variables.$theme-cafe-colors, 'mainColor');
      }
    }

    .splide__track {
      border-radius: 1rem;
      box-shadow: 0px 8px 16px -2px rgba(10, 10, 10, 0.4), 0px 0px 0px 1px rgba(10, 10, 10, 0.1);
    }

    .concept__01,
    .concept__02,
    .concept__03 {
      max-width: variables.$screenLg;
      position: relative;
      margin-left: auto;
      margin-right: auto;
      margin-bottom: 6rem;
      @include mixin.mq-md {
        display: flex;
      }
      @include mixin.mq-md {
        gap: 6rem;
      }
    }

    &__01-title,
    &__02-title,
    &__03-title {
      font-family: $main-font;
      color: map-get(variables.$theme-cafe-colors, 'color4');
      text-shadow: -1px -1px 1px rgba(60, 45, 35, 0.6), 1px 1px 1px rgba(60, 45, 35, 0.6);
      font-size: 2rem;
      @include mixin.mq-md {
        font-size: 3rem;
        position: absolute;
        width: max-content;
      }
      @include mixin.mq-lg {
        font-size: 4rem;
      }
    }

    &__01-title {
      @include mixin.mq-md {
        right: 0;
        bottom: -2rem;
        text-align: left;
        transform-origin: right;
        transform: rotate(90deg) translateY(-35%);
        @include mixin.mq-lg {
          bottom: -4rem;
        }
      }
    }

    &__02-title {
      @include mixin.mq-md {
        left: -3rem;
        top: 3rem;
        transform-origin: right;
        text-align: left;
      }
    }

    &__03-title {
      @include mixin.mq-md {
        right: -3rem;
        bottom: 4rem;
        text-align: left;
      }
    }

    &__content-title {
      color: variables.$cWhite;
    }
  }

  .menu {
    @include sectionSpace($pt: 0, $ptMd: 0, $pb: 0, $pbMd: 0);
    &__title {
      color: map-get(variables.$theme-cafe-colors, 'accentColor');
      font-family: $main-font;
      &[data-title]::after {
        color: map-get(variables.$theme-cafe-colors, 'subColor');
      }
    }
    &__inner {
      max-width: variables.$screenLg;
    }
    .menu__items {
      display: flex;
      flex-wrap: wrap;
      gap: 2rem;
      @include mixin.mq-md {
        gap: 3rem;
      }
      @include mixin.mq-lg {
        flex-wrap: nowrap;
      }
    }
    .menu__item {
      flex: 0 0 calc(50% - 1rem);
      border-radius: 1rem;
      background: map-get(variables.$theme-cafe-colors, 'accentColor');
      @include mixin.mq-md {
        flex: 0 0 calc(100% / 3 - 2rem);
      }
      @include mixin.mq-lg {
        flex: 0 1 100%;
      }
    }
    // .menu__item + .menu__item {
    //   margin-top: 2rem;
    //   @include mixin.mq-md {
    //     margin-top: 0;
    //   }
    // }
    &__img {
      position: relative;
      clip-path: polygon(100% 0, 100% 80%, 0 100%, 0 100%, 0 0);
      overflow: hidden;

      & > img {
        border-radius: 1rem 1rem 0 0;
        object-fit: cover;
        aspect-ratio: 1 / 1;
      }
    }
    &__name {
      position: relative;
      z-index: 1;
      padding: 1rem 1rem 0 1rem;
      text-align: right;
      font-family: $main-font;
      font-size: 1.6rem;
      font-weight: 500;
      color: map-get(variables.$theme-cafe-colors, 'mainColor');
    }
    &__text {
      padding: 0 1rem 1rem 1rem;
      text-align: right;
      color: map-get(variables.$theme-cafe-colors, 'color4');
    }
  }

  .news {
    background: variables.$cWhite;
    @include sectionSpace($mb: 0, $mbMd: 0);
    &__title {
      color: map-get(variables.$theme-cafe-colors, 'accentColor');
      font-family: $main-font;
      &[data-title]::after {
        color: map-get(variables.$theme-cafe-colors, 'subColor');
      }
    }
    &__inner {
      max-width: variables.$screenLg;
    }
  }
}
</style>
