import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
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
