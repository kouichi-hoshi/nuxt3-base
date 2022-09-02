import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  link: [
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700&display=swap'
    }
  ],
  // pageTransition: {
  //   name: 'page',
  //   mode: 'out-in',
  //   beforeEnter(el) {
  //     console.log('Before enter...')
  //   }
  // },
  // router: {
  //   scrollBehavior: function (to, from, savedPosition) {
  //     return { x: 0, y: 0 }
  //   }
  // },
  bodyAttrs: {
    class: 'body'
  },
  css: ['~/assets/css/bundle.scss'],
  modules: ['@nuxtjs/tailwindcss', '@nuxt/content', '@nuxtjs/dayjs'],
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    exposeConfig: false,
    config: {},
    injectPosition: 0,
    viewer: true
  }
})
