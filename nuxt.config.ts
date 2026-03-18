
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/ui',
    '@nuxt/fonts'
  ],

  devtools: {
    enabled: true
  },

  css: ['~/assets/css/main.css'],

  routeRules: {
    '/': { prerender: true }
  },

  compatibilityDate: '2025-01-15',

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs',
        semi: false,          // Keine Semikolons (Vue-Community-Standard)
        quotes: 'single',     // Einfache Anführungszeichen
        indent: 2,            // 2 Spaces Einrückung
        quoteProps: 'as-needed' // Nur bei Bedarf Quotes um Objektkeys
      }
    },
    checker: true // Zeigt ESLint-Fehler direkt im Dev-Server-Overlay
  },
  runtimeConfig: {
    public: {
      wordpressUrl: 'https://admin.hausarztpraxisbarmbek.de/graphql',
    },
  },
})
