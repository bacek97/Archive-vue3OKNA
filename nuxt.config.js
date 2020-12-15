export default {
  buildModules: [
    // Simple usage
    ['@nuxtjs/vuetify', { 
          treeShake: true,
    customVariables: ['~/assets/variables.scss'],
    breakpoint: {
        thresholds: {
            xs: 0,
            sm: 768 + 16,
            md: 1920 - 24,
            lg: 2048 - 24,
            xl: 3648 - 24
        }
    } }],
    '@nuxtjs/composition-api',
    '@nuxt/http',
	['nuxt-i18n', {
  locales: [
    {
      code: 'en',
      file: 'en-US.js'
    },
    {
      code: 'ru',
      file: 'ru-RU.js'
    }
  ],
  // parsePages: false,   // Disable babel parsing
  // pages: {
  //   about: {
  //     en: '/about-us', // -> accessible at /about-us (no prefix since it's the default locale)
  //     ru: '/о-компании', // -> accessible at /fr/a-propos
  //     es: '/sobre'     // -> accessible at /es/sobre
  //   }
  // },
  strategy: 'prefix',
  lazy: true,
  langDir: 'lang/',
  defaultLocale: 'ru',
  fallbackLocale: 'ru',
  detectBrowserLanguage: { alwaysRedirect: false, fallbackLocale: '', onlyOnRoot: true, useCookie: true,
    cookieCrossOrigin: false, cookieDomain: null, cookieKey: 'i18n_redirected', cookieSecure: false }
}]
  ],
  // modules: [
    
  // ]
}