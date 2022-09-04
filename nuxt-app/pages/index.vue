<script setup>
import keyWords from '../models/keyWords.js'

const postData = {
  title: import.meta.env.VITE_SITE_TITLE,
  subtitle: import.meta.env.VITE_SITE_SUB_TITLE
}
useHead({
  title: postData.title,
  bodyAttrs: {
    class: 'home'
  }
})

definePageMeta({
  layoutTransition: true
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
      <section class="first-view container mx-auto h-screen flex flex-col justify-center">
        <div>
          <compHeader class="first-view__title animate">Nuxt3 Base</compHeader>
        </div>
      </section>
    </article>
  </NuxtLayout>
</template>

<style lang="scss" scoped>
@use '../assets/css/global' as g;

.home {
  .first-view {
    margin-top: -64px;
    @include g.mq-lg {
      margin-top: -72px;
    }
    &__title {
      @include g.logoTypeSet(g.$josefinSans, 800);
    }
  }
}
</style>
