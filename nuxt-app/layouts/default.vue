<script setup>
import linkData from '../models/linkData.js'
import snsLinkData from '../models/snsLinkData.js'
import baseHeader from '../layouts/theme/base/baseHeader.vue'
import baseTitle from '../layouts/theme/base/baseTitle.vue'
import baseNavigation from '../layouts/theme/base/baseNavigation.vue'
import baseFooter from '../layouts/theme/base/baseFooter.vue'
import logoMark from '../components/logoMark.vue'

// baseHeaderのslotの有効化/無効化を設定
const baseHeaderSlot = {
  logo: true,
  title: true,
  text: true,
  navigation: true
}

// baseFooterのslotの有効化/無効化を設定
const baseFooterSlot = {
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
      <baseHeader :base-header-slot="baseHeaderSlot">
        <template v-slot:logo>
          <logoMark class="logo-w-40" />
        </template>
        <template v-slot:title>
          <baseTitle :site-title="siteTitle" class="text-xl font-bold" />
        </template>
        <template v-slot:text>
          <p>{{ siteText }}</p>
        </template>
        <template v-slot:navigation>
          <nav class="base-navigation flex justify-end">
            <ul class="flex">
              <baseNavigation :links="linkData" :class="'ml-6'" />
              <baseNavigation :links="snsLinkData" :class="'ml-6'" />
            </ul>
          </nav>
        </template>
      </baseHeader>
    </div>

    <main class="l-main">
      <slot />
    </main>

    <div class="l-footer">
      <baseFooter :base-footer-slot="baseFooterSlot">
        <template v-slot:logo>
          <logoMark class="logo-w-50" />
        </template>
        <template v-slot:title>
          <baseTitle :site-title="siteTitle" class="text-xl font-bold" />
        </template>
        <template v-slot:text>
          <p>{{ siteText }}</p>
        </template>
        <template v-slot:navigation>
          <nav class="base-navigation flex justify-end">
            <ul class="flex">
              <baseNavigation class="ml-6" :links="linkData" />
              <baseNavigation class="ml-6" :links="snsLinkData" />
            </ul>
          </nav>
        </template>
      </baseFooter>
    </div>
  </div>
</template>
