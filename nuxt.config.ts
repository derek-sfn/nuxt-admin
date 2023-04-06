// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify from 'vite-plugin-vuetify';

export default defineNuxtConfig({
    build: {
        transpile: ['vuetify'],
    },
    hooks: {
      'vite:extendConfig': (config) => {
        config.plugins!.push(vuetify())
      },
    },
    vite: {
      ssr: {
        noExternal: ['vuetify'],
      },
      define: {
        'process.env.DEBUG': false,
      },
    },
    css: [
      'vuetify/lib/styles/main.sass',
      '@mdi/font/css/materialdesignicons.min.css',
      '@/assets/main.scss',
      '@/assets/scss/index.scss',
    ],
});
