<script setup>
import linkData from '../models/linkData.js'

// サイトのタイトルを取得
const siteTitle = import.meta.env.VITE_SITE_TITLE

// サイトの説明文を取得
const siteText = import.meta.env.VITE_SITE_TEXT

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - ` + siteTitle : siteTitle
  },
  // Web font
  link: [
    { rel: 'shortcut icon', href: '/favicon.ico' },
    { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
    { rel: 'icon', type: 'image/png', href: '/android-chrome-192x192.png' },

    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;500;600;700&display=swap'
    }
  ]
})
</script>

<template>
  <div class="l-container relative">
    <div class="l-header p-4 flex items-center md:mr-16">
      <div class="flex items-center">
        <a href="/">
          <symbolMark class="hidden logo-w-40 mr-2" />
          <logoType :mdl-title="siteTitle" class="l-header__title mr-4 text-xl font-bold" />
        </a>
        <p class="l-header__site-text hidden xl:block">{{ siteText }}</p>
      </div>
      <div class="flex-1">
        <nav class="hidden lg:flex justify-end">
          <compNavigation outer-class="header flex items-center" :links="linkData" />
        </nav>
      </div>
    </div>

    <main class="l-main">
      <slot />
    </main>

    <footer
      class="l-footer mt-24 pt-4 lg:p-8 text-center lg:text-left flex flex-col lg:flex-row justify-center lg:justify-start"
    >
      <div class="order-1 lg:order-0 lg:flex lg:items-center">
        <symbolMark class="l-footer__logo logo-w-50 mx-auto mb-2 lg:mb-0 lg:mr-4" />
        <logoType class="l-footer__title text-xl font-bold lg-2 lg:mb-0 lg:mr-4" :mdl-title="siteTitle" />
        <p class="l-footer__text xl:block mb-4 lg:mb-0">{{ siteText }}</p>
      </div>
      <nav class="l-footer__navigation order-0 lg:order-1 lg:flex lg:justify-end flex-1 mb-12 lg:mb-0">
        <compNavigation outer-class="footer" :links="linkData" />
      </nav>
    </footer>

    <modalWindow>
      <ul class="modal-nav text-2xl sm:text-3xl md:text-4xl">
        <compNavigation outer-class="modal-window" :links="linkData" />
      </ul>
    </modalWindow>
  </div>
</template>

<style lang="scss">
@use '../assets/css/global' as g;

// .l-header {
//   &__title {
//     @include g.logoTypeSet($ff: g.$logoFontFamily, $fw: 600);
//   }
// }
// .l-footer {
//   background: map-get(g.$theme-base-colors, cWhite);

//   &__title {
//     @include g.logoTypeSet($ff: g.$logoFontFamily, $fw: 600);
//   }

//   &__navigation {
//     border-bottom: solid map-get(g.$theme-base-colors, 'cLightGray') 1px;
//     @include g.mq-md {
//       border: none;
//     }
//   }
// }
</style>
