module.exports = {
  root: true,
  globals: {
    useHead: true,
    onMounted: true,
    definePageMeta: true,
    defineNuxtPlugin: true,
    ref: true,
    queryContent: true,
    useAsyncData: true,
    useRoute: true
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'module'
  },
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    // 'eslint:recommended',
    'plugin:vue/vue3-recommended',
    // 'plugin:nuxt/recommended',
    'prettier'
  ],
  plugins: ['vue'],
  rules: {},
  overrides: [
    {
      files: ['layouts/*.vue', 'pages/*.vue', 'pages/blog/*.vue', '*.vue'],
      rules: {
        'vue/multi-word-component-names': 'off'
        // 'vue/script-setup-uses-vars': 'off'
      }
    }
  ]
}
