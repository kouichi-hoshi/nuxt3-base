<script setup>
import linkData from '../models/linkData.js'

// サイトのタイトルを取得
const siteTitle = import.meta.env.VITE_SITE_TITLE

// サイトの説明文を取得
const siteText = import.meta.env.VITE_SITE_TEXT

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - ` + siteTitle : siteTitle
  }
})
</script>

<template>
  <div class="l-container relative">
    <header class="l-header p-4 flex items-center md:mr-16">
      <div class="flex items-center">
        <a href="/" class="flex items-center gap-2">
          <symbolMark href="images/common/icon.svg#icon-home" />
          <logoType :mdl-title="siteTitle" class="l-header__title mr-4 josefin text-xl font-bold" />
        </a>
        <p class="l-header__site-text hidden xl:block">{{ siteText }}</p>
      </div>
      <div class="flex-1">
        <nav class="hidden lg:flex justify-end">
          <compNavigation outer-class="header flex items-center" :links="linkData" />
        </nav>
      </div>
    </header>

    <main class="l-main">
      <slot />
    </main>

    <footer
      class="l-footer mt-24 pt-4 lg:p-8 text-center lg:text-left flex flex-col lg:flex-row justify-center lg:justify-start"
    >
      <div class="order-1 lg:order-0 lg:flex lg:items-center lg:gap-2">
        <symbolMark href="images/common/icon.svg#icon-home" class="mx-auto" />
        <logoType class="l-footer__title josefin text-xl font-bold lg-2 lg:mb-0" :mdl-title="siteTitle" />
        <p class="l-footer__text xl:block mb-4 lg:mb-0">{{ siteText }}</p>
      </div>
      <nav class="l-footer__navigation order-0 lg:order-1 lg:flex lg:justify-end flex-1 mb-12 lg:mb-0">
        <compNavigation outer-class="footer" :links="linkData" />
      </nav>
    </footer>

    <!-- TODO: SVGアイコンを分離する -->
    <div ref="topReturnBtn" class="text-right">
      <compButton
        v-scroll-to="'body'"
        :href="'#'"
        class="top-return-btn c-button--circle fixed right-2 bottom-4 md:right-12 md:bottom-8"
        label=""
      >
        <svg
          width="2rem"
          height="2rem"
          viewBox="0 0 24 24"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
        >
          <title>up_line</title>
          <g id="" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g id="Arrow" transform="translate(-432.000000, 0.000000)">
              <g id="up_line" transform="translate(432.000000, 0.000000)">
                <rect id="" fill-rule="nonzero" x="0" y="0" width="24" height="24"></rect>
                <path
                  id=""
                  d="M11.2929,8.2928 C11.6834,7.90228 12.3166,7.90228 12.7071,8.2928 L18.364,13.9497 C18.7545,14.3402 18.7545,14.9733 18.364,15.3639 C17.9734,15.7544 17.3403,15.7544 16.9497,15.3639 L12,10.4141 L7.05025,15.3639 C6.65973,15.7544 6.02656,15.7544 5.63604,15.3639 C5.24551,14.9733 5.24551,14.3402 5.63604,13.9497 L11.2929,8.2928 Z"
                  fill="#09244BFF"
                  class="up-arrow"
                ></path>
              </g>
            </g>
          </g>
        </svg>
      </compButton>
    </div>

    <modalWindow>
      <ul class="modal-nav text-2xl sm:text-3xl md:text-4xl">
        <compNavigation outer-class="modal-window" :links="linkData" />
      </ul>
    </modalWindow>
  </div>
</template>

<style lang="scss">
// @use '../assets/css/global' as g;
</style>
