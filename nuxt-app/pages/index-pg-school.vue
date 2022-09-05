<script setup>
import itemsSample from '../models/itemsSample.js'

const postData = {
  title: import.meta.env.VITE_SITE_TITLE,
  subtitle: import.meta.env.VITE_SITE_SUB_TITLE
}

useHead({
  title: postData.title,
  bodyAttrs: {
    class: 'sample'
  }
})

definePageMeta({
  layoutTransition: true
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

/**
 * 指定した要素の交差を検知させる
 */
function scroll(targets, options) {
  const observer = new IntersectionObserver(doWhenIntersect, options)
  targets.forEach((target) => {
    observer.observe(target)
  })
}

/**
 * 画面にin/outした要素にclassを着脱する
 * 下記のようにCSSを設定する
 * opacity: 0;
 * &.active {
 *  @include g.fadeLift($delay: 0.3s);
 * }
 */
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
  <NuxtLayout name="pg-school">
    <article>
      <section class="first-view widthSm container mx-auto h-screen flex flex-col justify-center">
        <useSVG size="128" class="mx-auto" href="images/common/icon.svg#icon-home" />
        <compHeader class="first-view__title animate">ガリレオ</compHeader>
        <section>
          <h3 class="text-center">アルゴリズムが動く、描く、聞こえる、思考する。</h3>
          <h4 class="text-center mb-6">プログラミングで行う創作の楽しさを伝えたい。</h4>
          <div class="hentry">
            <p>
              私たち「ガリレオ」は、子どもたちにプログラミングによる創作活動を通して理解を深めてもらい、その楽しさを存分に味わうことから始まるスクールです。
            </p>
            <p>
              キーボードに触れることからはじめる低学年コースから、
              イラストや動画やゲームを作ったりITを学ぶ小学生コース、 将来の就職に有利な即戦力を目指す中学生コースまで、
              子どもたちの可能性を大切にサポートしていきます。
            </p>
          </div>
          <div class="first-view__free-lesson card">体験レッスン</div>
        </section>
      </section>

      <section id="concept" class="concept section-space">
        <compHeader class="concept__title animate" data-title="コンセプト">Concept</compHeader>

        <div class="concept__01 animate">
          <div class="basis-1/2 order-1 relative">
            <slideSplide :slide-items="slideItems" :slide-options="setSlideStart(3)" />
          </div>
          <div class="basis-1/2 order-2 my-auto sentence">
            <compHeadline class="concept__content-title"> Lorem ipsum dolor sit amet </compHeadline>
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
          </div>
          <div class="basis-1/2 order-1 my-auto sentence">
            <compHeadline class="concept__content-title animate"> Lorem ipsum dolor sit amet </compHeadline>
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
          </div>
          <div class="basis-1/2 order-2 my-auto sentence">
            <compHeadline class="concept__content-title animate"> Lorem ipsum dolor sit amet </compHeadline>
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
        <compHeader class="menu__title animate" data-title="メニュー">Menu</compHeader>
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
          <compButton class="mx-auto">More</compButton>
        </p>
      </section>

      <section id="news" class="news">
        <div class="container mx-auto">
          <compHeader class="news__title animate" data-title="おしらせ">News</compHeader>
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
            <compButton class="mx-auto">More</compButton>
          </p>
        </div>
      </section>
    </article>
  </NuxtLayout>
</template>

<style lang="scss">
@use '@splidejs/vue-splide/css';
@use '../assets/css/global' as g;

@mixin c-header--custom01($fc: g.$cBlack) {
  &__title {
    @include g.logoTypeSet(g.$josefinSans, 800);
    margin-top: 2rem;
    margin-bottom: 3rem;
    color: $fc;
    opacity: 0;
    @include g.mq-sm {
      margin-bottom: 6rem;
    }
    &.active {
      @include g.fadeLift($delay: 0.3s);
    }
    &[data-title]::after {
      color: $fc;
      border-bottom: 2px solid $fc;
    }
  }
}

.sample {
  .section-space {
    @include g.sectionSpace();
  }

  .c-button--circle {
    @include g.buttonCircle;
  }

  .first-view {
    margin-top: -64px;
    @include g.mq-lg {
      margin-top: -72px;
    }
    &__title {
      @include g.logoTypeSet(g.$josefinSans, 800);
      margin-bottom: 0;
      opacity: 0;
      &.active {
        @include g.fadeLift($delay: 0.3s);
      }
    }
    &.widthSm {
      max-width: g.$screenSm;
    }
  }

  .concept {
    @include g.dataTitle();
    @include g.sectionSpace();
    background: g.$cDarkGray;
    color: g.$cBlack;

    &__title {
      @include g.logoTypeSet(g.$josefinSans, 800);
      margin-top: 2rem;
      margin-bottom: 3rem;
      color: g.$cWhite;
      opacity: 0;
      @include g.mq-sm {
        margin-bottom: 6rem;
      }
      &.active {
        @include g.fadeLift($delay: 0.3s);
      }
      &[data-title]::after {
        color: g.$cWhite;
        border-bottom: 2px solid g.$cWhite;
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

    &__content-title {
      @include g.logoTypeSet(g.$josefinSans, 800);
      color: g.$cWhite;
      @include g.mq-md {
        font-size: 2rem;
      }
    }
  }

  .menu {
    @include g.dataTitle();
    @include g.sectionSpace();
    @include c-header--custom01();

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
      background: g.$cDarkBlack;
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
      color: g.$cWhite;
      padding: 0 1rem 1rem 1rem;
      text-align: right;
      position: absolute;
      right: 0;
      bottom: 0;
    }
    &__name {
      font-size: 1.6rem;
      font-weight: 500;
      line-height: 1.2;
    }
  }

  .news {
    @include g.sectionSpace();
    @include g.dataTitle();
    &__title {
      @include g.logoTypeSet(g.$josefinSans, 800);
      opacity: 0;
      &.active {
        @include g.fadeLift($delay: 0.3s);
      }
    }
    &__inner {
      max-width: g.$screenLg;
    }
    &__item {
      img {
        border-radius: 0.5rem;
        aspect-ratio: 3/2;
        width: 100%;
      }
    }
  }
}
</style>
