<script setup>
import { ref, onMounted } from 'vue'

import mdlLogo from '../layouts/theme/cafe/mdlLogo.vue'
import mdlTitle from '../layouts/theme/cafe/mdlTitle.vue'
import mdlNavigation from '../layouts/theme/cafe/mdlNavigation.vue'

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
  rootMargin: '200px'
}
const header = ref()
const footer = ref()
const topReturnBtn = ref()
onMounted(() => {
  const observerInOut = new IntersectionObserver((entries) => {
    if (!entries[0].isIntersecting) {
      topReturnBtn.value.classList.add('active')
    } else {
      topReturnBtn.value.classList.remove('active')
    }
  }, options)
  observerInOut.observe(header.value)

  const observerUpDown = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      topReturnBtn.value.classList.add('up')
    } else {
      topReturnBtn.value.classList.remove('up')
    }
  }, options)
  observerUpDown.observe(footer.value)
})
</script>

<template>
  <div class="l-container">
    <header class="l-header relative z-20" ref="header">
      <mdlLogo class="cafe-logo fixed m-2 md:m-8" />
      <nav class="l-navigation hidden container relative mx-auto md:flex md:flex-col md:justify-center">
        <ul class="flex md:ml-36">
          <li class="l-navigation__menu ml-6" v-for="(link, i) in linkData" :key="i">
            <a :href="link.href">{{ link.label }}</a>
          </li>
        </ul>
      </nav>
    </header>

    <main class="l-main">
      <slot />
    </main>

    <footer
      ref="footer"
      class="l-footer text-center lg:text-left flex flex-col lg:p-4 lg:flex-row justify-center lg:justify-start"
    >
      <div class="order-1 lg:order-0 lg:flex lg:items-center">
        <mdlLogo class="cafe-logo mx-auto mb-4 lg:mr-4 lg:mb-0" />
        <mdlTitle class="l-footer__title lg-2 lg:mb-0 lg:mr-4" :mdl-title="siteTitle" />
        <p v-if="false" class="l-footer__text lg:hidden xl:block mb-4 lg:mb-0">{{ siteText }}</p>
      </div>
      <div class="l-footer__navigation order-0 lg:order-1 lg:flex lg:justify-end flex-1 mb-6 lg:mb-0">
        <mdlNavigation class="footer flex flex-col lg:flex-row justify-center lg:items-center" :links="linkData" />
      </div>
    </footer>

    <div class="text-right" ref="topReturnBtn">
      <cButton
        :href="'#'"
        v-scroll-to="'body'"
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
                  d="M11.2929,8.2928 C11.6834,7.90228 12.3166,7.90228 12.7071,8.2928 L18.364,13.9497 C18.7545,14.3402 18.7545,14.9733 18.364,15.3639 C17.9734,15.7544 17.3403,15.7544 16.9497,15.3639 L12,10.4141 L7.05025,15.3639 C6.65973,15.7544 6.02656,15.7544 5.63604,15.3639 C5.24551,14.9733 5.24551,14.3402 5.63604,13.9497 L11.2929,8.2928 Z"
                  id=""
                  fill="#09244BFF"
                  class="up-arrow"
                ></path>
              </g>
            </g>
          </g>
        </svg>
      </cButton>
    </div>

    <modalWindow border-class="u-line-color-blue">
      <compNavigation outer-class="modal-window main-font text-2xl sm:text-3xl md:text-4xl" :links="linkData" />
    </modalWindow>
  </div>
</template>

<style lang="scss" scoped>
@use '../assets/css/global' as g;

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
    @include g.mq-md {
      height: 128px;
    }
  }

  .l-navigation {
    height: 8rem;
    font-family: $main-font;
    &__menu {
      color: map-get(g.$theme-cafe-colors, 'subColor');
      > a {
        color: inherit;
      }
    }
  }

  .cafe-logo {
    width: 40px;
    @include g.mq-md {
      width: 60px;
    }
  }

  .l-footer {
    background: map-get(g.$theme-cafe-colors, 'color5');
    color: map-get(g.$theme-cafe-colors, 'accentColor');
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
    animation: ini 0.4s ease-out forwards;
    @keyframes ini {
      100% {
        transform: translateY(5rem);
      }
    }
  }

  .active > .top-return-btn {
    @include g.fadeLift();
  }
  .active.up > .top-return-btn {
    animation: up 0.4s ease-out forwards;
    @keyframes up {
      100% {
        transform: translateY(-6rem);
      }
    }
  }
  .up-arrow {
    fill: currentColor;
    width: 2rem;
  }
}
</style>
