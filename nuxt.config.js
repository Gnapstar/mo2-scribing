export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  router: {
    base: '/mo2-scribing/'
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Mortal Online 2 Scribing',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Mortal Online 2 - Scribing. The ultimate guide to scribing scrolls into your spellbook.' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/mo2-scribing/favicon.jpg' }],
    script: [
      {
        src: "https://www.googletagmanager.com/gtag/js?id=G-BEEYK54Z7W",
        async: true,
      },
      {
        src: "/mo2-scribing/js/ga.js",
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    // SCSS file in the project
    '@/assets/scss/main.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // Style resource for custom CSS
    '@nuxtjs/style-resources'
  ],

  bootstrapVue: {
    bootstrapCSS: false,
    bootstrapVueCSS: false
  },

  styleResources: {
    scss: '@/assets/scss/_variables.scss'
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
