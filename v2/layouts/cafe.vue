<script setup>
import { ref, onMounted } from 'vue'

import mdlLogo from '../layouts/theme/cafe/mdlLogo.vue'
import mdlTitle from '../layouts/theme/cafe/mdlTitle.vue'
import mdlNavigation from '../layouts/theme/cafe/mdlNavigation.vue'
import logoMark from '../components/logoMark.vue'

// サイトのタイトルを取得
const siteTitle = 'CAFE WOODY'

// サイトの説明文を取得
const siteText = import.meta.env.VITE_SITE_TEXT

const linkData = [
  {
    label: 'Concept',
    href: '#concept',
    class: 'concept'
  },
  {
    label: 'Menu',
    href: '#menu',
    class: 'menu'
  },
  {
    label: 'News',
    href: '#news',
    class: 'news'
  },
  {
    label: 'Access',
    href: '#access',
    class: 'access'
  },
  {
    label: 'home',
    href: '/',
    class: 'menu-home'
    // svgIcon: 'home-icon.svg'
  }
]

/**
 * IntersectionObserver
 */
const options = {
  threshold: [0, 0.25, 0.5, 0.75, 1],
  rootMargin: '100px'
}
const header = ref()
const topReturnBtn = ref()
onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    if (!entries[0].isIntersecting) {
      topReturnBtn.value.classList.add('active')
    } else {
      topReturnBtn.value.classList.remove('active')
    }
  }, options)
  observer.observe(header.value)
})
</script>

<template>
  <div class="l-container">
    <div class="l-header relative z-10" ref="header">
      <mdlLogo class="cafe-logo fixed m-2 md:m-8" />
      <nav class="l-navigation hidden container relative mx-auto md:flex md:flex-col md:justify-center">
        <ul class="flex md:ml-36">
          <li class="ml-6" v-for="(link, i) in linkData" :key="i">
            <a :href="link.href">{{ link.label }}</a>
          </li>
        </ul>
      </nav>
    </div>

    <main class="l-main">
      <slot />
    </main>
    <div class="l-footer text-center lg:text-left flex flex-col lg:p-4 lg:flex-row justify-center lg:justify-start">
      <div class="order-1 lg:order-0 lg:flex lg:items-center">
        <mdlLogo class="cafe-logo mx-auto mb-4 lg:mr-4 lg:mb-0" />
        <mdlTitle class="l-footer__title lg-2 lg:mb-0 lg:mr-4" :mdl-title="siteTitle" />
        <p v-if="false" class="l-footer__text lg:hidden xl:block mb-4 lg:mb-0">{{ siteText }}</p>
      </div>
      <nav class="l-footer__navigation order-0 lg:order-1 lg:flex lg:justify-end flex-1 mb-6 lg:mb-0">
        <ul class="l-footer__menu flex flex-col lg:flex-row justify-center lg:items-center">
          <mdlNavigation :links="linkData" />
        </ul>
      </nav>
    </div>
    <p class="text-right" ref="topReturnBtn">
      <cButton
        :href="'#'"
        v-scroll-to="'body'"
        class="top-return-btn c-button--main fixed right-12 bottom-6"
        label="return top"
      />
    </p>

    <modalWindow hb-class="right-0 m-2 md:m-8">
      <ul class="modal-nav text-2xl sm:text-3xl md:text-4xl">
        <mdlNavigation class="modal-menu main-font" :links="linkData" />
      </ul>
    </modalWindow>
  </div>
</template>

<style lang="scss" scoped>
@use '../assets/css/variables.scss';
@use '../assets/css/mixin.scss';

$main-font: 'Bungee', cursive;

.cafe {
  .main-font {
    font-family: $main-font;
  }
  .l-container {
    position: relative;
  }

  .l-header {
    height: 64px;
    @include mixin.mq-md {
      height: 128px;
    }
  }

  .l-navigation {
    height: 8rem;
    font-family: $main-font;
    color: map-get(variables.$theme-cafe-colors, 'subColor');
  }

  .cafe-logo {
    width: 40px;
    @include mixin.mq-md {
      width: 60px;
    }
  }

  .l-footer {
    background: map-get(variables.$theme-cafe-colors, 'color5');
    color: map-get(variables.$theme-cafe-colors, 'accentColor');
    font-family: $main-font;

    &__title {
      font-family: $main-font;
      font-size: 1.2rem;
    }
    &__navigation {
      border: none;
    }
  }
  .top-return-btn {
    display: none;
  }
  .active > .top-return-btn {
    display: inline-block;
    @include mixin.fadeLift();
  }
}
</style>
