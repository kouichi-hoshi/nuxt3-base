<script setup>
import linkData from "../models/linkData.js";
import snsLinkData from "../models/snsLinkData.js";
import baseHeader from "../layouts/theme/baseHeader.vue";
import baseTitle from "../layouts/theme/baseTitle.vue";
import baseNavigation from "../layouts/theme/baseNavigation.vue";
import baseFooter from "../layouts/theme/baseFooter.vue";
import logoMark from "../components/logoMark.vue";

// baseHeaderのslotの有効化/無効化を設定
const baseHeaderSlot = {
  logo: true,
  title: true,
  text: true,
  navigation: true,
};

// baseFooterのslotの有効化/無効化を設定
const baseFooterSlot = {
  logo: true,
  title: true,
  text: true,
  navigation: true,
};

// サイトのタイトルを取得
const siteTitle = import.meta.env.VITE_SITE_TITLE;

// サイトの説明文を取得
const siteText = import.meta.env.VITE_SITE_TEXT;
</script>

<template>
  <div class="l-container">
    <div class="l-header bg-slate-100" :class="{ slideUp: isNavFadeIn }">
      <baseHeader :base-header-slot="baseHeaderSlot">
        <template v-slot:logo>
          <logoMark class="logo-size" />
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
          <logoMark class="logo-size" />
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

<script>
export default {
  data() {
    return {
      isNavFadeIn: false,
      options: {
        threshold: [0.1],
      },
      isIntersectingElement: false,
    };
  },
};
</script>

<style lang="scss" scoped>
// .l-container {
// }
.l-header {
  // $h-nav-h: 100px;
  // height: $h-nav-h;
  .l-base-header {
    // position: fixed;
    // top: 0;
    // width: 100%;
    // z-index: 2;
    // transition: transform 0.4s;
  }
  // &.slideUp .l-base-header {
  //   transform: translateY(-$h-nav-h);
  // }
  .logo-size {
    width: 40px;
  }
}
// .l-main {
// }
.l-footer {
  .logo-size {
    width: 40px;
  }
}
</style>
