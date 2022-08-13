<script setup>
import linkData from '../models/linkData.js'
import snsLinkData from '../models/snsLinkData.js'
import mdlLogo from '../layouts/theme/cafe/mdlLogo.vue'
import mdlTitle from '../layouts/theme/cafe/mdlTitle.vue'
import mdlNavigation from '../layouts/theme/cafe/mdlNavigation.vue'
import logoMark from '../components/logoMark.vue'

// サイトのタイトルを取得
const siteTitle = import.meta.env.VITE_SITE_TITLE

// サイトの説明文を取得
const siteText = import.meta.env.VITE_SITE_TEXT
</script>

<template>
  <div class="l-container">
    <div class="l-header relative z-10">
      <mdlLogo class="logo-w-40 fixed m-8" />
      <nav class="l-navigation hidden md:flex flex-col justify-center container u-maxWidth1340 relative mx-auto">
        <ul class="flex">
          <mdlNavigation :links="linkData" :class="'ml-4'" />
          <mdlNavigation :links="snsLinkData" :class="'ml-4'" />
        </ul>
      </nav>
      <HamburgerButton btn-id="btn01" class="u-fixed right-0 m-8" />
    </div>

    <main class="l-main">
      <slot />
    </main>

    <div class="l-footer container mx-auto py-24">
      <logoMark class="logo-w-50" />
      <mdlTitle :mdl-title="siteTitle" class="text-xl font-bold" />
      <p>{{ siteText }}</p>
      <nav class="hidden md:flex justify-end">
        <ul class="flex">
          <mdlNavigation class="ml-6" :links="linkData" />
          <mdlNavigation class="ml-6" :links="snsLinkData" />
        </ul>
      </nav>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '../assets/css/variables.scss';

.l-container {
  background: map-get(variables.$theme-cafe-colors, 'mainColor');
  position: relative;
}

.l-navigation {
  height: 6rem;
}
</style>
