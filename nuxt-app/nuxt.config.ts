import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: [
    '~/assets/css/cssCustomProperties.css',
    '~/assets/css/foundation.scss',
    '~/assets/css/utility.scss'
  ],
  modules: ['@nuxtjs/tailwindcss', '@nuxt/content', '@nuxtjs/dayjs'],
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config.js',
    exposeConfig: false,
    config: {},
    injectPosition: 0,
    viewer: true
  }
})
