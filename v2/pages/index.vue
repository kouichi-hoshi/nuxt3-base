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
// スライドオプション
const slideOptions = {
  type: 'fade', // スライドの動作をフェードに指定
  interval: '4000', //自動再生の間隔をミリ秒単位で指定
  speed: '1000', // スライドが切り替わる時間をミリ秒で指定
  arrows: true, // スライドを操作するためのアローボタンを使用しない設定
  autoplay: true, // ロード後、自動的にスライドを実行
  rewind: true, // 最後のスライド画像が表示された後、最初の画像にもどる
  slideAspect: 'aspect-[16/9]'
}

//スライドデータ
const slideItems = [
  {
    src: '/images/sample/001.jpg',
    webpSrc: '/images/sample/001.webp',
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
      <section class="container mx-auto my-24 md:my-48">
        <compHeader>compPicture</compHeader>
        <compPicture
          webp-src="/images/sample/001.webp"
          img-src="/images/sample/001.jpg"
          img-class="img-class"
          alt="picture-test"
        />
      </section>

      <section class="container mx-auto my-24 md:my-48">
        <compHeader>slideSplide</compHeader>
        <slideSplide :slide-items="slideItems" :slide-options="slideOptions" />
      </section>

      <section class="container mx-auto my-24 md:my-48">
        <compHeader>compButton</compHeader>
        <compButton class="my-4 mx-auto" href="">a要素</compButton>
        <compButton btn removeDefaultClass class="c-button__white my-4 mx-auto">Button要素</compButton>
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

<style lang="scss" scoped>
@use '../assets/css/global' as g;
</style>
