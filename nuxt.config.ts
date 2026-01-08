// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  // Modules
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/i18n'
  ],
i18n: {
    locales: [
      { code: 'en', name: 'English' },
      { code: 'fr', name: 'Français' },
      { code: 'es', name: 'Español' }
    ],
    defaultLocale: 'en',
    vueI18n: './i18n.config.ts'
  },

})

  // Internationalization (i18n) configuration
  
  
