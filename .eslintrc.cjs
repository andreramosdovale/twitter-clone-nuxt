module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
  extends: ['@nuxtjs/eslint-config-typescript', 'plugin:@typescript-eslint/recommended',
  'plugin:vue/vue3-essential',
  'prettier',],
  plugins: ['@typescript-eslint', 'vue'],
  rules: {
    'prefer-promise-reject-errors': 'off',
    quotes: ['warn', 'single', { avoidEscape: true }],
    'vue/multi-word-component-names': 'off'
  },
};
