<script setup>
import itemsSample from '../models/itemsSample.js'

const postData = {
  title: import.meta.env.VITE_SITE_TITLE,
  subtitle: import.meta.env.VITE_SITE_SUB_TITLE
}

definePageMeta({
  layoutTransition: true
})

/**
 * Web font
 */
useHead({
  title: postData.title,
  bodyAttrs: {
    class: 'cafe'
  }
})

/**
 * repeatCard
 */
const newsItems = itemsSample.slice(0, 4) // newsにわたすデータ
const itemsPath = '/images/sample/' //repeatCardで表示する画像のパス

const menuItems = [
  { name: 'Coffee', src: '/images/sample/017.jpg', text: 'コーヒー' },
  { name: 'Cafe latte', src: '/images/sample/018.jpg', text: 'カフェラテ' },
  { name: 'Cappuccino', src: '/images/sample/015.jpg', text: 'カプチーノ' },
  { name: 'Cafe latte', src: '/images/sample/001.jpg', text: 'カフェラテ' },
  { name: 'Coffee', src: '/images/sample/004.jpg', text: 'コーヒー' }
]

/**
 * slideSplide
 */
// const fileName = ['007.jpg', '008.jpg', '009.jpg', '011.jpg', '013.jpg'] // スライドで表示する画像
// const filePath = '/images/sample/' // 画像のパス
// const ariaLabel = 'slide' //スライド本体のaria-label属性の値

// スライドのオプション
const slideOptions = {
  type: 'fade', // スライドの動作をフェードに指定
  speed: '1000', // スライドが切り替わる時間をミリ秒で指定
  arrows: false, // スライドを操作するためのアローボタンを使用しない設定
  autoplay: true, // ロード後、自動的にスライドを実行
  rewind: true, // 最後のスライド画像が表示された後、最初の画像にもどる
  slideAspect: 'aspect-[1/1] md:aspect-[3/4] w-full'
}

// // スライド画像のパスとファイル名を結合し配列に格納する
// const slideItems = fileName.map((img) => {
//   return filePath + img
// })
const slideItems = [
  {
    src: '/images/sample/001.jpg',
    webpSrc: '/images/sample/001.webp',
    alt: '001画像',
    href: '/'
  },
  {
    src: '/images/sample/007.jpg',
    alt: '007画像',
    href: '/'
  },
  {
    src: '/images/sample/008.jpg',
    alt: '008画像',
    href: '/'
  },
  {
    src: '/images/sample/009.jpg',
    alt: '009画像',
    href: '/'
  },
  {
    src: '/images/sample/011.jpg',
    alt: '011画像',
    href: '/'
  },
  {
    src: '/images/sample/013.jpg',
    alt: '013画像',
    href: '/'
  }
]

// スライドの最初の画像を指定する
function setSlideStart(num) {
  return { ...slideOptions, start: num }
}

/**
 * IntersectionObserver
 */
const options = {
  // threshold: [0, 0.25, 0.5, 0.75, 1]
  threshold: [0]
}

onMounted(() => {
  //検知対象要素を設定
  let targets = ref(document.querySelectorAll('.animate'))
  scroll(targets.value, options)
})

//指定した要素の交差を検知させる
function scroll(targets, options) {
  const observer = new IntersectionObserver(doWhenIntersect, options)
  targets.forEach((target) => {
    observer.observe(target)
  })
}

// 画面にin/outした要素にclassを着脱する
function doWhenIntersect(entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active')
      // }
    } else {
      entry.target.classList.remove('active')
    }
  })
}
</script>

