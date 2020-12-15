require('dotenv').config()

export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,

  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'FEaglePro',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: "~/plugins/aos.client", ssr: false },
    { src: "~/plugins/vee-validate.client.js", ssr: false },
    { src: '~/plugins/i18n.js' }
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/dotenv',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    'nuxt-i18n',
  ],

  i18n:  {
    lazy: true,
    loadLanguagesAsync: true,
    strategy: 'prefix_except_default',
    defaultLocale: 'en',
    fallbackLocale:'en',
    locales: [
      {
        code: 'fr',
        iso:  'fr-FR',
        name: 'Français',
        file: 'fr.js'
      },
      {
        code: 'en',
        iso:  'en-US',
        name: 'English',
        file: 'en.js'
      },
    ],
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      onlyOnRoot: true,  // recommended
    },
    langDir: 'lang/',
  },
  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    transpile: [
      "vee-validate/dist/rules"
    ],
  },

  server: {
    port: 3000, // default: 3000
    host: '0.0.0.0' // default: localhost
  },

  watchers: {
    webpack: {
      aggregateTimeout: 300,
      poll: 1000
    }
  },


}
