module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended',
    'plugin:vue/vue3-recommended'
  ],
  plugins: [
  ],
  // add your custom rules here
  rules: {}
}
