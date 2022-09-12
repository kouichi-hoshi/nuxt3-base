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
const header = ref()
const footer = ref()
const logoMark = ref()
const topReturnBtn = ref()
const bannerFreeLesson = ref()

onMounted(() => {
  const observerHeader = new IntersectionObserver((entries) => {
    if (!entries[0].isIntersecting) {
      bannerFreeLesson.value.classList.add('isActive')
      logoMark.value.classList.add('isActive')
      topReturnBtn.value.classList.add('isActive')
      initial.header = false
    } else {
      bannerFreeLesson.value.classList.remove('isActive')
      logoMark.value.classList.remove('isActive')
      topReturnBtn.value.classList.remove('isActive')
    }
  }, options)
  observerHeader.observe(header.value)

  const observerFooter = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      bannerFreeLesson.value.classList.remove('isActive')
      topReturnBtn.value.classList.add('is-fade-out')
    } else {
      bannerFreeLesson.value.classList.add('isActive')
      topReturnBtn.value.classList.remove('is-fade-out')
    }
  }, options)
  observerFooter.observe(footer.value)
})
</script>

<template>
  <div class="l-container relative">
    <header ref="header" class="l-header">
      <h1
        ref="logoMark"
        class="l-header__logo-mark w-fit fixed top-2 left-2 isActive"
        :class="{ 'u-opa-0': initial.header }"
      >
        <a href="/">
          <img class="l-header__logo mx-auto" src="images/pg-page/symbol-mark.svg" alt="シンボルマーク" />
          <img class="l-header__title hidden md:block" src="images/pg-page/logo-type.svg " alt="ガリレオ" />
        </a>
        <p v-if="false" class="l-header__site-text">キッズ・ジュニア プログラミングスクール</p>
      </h1>
      <div v-if="false" class="flex-1">
        <nav class="hidden lg:flex justify-end">
          <compNavigation outer-class="header flex items-center" :links="linkData" />
        </nav>
      </div>
    </header>

    <main class="l-main">
      <slot />
    </main>

    <footer
      ref="footer"
      class="l-footer mt-12 py-4 lg:p-8 text-center lg:text-left flex flex-col lg:flex-row justify-center lg:justify-start"
    >
      <div class="order-1 lg:order-0 lg:flex lg:items-center lg:gap-2">
        <img class="l-header__logo mx-auto" src="images/pg-page/symbol-mark.svg" alt="シンボルマーク" />
        <img class="l-header__title mx-auto" src="images/pg-page/logo-type.svg " alt="ガリレオ" />
        <useSVG v-if="false" class="l-footer__logo -mt-2 mx-auto" href="images/common/icon.svg#icon-home" />
        <logoType v-if="false" class="l-footer__title josefin text-2xl font-bold lg-2 lg:mb-0">ガリレオ</logoType>
        <p v-if="false" class="l-footer__text block mb-4 lg:mb-0 lg:-mt-1">{{ siteText }}</p>
      </div>
      <nav class="l-footer__navigation order-0 lg:order-1 lg:flex lg:justify-end flex-1 mb-12 lg:mb-0">
        <compNavigation outer-class="footer" :links="linkData" />
      </nav>
    </footer>

    <div ref="topReturnBtn" class="top-return-btn--fixed">
      <compButton v-scroll-to="'body'" :href="'#'" remove-default-class class="top-return-btn" label="">
        <useSVG inner-class="use-svg__img--white" size="28" scale="0.6" href="images/common/icon.svg#icon-arrow" />
      </compButton>
    </div>

    <div ref="topReturnBtn" class="text-right">
      <compButton
        v-scroll-to="'body'"
        :href="'#'"
        remove-default-class
        class="top-return-btn fixed right-2 bottom-4 md:right-12 md:bottom-6"
        :class="{ 'u-opa-0': initial.header }"
        label=""
      >
        <useSVG inner-class="use-svg__img--white" size="28" scale="0.6" href="images/common/icon.svg#icon-arrow" />
      </compButton>
    </div>

    <div
      v-scroll-to="'#trial-lesson-head'"
      :href="'#'"
      ref="bannerFreeLesson"
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
    @include g.moveY(animeUp, $yFrom: 0%, $yTo: -120%);
  }

  &__logo-mark.isActive {
    animation: animeDown 0.4s ease-out forwards;
    @include g.moveY(animeDown, $yFrom: -120%, $yTo: 0%);
  }
}
.l-footer {
  // background: map-get(g.$theme-pg, 'baseColor-mid');
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
  &.isActive {
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

.is-fade-out {
  @include g.fadeOut();
}

.top-return-btn--fixed {
  .top-return-btn {
    display: block;
    position: absolute;
    right: 0.5rem;
    bottom: 8rem;
    @include g.mq-md {
      right: 3rem;
      bottom: 11rem;
    }
  }
}

.top-return-btn {
  background: map-get(g.$theme-pg, 'accentColor');
}
</style>
