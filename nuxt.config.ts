// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify from 'vite-plugin-vuetify';
import { fileURLToPath } from 'url';



export default defineNuxtConfig({
  build: {
      transpile: ['vuetify'],
  },
  css: [
    'vuetify/lib/styles/main.sass',
    '@mdi/font/css/materialdesignicons.min.css',
    '@/assets/main.scss',
    '@/assets/scss/index.scss',
    '@/assets/scss/libs/vuetify/index.scss',
    '@/assets/scss/styles/variables/_vuetify.scss'
  ],
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
    resolve: {
      alias: {
        '@configured-variables': fileURLToPath(new URL('./src/styles/variables/_template.scss', import.meta.url)),
      }
    }
  },
});
