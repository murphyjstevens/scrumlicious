import path from 'path'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  colorMode: {
    classSuffix: ''
  },
  css: [
    '~/assets/css/global.css',
    'primeicons/primeicons.css'
  ],
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/color-mode',
    '@nuxtjs/tailwindcss',
    'nuxt-primevue'
  ],
  primevue: {
    importPT: { from: path.resolve(__dirname, './presets/lara/') },
    options: {
      unstyled: true
    }
  },
  typescript: {
    typeCheck: true
  }
})
