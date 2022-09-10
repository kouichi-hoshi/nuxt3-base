<script setup>
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
    label: 'ガリレオについて',
    href: '',
    class: 'menu'
  }
]

/**
 * IntersectionObserver
 */
const options = {
  threshold: [0, 0.25, 0.5, 0.75, 1],
  rootMargin: '200px'
}
const header = ref()
const footer = ref()
const topReturnBtn = ref()

onMounted(() => {
  const observerInOut = new IntersectionObserver((entries) => {
    if (!entries[0].isIntersecting) {
      topReturnBtn.value.classList.add('active')
    } else {
      topReturnBtn.value.classList.remove('active')
    }
  }, options)
  observerInOut.observe(header.value)

  const observerUpDown = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      topReturnBtn.value.classList.add('up')
    } else {
      topReturnBtn.value.classList.remove('up')
    }
  }, options)
  observerUpDown.observe(footer.value)
})
</script>

<template>
  <div class="l-container relative">
    <header ref="header" class="l-header">
      <h1 class="l-header-logo-mark w-fit fixed top-2 left-2">
        <a href="/">
          <img class="l-header__logo mx-auto" src="images/pg-page/symbol-mark.svg" alt="シンボルマーク" />
          <img class="l-header__title" src="images/pg-page/logo-type.svg " alt="ガリレオ" />
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
      class="l-footer mt-24 pt-4 lg:p-8 text-center lg:text-left flex flex-col lg:flex-row justify-center lg:justify-start"
    >
      <div class="order-1 lg:order-0 lg:flex lg:items-center lg:gap-2">
        <useSVG class="l-footer__logo -mt-2 mx-auto" href="images/common/icon.svg#icon-home" />
        <logoType class="l-footer__title josefin text-2xl font-bold lg-2 lg:mb-0">ガリレオ</logoType>
        <p class="l-footer__text block mb-4 lg:mb-0 lg:-mt-1">{{ siteText }}</p>
      </div>
      <nav class="l-footer__navigation order-0 lg:order-1 lg:flex lg:justify-end flex-1 mb-12 lg:mb-0">
        <compNavigation outer-class="footer" :links="linkData" />
      </nav>
    </footer>

    <div ref="topReturnBtn" class="text-right">
      <compButton
        v-scroll-to="'body'"
        :href="'#'"
        remove-default-class
        class="top-return-btn fixed right-2 bottom-4 md:right-12 md:bottom-6"
        label=""
      >
        <useSVG inner-class="use-svg__img--white" size="28" scale="0.6" href="images/common/icon.svg#icon-arrow" />
      </compButton>
    </div>

    <modalWindow>
      <ul class="modal-nav text-2xl sm:text-3xl md:text-4xl">
        <compNavigation outer-class="modal-window" :links="linkData" />
      </ul>
      <div class="card my-2">
        <p>教室情報</p>
        <ul>
          <li>◯◯市〇〇1-1-1</li>
          <li>003-xxx-xxxx</li>
        </ul>
      </div>
      <div class="my-2">
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
}
.l-header {
  &__logo {
    min-width: 60px;
    max-width: 60px;
  }
  &__title {
    min-width: 100px;
    max-width: 100px;
  }
}
</style>
