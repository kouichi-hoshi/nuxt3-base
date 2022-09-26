<script setup>
import { reactive } from 'vue'

// import linkData from '../models/linkData.js'

// サイトのタイトルを取得
const siteTitle = import.meta.env.VITE_SITE_TITLE

// サイトの説明文を取得
const siteText = import.meta.env.VITE_SITE_TEXT

useHead({
  //titleタグ
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - ` + siteTitle : siteTitle
  }
})

const linkData = [
  {
    label: 'カリキュラム',
    href: '',
    class: 'menu'
  },
  {
    label: '体験レッスン',
    href: '',
    class: 'menu'
  },
  {
    label: 'よくある質問',
    href: '',
    class: 'menu'
  },
  {
    label: 'アクセス',
    href: '',
    class: 'menu'
  },
  {
    label: 'ガリレオについて',
    href: '',
    class: 'menu'
  }
]

let initial = reactive({
  header: true
})

/**
 * IntersectionObserver
 */
const options = {
  threshold: [0, 0.25, 0.5, 0.75, 1],
  rootMargin: '200px'
}
const options2 = {
  threshold: 0.5,
  rootMargin: '0px'
}
const header = ref()
const footer = ref()
const logoMark = ref()
const topReturnBtn = ref()
const bannerFreeLesson = ref()

onMounted(() => {
  const observerHeader = new IntersectionObserver((entries) => {
    if (!entries[0].isIntersecting) {
      bannerFreeLesson.value.classList.add('is-active')
      logoMark.value.classList.add('is-active')
      topReturnBtn.value.classList.add('is-active')
      topReturnBtn.value.classList.remove('hidden')
      initial.header = false
    } else {
      bannerFreeLesson.value.classList.remove('is-active')
      logoMark.value.classList.remove('is-active')
      topReturnBtn.value.classList.remove('is-active')
    }
  }, options)
  observerHeader.observe(header.value)

  const observerFooter = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      bannerFreeLesson.value.classList.remove('is-active')
      topReturnBtn.value.classList.add('is-up')
    } else {
      bannerFreeLesson.value.classList.add('is-active')
      topReturnBtn.value.classList.remove('is-up')
    }
  }, options2)
  observerFooter.observe(footer.value)
})
</script>

<template>
  <div class="l-container relative">
    <header ref="header" class="l-header">
      <h1
        ref="logoMark"
        class="l-header__logo-mark w-fit fixed top-2 left-2 z-10 isActive"
        :class="{ 'u-opa-0': initial.header }"
      >
        <a href="">
          <img class="l-header__logo mx-auto" src="/images/pg-page/symbol-mark.svg" alt="シンボルマーク" />
          <img class="l-header__title hidden md:block" src="/images/pg-page/logo-type.svg " alt="ガリレオ" />
        </a>
        <p v-if="false" class="l-header__site-text">キッズ・ジュニア プログラミングスクール</p>
      </h1>
      <div v-if="false" class="flex-1">
        <nav class="hidden lg:flex justify-end">
          <compNavigation outer-class="header flex items-center" :links="linkData" />
        </nav>
      </div>
    </header>
    <span ref="headerMarker" class="header-marker"></span>

    <main class="l-main">
      <slot />
    </main>

    <footer
      ref="footer"
      class="l-footer p-footer md:p-8 text-center md:text-left flex flex-col md:flex-row justify-center md:justify-start"
    >
      <div class="order-1 md:order-0 md:flex md:items-center md:gap-2">
        <a href="">
          <img class="l-header__logo mx-auto" src="/images/pg-page/symbol-mark.svg" alt="シンボルマーク" />
        </a>
        <a href="">
          <img class="l-header__title mx-auto" src="/images/pg-page/logo-type.svg " alt="ガリレオ" />
        </a>
      </div>
      <div
        class="l-footer__navigation order-0 md:order-1 md:flex md:justify-end flex-1 mb-12 md:mr-24 md:mb-0 md:items-center"
      >
        <compNavigation outer-class="footer md:flex" inner-class="p-navigation-menu" :links="linkData" />
      </div>
    </footer>

    <div ref="topReturnBtn" class="p-top-return-btn hidden">
      <compButton v-scroll-to="'body'" :href="'#'" remove-default-class class="" label="">
        <useSVG inner-class="use-svg__img--white" size="28" scale="0.6" href="/images/common/icon.svg#icon-arrow" />
      </compButton>
    </div>

    <div
      ref="bannerFreeLesson"
      v-scroll-to="'#trial-lesson-head'"
      :href="'#'"
      class="banner-free-lesson fixed z-10 left-0 bottom-0 isActive"
      :class="{ 'u-opa-0': initial.header }"
    >
      <p class="banner-free-lesson__inner">
        <svg class="banner-free-lesson__svg mr-2 md:mb-2" viewBox="0 0 24 19">
          <use href="/images/pg-page/icon-mail.svg#icon-mail" />
        </svg>
        体験レッスン
      </p>
    </div>

    <modalWindow>
      <ul class="modal-nav text-2xl sm:text-2xl md:text-2xl">
        <compNavigation outer-class="modal-window" :links="linkData" />
      </ul>
      <div v-if="false" class="card my-2">
        <p>教室情報</p>
        <ul>
          <li>〇〇市〇〇町 1-1-1</li>
          <li>003-xxx-xxxx</li>
        </ul>
      </div>
      <div v-if="false" class="my-2">
        <p>お問い合わせ</p>
        <form action="" method="post">
          <div class="my-2">
            <label for="name">名前</label>
            <input id="name" type="text" name="name" />
          </div>
          <div class="my-2">
            <label for="email">メールアドレス</label>
            <input id="email" type="mail" name="email" />
          </div>
          <div class="my-2">
            <label for="message">内容</label>
            <textarea id="message" name="message"></textarea>
          </div>
          <input class="c-button__light" type="submit" value="送信する" />
        </form>
      </div>
    </modalWindow>
  </div>
</template>

<style lang="scss" scoped>
@use '../assets/css/global' as g;
@mixin moveY($moveY, $yFrom: 0, $yTo: 100%) {
  @keyframes #{$moveY} {
    0% {
      transform: translateY($yFrom);
    }
    100% {
      transform: translateY($yTo);
    }
  }
}

body {
  background: g.$cMidWhite;
  font-size: 1.6rem;
}
.l-header {
  &__logo {
    height: 50px;
    @include g.mq-md {
      height: 60px;
    }
  }
  &__title {
    min-width: 100px;
    max-width: 100px;
  }
  &__logo-mark {
    animation: animeUp 0.4s ease-out forwards;
    @include moveY(animeUp, $yFrom: 0%, $yTo: -120%);
  }

  &__logo-mark.isActive {
    animation: animeDown 0.4s ease-out forwards;
    @include moveY(animeDown, $yFrom: -120%, $yTo: 0%);
  }
}
.l-footer {
  background: linear-gradient(#81d9fd 0%, #3cc8ff 100%);
  font-family: g.$mPlusRounded1c;
  font-weight: 500;
}
.banner-free-lesson {
  padding: 1.2rem 0.8rem 1rem 0.8rem;
  border-right: 8px solid map-get(g.$theme-pg, 'mainColor');
  border-radius: 0 4px 4px 0;
  background: map-get(g.$theme-pg, 'accentColor');
  color: map-get(g.$theme-pg, 'mainColor');
  text-align: center;
  animation: slide 0.4s ease-out forwards;
  cursor: pointer;
  @include g.slide($name: slide, $from: 0, $to: -100%);
  &.is-active {
    animation: slideIn 0.4s ease-out forwards;
    @include g.slide($name: slideIn, $from: -200%, $to: 0);
  }
  &__inner {
    display: flex;
    justify-content: center;
    @include g.mq-md {
      flex-direction: row;
      writing-mode: vertical-lr;
    }
  }
  &__svg {
    width: 24px;
  }
}

.p-top-return-btn {
  background: map-get(g.$theme-pg, 'accentColor');
}
</style>
