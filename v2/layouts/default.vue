<script setup>
import linkData from '../models/linkData.js'
import snsLinkData from '../models/snsLinkData.js'
import mdlTitle from '../layouts/theme/default/mdlTitle.vue'
import mdlNavigation from '../layouts/theme/default/mdlNavigation.vue'
import logoMark from '../components/logoMark.vue'

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
    <div class="l-header flex items-center p-2 mt-4 md:mt-0 md:p-8">
      <div class="flex items-center fixed u-z-index-10000">
        <logoMark class="logo-w-40 mr-2" />
        <a href="/"><mdlTitle :mdl-title="siteTitle" class="l-header__title mr-4 text-xl font-bold" /></a>
        <p v-if="false" class="l-header__site-text hidden xl:block">{{ siteText }}</p>
      </div>
      <div class="flex-1">
        <nav class="hidden lg:flex justify-end md:mr-16">
          <ul class="l-header__menu flex items-center">
            <mdlNavigation :links="linkData" />
            <mdlNavigation :links="snsLinkData" class="'md:ml-6'" v-if="false" />
          </ul>
        </nav>
      </div>
    </div>

    <main class="l-main">
      <slot />
    </main>

    <div
      class="l-footer mt-24 pt-4 lg:p-8 text-center lg:text-left flex flex-col lg:flex-row justify-center lg:justify-start"
    >
      <div class="order-1 lg:order-0 lg:flex lg:items-center">
        <logoMark class="l-footer__logo logo-w-50 mx-auto mb-2 lg:mb-0 lg:mr-4" />
        <mdlTitle class="l-footer__title text-xl font-bold lg-2 lg:mb-0 lg:mr-4" :mdl-title="siteTitle" />
        <p class="l-footer__text lg:hidden xl:block mb-4 lg:mb-0">{{ siteText }}</p>
      </div>
      <nav class="l-footer__navigation order-0 lg:order-1 lg:flex lg:justify-end flex-1 mb-12 lg:mb-0">
        <ul class="l-footer__menu flex flex-col lg:flex-row justify-center lg:items-center">
          <mdlNavigation :links="linkData" />
          <mdlNavigation :links="snsLinkData" v-if="false" />
        </ul>
      </nav>
    </div>
    <modalWindow>
      <ul class="modal-nav text-2xl sm:text-3xl md:text-4xl">
        <mdlNavigation :links="linkData" />
      </ul>
    </modalWindow>
  </div>
</template>

<style lang="scss">
@use '../assets/css/variables.scss';
@use '../assets/css/mixin.scss';

.l-header {
  &__title {
    @include mixin.logoTypeSet($ff: variables.$logoFontFamily, $fw: 600);
  }
}
.l-footer {
  background: map-get(variables.$theme-base-colors, cWhite);

  &__title {
    @include mixin.logoTypeSet($ff: variables.$logoFontFamily, $fw: 600);
  }

  &__navigation {
    border-bottom: solid map-get(variables.$theme-base-colors, 'cLightGray') 1px;
    @include mixin.mq-md {
      border: none;
    }
  }
}
</style>
