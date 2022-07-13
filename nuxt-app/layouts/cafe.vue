<script setup>
import linkData from '../models/linkData.js'
import snsLinkData from '../models/snsLinkData.js'
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
      <logoMark class="logo-w-40 fixed top-4 :top-8 left-4 md:left-8" />
      <nav class="pl-28 pt-6 hidden md:block">
        <ul class="flex">
          <mdlNavigation :links="linkData" :class="'ml-4'" />
          <mdlNavigation :links="snsLinkData" :class="'ml-4'" />
        </ul>
      </nav>
      <HamburgerButton
        btn-id="btn01"
        class="u-fixed top-4 md:top-8 right-4 md:right-8"
      />
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
.btn-trigger {
  transform-origin: right top;
  transform: scale(0.5);
}
</style>
