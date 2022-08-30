<script setup>
import itemsSample from '../models/itemsSample.js'
import keyWords from '../models/keyWords.js'
import SlideSplide from '../components/slideSplide.vue'

const postData = {
  title: import.meta.env.VITE_SITE_TITLE,
  subtitle: import.meta.env.VITE_SITE_SUB_TITLE
}
useHead({
  bodyAttrs: {
    class: 'home'
  }
})

/**
 * slideSplide
 */
const ariaLabel = 'slide' //スライド本体のaria-label属性の値
const slideAspect = 'aspect-[16/9]' //スライド画像のアスペクトレシオの設定
const imgSize = { width: 1920, height: 1080 }

// スライドオプション
const slideOptions = {
  type: 'fade', // スライドの動作をフェードに指定
  interval: '4000', //自動再生の間隔をミリ秒単位で指定
  speed: '1000', // スライドが切り替わる時間をミリ秒で指定
  arrows: true, // スライドを操作するためのアローボタンを使用しない設定
  autoplay: true, // ロード後、自動的にスライドを実行
  rewind: true // 最後のスライド画像が表示された後、最初の画像にもどる
}

//スライドデータ
const slideItems = [
  {
    src: '/images/sample/001.jpg',
    alt: '001画像',
    caption: '001画像',
    href: '/'
  },
  {
    src: '/images/sample/002.jpg',
    alt: '002画像',
    caption: '002画像',
    href: '/'
  },
  {
    src: '/images/sample/003.jpg',
    alt: '003画像',
    caption: '003画像',
    href: '/'
  }
]
</script>

<template>
  <NuxtLayout>
    <article>
      <section class="first-view flex justify-center flex-col relative text-center">
        <div class="first-view__title flex flex-col justify-center items-center mt-6 md:mt-16">
          <h2 class="first-view__title-text mb-6 text-8xl md:text-8xl lg:mb-4 lg:text-9xl">
            {{ postData.title }}
          </h2>
          <p class="mb-8 lg:text-xl">[ {{ postData.subtitle }} ]</p>
          <p class="mb-6 mx-auto text-lg lg:text-4xl">テキスト</p>
        </div>
      </section>
      <section class="slide p-4 mg:mt-0 mb-6 md:mb-24 lg:h-screen truncate lg:flex lg:flex-col lg:justify-center">
        <cHeadline class="text-center my-4 text-2xl md:text-3xl">Slide</cHeadline>
        <div class="slide__inner mx-auto relative">
          <div class="flex u-maxWidthMd mx-auto">
            <slideSplide
              :slide-items="slideItems"
              :slide-options="slideOptions"
              :slideAspect="slideAspect"
              :aria-label="ariaLabel"
              view="img-text"
            />
          </div>
        </div>
      </section>

      <section class="key-words container mx-auto p-2 u-maxWidthLg">
        <cHeadline class="text-center text-2xl md:text-3xl my-4">text</cHeadline>
        <ul
          class="key-words__item-wrap text-center px-10 mb-24 grid grid-cols-1 gap-1 md:gap-6 md:grid-cols-2 md:grid-cols-3 lg:text-lg"
        >
          <template v-for="(item, key) in keyWords" :key="key">
            <tooltip tagName="li" class="flex justify-center key-words__item">
              <template #label>
                <intersectionOA class="flex w-full justify-between justify-center p-4 mask mask-1" observe="observe">
                  <div class="w-full">{{ item.label }}</div>
                  <svg class="icon-message" width="24" height="24" viewBox="0 0 24 24">
                    <use href="/images/common/icon/message.svg#symbol" />
                  </svg>
                </intersectionOA>
              </template>
              <template #content>
                <p class="">{{ item.content }}</p>
              </template>
            </tooltip>
          </template>
        </ul>
      </section>
    </article>
    <aside></aside>
  </NuxtLayout>
</template>

<style lang="scss">
@use '../assets/css/global' as g;

// TODO
.home {
  .l-header {
    @include g.mq-md {
      display: flex;
      position: absolute;
      z-index: 1;
      width: 100%;
    }
    &__title {
      display: none;
      @include g.mq-md {
        display: block;
      }
    }
  }
  .l-main {
    .first-view {
      height: 80vh;
      @include g.mq-md {
        height: 100vh;
      }
      &__title {
        flex: 1 1 auto;
      }
      &__title-text {
        @include g.logoTypeSet($ff: g.$logoFontFamily, $fw: 600);
      }
      &__plan {
        li:last-child {
          display: none;
        }
      }
    }
    .slide {
      background: map-get(g.$theme-base-colors, cGray);
      color: map-get(g.$theme-base-colors, cWhite);
      position: relative;
      &__inner {
        @include g.mq-lg {
          max-width: unset;
          &::before {
            color: hsla(0, 0%, 100%, 0.1);
            content: 'Website Production\a Achievements';
            font-size: 6rem;
            line-height: 6.5rem;
            position: absolute;
            right: -50%;
            top: calc(50vh - 15rem);
            transform: rotate(90deg);
            transform-origin: center;
            white-space: pre;
          }
        }
      }
    }
    .key-words {
      &__item {
        border: 5px solid map-get(g.$theme-base-colors, cLightGray);
        background: map-get(g.$theme-base-colors, cWhite);
      }
      .icon-message {
        fill: map-get(g.$theme-base-colors, subColor);
      }
    }
  }
  .l-footer {
    @include g.mq-lg {
      margin-top: 0;
    }
  }
}
</style>
