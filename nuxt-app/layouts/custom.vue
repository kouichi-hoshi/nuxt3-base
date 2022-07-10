<script setup>
import linkData from '../models/linkData.js'
import snsLinkData from '../models/snsLinkData.js'
import mdlHeader from '../layouts/theme/custom/mdlHeader.vue'
import mdlTitle from '../layouts/theme/custom/mdlTitle.vue'
import mdlNavigation from '../layouts/theme/custom/mdlNavigation.vue'
import mdlFooter from '../layouts/theme/custom/mdlFooter.vue'
import logoMark from '../components/logoMark.vue'

// headerのslotの有効化/無効化を設定
const headerSlot = {
  logo: true,
  title: true,
  text: true,
  navigation: true
}

// footerのslotの有効化/無効化を設定
const footerSlot = {
  logo: true,
  title: true,
  text: true,
  navigation: true
}

// サイトのタイトルを取得
const siteTitle = import.meta.env.VITE_SITE_TITLE

// サイトの説明文を取得
const siteText = import.meta.env.VITE_SITE_TEXT
</script>

<template>
  <div class="l-container">
    <div class="l-header">
      <mdlHeader :header-slot="headerSlot">
        <template v-slot:logo>
          <logoMark class="logo-w-40" />
        </template>
        <template v-slot:title>
          <mdlTitle :mdl-title="siteTitle" class="text-xl font-bold" />
        </template>
        <template v-slot:text>
          <p>{{ siteText }}</p>
        </template>
        <template v-slot:navigation>
          <nav class="flex justify-end">
            <ul class="flex">
              <mdlNavigation :links="linkData" :class="'ml-6'" />
              <mdlNavigation :links="snsLinkData" :class="'ml-6'" />
            </ul>
          </nav>
        </template>
      </mdlHeader>
    </div>

    <main class="l-main">
      <slot />
    </main>

    <div class="l-footer">
      <mdlFooter :footer-slot="footerSlot">
        <template v-slot:logo>
          <logoMark class="logo-w-50" />
        </template>
        <template v-slot:title>
          <mdlTitle :mdl-title="siteTitle" class="text-xl font-bold" />
        </template>
        <template v-slot:text>
          <p>{{ siteText }}</p>
        </template>
        <template v-slot:navigation>
          <nav class="flex justify-end">
            <ul class="flex">
              <mdlNavigation class="ml-6" :links="linkData" />
              <mdlNavigation class="ml-6" :links="snsLinkData" />
            </ul>
          </nav>
        </template>
      </mdlFooter>
    </div>
  </div>
</template>