<template>
  <NuxtLayout name="cafe">
    <article>
      <section class="first-view container mx-auto px-2 my-4 md:my-0 md:px-0 md:flex md:items-center">
        <div class="first-view__title-wrap animate relative z-10 md:z-0">
          <p class="first-view__sub-title text-lg md:ml-4">Coffee <span>&</span> Lunch</p>
          <h2 class="first-view__title mb-2">
            <img class="first-view__title-img" src="/images/cafe-page/title-logo.svg" alt="CAFE WOODY" />
          </h2>
          <p class="first-view__text rounded-md animate my-4 md:mt-4 md:w-fit lg:text-xl">
            木のぬくもりの中でおいしいコーヒーを。
          </p>
        </div>
        <p class="first-view__wood animate absolute top-2 right-0 md:relative">
          <img src="/images/cafe-page/wood.svg" alt="" />
        </p>
        <p class="first-view__img-photo animate">
          <img src="/images/sample/019.jpg" alt="" />
        </p>
      </section>

      <section id="concept" class="concept section-space px-4 xl:px-0">
        <compHeader class="concept__title animate text-center" data-title="コンセプト">Concept</compHeader>

        <div class="concept__01 animate">
          <div class="basis-1/2 order-1 relative">
            <slideSplide :slide-items="slideItems" :slide-options="setSlideStart(3)" />
            <p class="concept__01-title text-center m-4 md:m-0">Delicious coffee</p>
          </div>
          <div class="basis-1/2 order-2 my-auto sentence">
            <compHeadline class="concept__content-title text-3xl mb-6 md:mb-12 font-bold">
              Lorem ipsum dolor sit amet
            </compHeadline>
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

        <div class="concept__02 animate">
          <div class="basis-1/2 order-2 relative">
            <slideSplide :slide-items="slideItems" :slide-options="setSlideStart(5)" />
            <p class="concept__02-title text-center main-font text-2xl m-4 md:m-0">Hospitality</p>
          </div>
          <div class="basis-1/2 order-1 my-auto sentence">
            <compHeadline class="concept__content-title animate text-3xl mb-6 md:mb-12 font-bold">
              Lorem ipsum dolor sit amet
            </compHeadline>
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

        <div class="concept__03 animate">
          <div class="basis-1/2 order-1 relative">
            <slideSplide :slide-items="slideItems" :slide-options="setSlideStart(1)" />
            <p class="concept__03-title text-center main-font text-2xl m-4 md:m-0">Luxury</p>
          </div>
          <div class="basis-1/2 order-2 my-auto sentence">
            <compHeadline class="concept__content-title animate text-3xl mb-6 md:mb-12 font-bold">
              Lorem ipsum dolor sit amet
            </compHeadline>
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

      <section id="menu" class="menu container mx-auto px-4">
        <compHeader class="menu__title text-center animate" data-title="メニュー">Menu</compHeader>
        <ul class="menu__items mb-12 md:mb-36">
          <li v-for="(menuItem, i) in menuItems" :key="i" class="menu__item">
            <p class="menu__img">
              <img :src="menuItem.src" :alt="menuItem.name" />
            </p>
            <div class="menu__inner">
              <p class="menu__name">{{ menuItem.name }}</p>
              <p class="menu__text">{{ menuItem.text }}</p>
            </div>
          </li>
        </ul>
        <p class="text-center">
          <compButton class="c-button--main" href="/index-cafe">More</compButton>
        </p>
      </section>

      <section id="news" class="news px-4">
        <div class="container mx-auto">
          <compHeader class="news__title text-center animate" data-title="おしらせ">News</compHeader>
          <div class="news__inner mx-auto mb-24 sm:grid sm:grid-cols-2 sm:gap-6 md:grid-cols-2 xl:grid-cols-4">
            <repeatCard
              outer-class="mb-8 sm:mb-0"
              inner-class="news__item"
              :items="newsItems"
              :img-path="itemsPath"
              title-class="text-xl my-2"
            />
          </div>
          <p class="text-center">
            <compButton class="c-button--main" href="/index-cafe">More</compButton>
          </p>
        </div>
      </section>
    </article>
  </NuxtLayout>
</template>

<style lang="scss">
@use '@splidejs/vue-splide/css';
@use '../assets/css/global' as g;

