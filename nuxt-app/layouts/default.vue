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
const headerMarker = ref()
const footer = ref()
const header = ref()
const topReturnBtn = ref()

onMounted(() => {
  const observerInOut = new IntersectionObserver((entries) => {
    if (!entries[0].isIntersecting) {
      topReturnBtn.value.classList.add('is-active')
      topReturnBtn.value.classList.remove('hidden')
      if (isHome) {
        header.value.classList.add('is-active')
        header.value.classList.remove('hidden')
      }
    } else {
      topReturnBtn.value.classList.remove('is-active')
      if (isHome) {
        header.value.classList.remove('is-active')
      }
    }
  }, options)
  observerInOut.observe(headerMarker.value)

  // const observerUpDown = new IntersectionObserver((entries) => {
  //   if (entries[0].isIntersecting) {
  //     topReturnBtn.value.classList.add('is-up')
  //   } else {
  //     topReturnBtn.value.classList.remove('is-up')
  //   }
  // }, options)
  // observerUpDown.observe(footer.value)
})

//TODO:
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
    <span ref="headerMarker" class="header-marker"></span>

    <main class="l-main">
      <slot />
    </main>

    <footer
      ref="footer"
      class="l-footer p-footer md:p-8 text-center md:text-left flex flex-col md:flex-row justify-center md:justify-start"
    >
      <div class="order-1 md:order-0 md:flex md:items-center md:gap-2">
        <useSVG view-box="0 0 829.1 896.1" size="32" class="mb-4 md:mb-0" href="/images/common/logo-v5.svg#logo-v5" />
        <logoType class="l-footer__title josefin text-2xl font-bold lg-2 lg:mb-0">{{ siteTitle }}</logoType>
        <p class="l-footer__text block mb-4 md:mb-0 md:-mt-1">{{ siteText }}</p>
      </div>
      <div class="l-footer__navigation order-0 md:order-1 md:flex md:justify-end flex-1 mb-12 md:mr-24 md:mb-0">
        <compNavigation outer-class="footer md:flex" inner-class="p-navigation-menu" :links="LinkGlobal" />
      </div>
    </footer>

    <div ref="topReturnBtn" class="top-return-btn hidden">
      <compButton v-scroll-to="'body'" :href="'#'" remove-default-class class="" label="">
        <useSVG inner-class="use-svg__img--white" size="28" scale="0.6" href="/images/common/icon.svg#icon-arrow" />
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
