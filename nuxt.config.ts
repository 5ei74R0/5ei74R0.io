// https://nuxt.com/docs/api/configuration/nuxt-config
export default {
  build: {
    publicPath: '/5ei74R0/',
  },
  ssr: false,
  app: {
    head: {
      title: '5ei74R0.io',
      meta: [
        { charset: 'utf-8' },
        { name: 'copyright', content: '© 2023 5ei74R0' },
        { hid: 'viewport', name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'A portfolio page of 5ei74R0' },
      ],
    },
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
  ],
  colorMode: {
    classSuffix: '',
  },
}