.cafe {
  .l-header {
    margin-bottom: 0;
  }
  // font
  $main-font: 'Bungee', cursive;
  $sub-font: 'Noto Sans JP', sans-serif;

  // セクション間の余白統一用
  @mixin sectionSpace($mt: 4rem, $mb: 4rem, $mtMd: 8rem, $mbMd: 8rem, $pt: 4rem, $pb: 4rem, $ptMd: 8rem, $pbMd: 8rem) {
    margin-top: $mt;
    margin-bottom: $mb;
    padding-top: $pt;
    padding-bottom: $pb;
    @include g.mq-md {
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
    font-size: 1.2rem;
    font-weight: 600;
    font-family: $sub-font;
    border-bottom: 3px solid map-get(g.$theme-cafe-colors, 'subColor');
    line-height: 2rem;
    margin: 0 auto 2rem auto;
    @include g.mq-md {
      margin: 1rem auto 4rem auto;
      line-height: 4rem;
    }
  }

  // // section間の余白の共通設定
  // .section-space {
  //   @include sectionSpace();
  // }

  // font設定
  .main-font {
    font-family: $main-font;
  }
  .sub-font {
    font-family: $sub-font;
  }

  .c-button--main {
    border-radius: 999px;
    width: fit-content;
    display: inline-block;
    padding: 0.5rem 2rem;
    background: map-get(g.$theme-cafe-colors, 'subColor');
    padding: 0.5rem 2rem;
    line-height: 1.8;
  }

  .c-button--circle {
    border-radius: 999px;
    width: fit-content;
    text-align: center;
    background: map-get(g.$theme-cafe-colors, 'subColor');
    padding: 0.5rem;
    line-height: 1.8;
  }

  .first-view {
    @include g.mq-md {
      height: 60vh;
    }
    @include g.mq-xl {
      height: 80vh;
    }
    &__title-wrap {
      opacity: 0;
      &.active {
        @include g.fadeLift();
      }
      @include g.mq-md {
        flex: 0 1 50vw;
      }
    }
    // &__title {
    // }
    &__title img {
      @include g.mq-xl {
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
      @include g.mask($delay: 1.6s);
    }
    &__wood {
      opacity: 0;
      &.active {
        @include g.fadeLift($delay: 0.1s);
      }
      @include g.mq-md {
        flex: 0 1 20vw;
        margin-left: -5vw;
        margin-right: 5vw;
      }
      @include g.mq-xl {
        margin-right: 0;
        margin-bottom: -6rem;
      }
      > img {
        @include g.mq-md {
          transform: scale(130%);
        }
      }
    }

    &__img-photo {
      opacity: 0;
      &.active {
        @include g.fadeLift($delay: 0.3s);
      }
      @include g.mq-md {
        flex: 0 1 30vw;
      }

      & > img {
        border-radius: 1rem;
        aspect-ratio: 4/3;
        object-fit: cover;
        width: 100%;
        @include g.mq-sm {
          aspect-ratio: 2/3;
        }
        @include g.mq-xl {
          aspect-ratio: 3/4;
        }
      }
    }
  }

  .concept {
    background: map-get(g.$theme-cafe-colors, 'accentColor');
    color: map-get(g.$theme-cafe-colors, 'mainColor');
    @include sectionSpace($mt: 0, $mtMd: -6rem);

    &__title {
      font-weight: 500;
      font-family: $main-font;
      color: g.$cWhite;
      opacity: 0;
      &.active {
        @include g.fadeLift($delay: 0.3s);
      }
      &[data-title]::after {
        color: map-get(g.$theme-cafe-colors, 'color4');
        border-bottom: 3px solid map-get(g.$theme-cafe-colors, 'color4');
      }
    }

    .splide__track {
      border-radius: 1rem;
      box-shadow: 0px 8px 16px -2px rgba(10, 10, 10, 0.4), 0px 0px 0px 1px rgba(10, 10, 10, 0.1);
    }

    .concept__01,
    .concept__02,
    .concept__03 {
      max-width: g.$screenLg;
      position: relative;
      margin-left: auto;
      margin-right: auto;
      margin-bottom: 6rem;
      opacity: 0;
      &.active {
        @include g.fadeLift($delay: 0.3s);
      }
      @include g.mq-md {
        display: flex;
      }
      @include g.mq-md {
        gap: 6rem;
      }
    }

    &__01-title,
    &__02-title,
    &__03-title {
      font-family: $main-font;
      color: map-get(g.$theme-cafe-colors, 'color4');
      text-shadow: -1px -1px 1px rgba(60, 45, 35, 0.6), 1px 1px 1px rgba(60, 45, 35, 0.6);
      font-size: 2rem;
      @include g.mq-md {
        font-size: 3rem;
        position: absolute;
        width: max-content;
      }
      @include g.mq-lg {
        font-size: 4rem;
      }
    }

    &__01-title {
      @include g.mq-md {
        right: 0;
        bottom: -2rem;
        text-align: left;
        transform-origin: right;
        transform: rotate(90deg) translateY(-35%);
        @include g.mq-lg {
          bottom: -4rem;
        }
      }
    }

    &__02-title {
      @include g.mq-md {
        left: -3rem;
        top: 3rem;
        transform-origin: right;
        text-align: left;
      }
    }

    &__03-title {
      @include g.mq-md {
        right: -3rem;
        bottom: 4rem;
        text-align: left;
      }
    }

    &__content-title {
      color: g.$cWhite;
    }
  }

  .menu {
    @include sectionSpace($pt: 0, $ptMd: 0, $pb: 0, $pbMd: 0);
    &__title {
      color: map-get(g.$theme-cafe-colors, 'accentColor');
      font-family: $main-font;
      opacity: 0;
      &.active {
        @include g.fadeLift($delay: 0.3s);
      }
      &[data-title]::after {
        color: map-get(g.$theme-cafe-colors, 'subColor');
      }
    }
    &__inner {
      max-width: g.$screenLg;
    }
    .menu__items {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 1rem;
      @include g.mq-md {
        gap: 1.5rem;
      }
      @include g.mq-lg {
        flex-wrap: nowrap;
      }
    }
    .menu__item {
      flex: 0 0 calc(50% - 0.5rem);
      border-radius: 1rem;
      background: map-get(g.$theme-cafe-colors, 'accentColor');
      position: relative;
      padding-bottom: 2rem;
      @include g.mq-md {
        flex: 0 0 calc(100% / 3 - 1rem);
      }
      @include g.mq-lg {
        flex: 0 1 100%;
      }
    }
    .menu__item:last-child {
      margin-left: 0;
      margin-right: auto;
      @include g.mq-lg {
        margin-left: auto;
      }
    }
    &__img {
      position: relative;
      clip-path: polygon(100% 0, 100% 80%, 0 100%, 0 100%, 0 0);
      overflow: hidden;

      & > img {
        border-radius: 1rem 1rem 0 0;
        object-fit: cover;
        aspect-ratio: 1 / 1;
        width: 100%;
      }
    }
    &__inner {
      color: map-get(g.$theme-cafe-colors, 'color4');
      padding: 0 1rem 1rem 1rem;
      text-align: right;
      position: absolute;
      right: 0;
      bottom: 0;
    }
    &__name {
      font-family: $main-font;
      font-size: 1.6rem;
      font-weight: 500;
      line-height: 1.2;
    }
  }

  .news {
    background: g.$cWhite;
    @include sectionSpace($mb: 0, $mbMd: 0);
    &__title {
      color: map-get(g.$theme-cafe-colors, 'accentColor');
      font-family: $main-font;
      opacity: 0;
      &.active {
        @include g.fadeLift($delay: 0.3s);
      }
      &[data-title]::after {
        color: map-get(g.$theme-cafe-colors, 'subColor');
      }
    }
    &__inner {
      max-width: g.$screenLg;
    }
    &__item {
      a {
        color: g.$cDarkGray;
      }
      img {
        border-radius: 0.5rem;
        aspect-ratio: 3/2;
        width: 100%;
      }
    }
  }
}
</style>
