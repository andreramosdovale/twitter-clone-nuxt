module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser"
  },
  extends: [
    "@nuxtjs/eslint-config-typescript",
    "plugin:@typescript-eslint/recommended",
    "plugin:vue/vue3-essential"
  ],
  plugins: ["@typescript-eslint", "vue"],
  rules: {
    "prefer-promise-reject-errors": "off",
    "vue/multi-word-component-names": "off",
    quotes: [2, "double", { avoidEscape: true }]
  }
}
