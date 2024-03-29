<script setup>
import LinkGlobal from '../models/LinkGlobal.js'

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

const isHome = () => {
  if (useRoute().fullPath === '/') {
    return true
  } else {
    return false
  }
}
</script>

<template>
  <div class="l-container relative">
    <header ref="header" class="l-header p-4 flex items-center md:mr-16">
      <div class="flex items-center">
        <a href="/" class="flex items-center gap-2">
          <useSVG class="l-header__logo -mt-2" href="images/common/icon.svg#icon-home" />
          <logoType class="l-header__title mr-4 josefin text-2xl font-bold">{{ siteTitle }}</logoType>
        </a>
        <p class="l-header__site-text hidden xl:block -mt-1">{{ siteText }}</p>
      </div>
      <div class="flex-1">
        <nav class="hidden lg:flex justify-end">
          <compNavigation outer-class="header flex items-center" :links="LinkGlobal" />
        </nav>
      </div>
    </header>

    <main class="l-main">
      <slot />
    </main>

    <footer
      v-show="!isHome"
      ref="footer"
      class="l-footer mt-24 pt-4 lg:p-8 text-center lg:text-left flex flex-col lg:flex-row justify-center lg:justify-start"
    >
      <div class="order-1 lg:order-0 lg:flex lg:items-center lg:gap-2">
        <useSVG class="l-footer__logo -mt-2 mx-auto" href="images/common/icon.svg#icon-home" />
        <logoType class="l-footer__title josefin text-2xl font-bold lg-2 lg:mb-0">{{ siteTitle }}</logoType>
        <p class="l-footer__text block mb-4 lg:mb-0 lg:-mt-1">{{ siteText }}</p>
      </div>
      <nav class="l-footer__navigation order-0 lg:order-1 lg:flex lg:justify-end flex-1 mb-12 lg:mb-0">
        <compNavigation outer-class="footer" :links="LinkGlobal" />
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
        <compNavigation outer-class="modal-window" :links="LinkGlobal" />
      </ul>
    </modalWindow>
  </div>
</template>

<style lang="scss" scoped>
// @use '../assets/css/global' as g;
</style>
