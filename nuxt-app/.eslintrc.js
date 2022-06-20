module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:vue/essential',
    'standard'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'vue',
    'prettier',
    'stylelint-prettier'
  ],
  rules: {
    'prettier/prettier': 'error',
    'prettier/prettier': true
  }
}