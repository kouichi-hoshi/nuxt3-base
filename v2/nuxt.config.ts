import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  pageTransition: {
    name: 'page',
    mode: 'out-in',
    beforeEnter(el) {
      console.log('Before enter...')
    }
  },
  // router: {
  //   scrollBehavior: function (to, from, savedPosition) {
  //     return { x: 0, y: 0 }
  //   }
  // },
  bodyAttrs: {
    class: 'body'
  },
  css: [
    '~/assets/css/cssCustomProperties.css',
    '~/assets/css/foundation.scss',
    '~/assets/css/project.scss',
    '~/assets/css/utility.scss'
  ],
  modules: ['@nuxtjs/tailwindcss', '@nuxt/content', '@nuxtjs/dayjs'],
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    exposeConfig: false,
    config: {},
    injectPosition: 0,
    viewer: true
  }
})
