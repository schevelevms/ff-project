// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  app: {
   head: {
     title: 'Frame&Form', 
     meta: [
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0 maximum-scale=1, minimum-scale=1, user-scalable=no"' }
    ],
     htmlAttrs: {
       lang: 'en',
     },
     link: [
       { rel: 'icon', type: 'image/x-icon', href: '/headLogo.jpg' },
     ],
    },
  },
  hooks: {
    'pages:extend' (pages) {
      // Переопределение стартового роутера
      pages.push({
        name: 'login',
        path: '/',
        file: '~/pages/auth/login.vue',
      })
       }  
      },
  css: ['@/assets/main.scss'],
  modules: ['@pinia/nuxt', '@vee-validate/nuxt',],
})
