<script setup>
// サイトのタイトルを取得
const siteTitle = import.meta.env.VITE_SITE_TITLE

// サイトの説明文を取得
const siteText = import.meta.env.VITE_SITE_TEXT

const linkData = [
  {
    label: 'menu1',
    href: '/',
    class: 'menu'
  },
  {
    label: 'menu2',
    href: '/',
    class: 'menu'
  },
  {
    label: 'menu3',
    href: '/',
    class: 'menu'
  },
  {
    label: 'menu4',
    href: '/',
    class: 'menu'
  }
]

/**
 * IntersectionObserver
 */
const options = {
  threshold: [0, 0.25, 0.5, 0.75, 1],
  rootMargin: '200px'
}
const options2 = {
  threshold: 0.5,
  rootMargin: '0px'
}
const header = ref()
const footer = ref()
const topReturnBtn = ref()
onMounted(() => {
  const observerInOut = new IntersectionObserver((entries) => {
    if (!entries[0].isIntersecting) {
      topReturnBtn.value.classList.add('is-active')
      topReturnBtn.value.classList.remove('hidden')
    } else {
      topReturnBtn.value.classList.remove('is-active')
    }
  }, options)
  observerInOut.observe(header.value)

  const observerFooter = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      topReturnBtn.value.classList.add('is-up')
    } else {
      topReturnBtn.value.classList.remove('is-up')
    }
  }, options2)
  observerFooter.observe(footer.value)
})
</script>

<template>
  <div class="l-container">
    <header ref="header" class="l-header relative z-20">
      <div class="logo-mark cafe-logo fixed m-2 md:m-8">
        <img src="/images/cafe-page/cafe-logo.svg" alt="" />
      </div>
      <nav class="l-navigation hidden container relative mx-auto md:flex md:flex-col md:justify-center">
        <ul class="flex md:ml-36">
          <li v-for="(link, i) in linkData" :key="i" class="l-navigation__menu ml-6">
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
        <div class="logo-mark cafe-logo mx-auto mb-4 lg:mr-4 lg:mb-0">
          <img src="/images/cafe-page/cafe-logo.svg" alt="" />
        </div>

        <logoType class="l-footer__title lg-2 lg:mb-0 lg:mr-4" tag-name="div"> CAFE WOODY </logoType>
        <p v-if="false" class="l-footer__text lg:hidden xl:block mb-4 lg:mb-0">{{ siteText }}</p>
      </div>
      <div class="l-footer__navigation order-0 lg:order-1 lg:flex lg:justify-end flex-1 mb-6 lg:mb-0">
        <compNavigation class="footer flex flex-col lg:flex-row justify-center lg:items-center" :links="linkData" />
      </div>
    </footer>

    <div ref="topReturnBtn" class="p-top-return-btn hidden">
      <compButton v-scroll-to="'body'" :href="'#'" remove-default-class class="" label="">
        <useSVG inner-class="use-svg__img--white" size="28" scale="0.6" href="/images/common/icon.svg#icon-arrow" />
      </compButton>
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
}
.p-top-return-btn {
  background: map-get(g.$theme-cafe-colors, 'subColor');
}
</style>
