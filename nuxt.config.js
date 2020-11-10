export default {
  head: {
    title: 'acticom-test',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  loading: { color: 'blue'},

  css: [
    '@/node_modules/bootstrap/dist/css/bootstrap.min.css'
  ],

  plugins: [
  ],

  components: true,

  buildModules: [
  ],

  modules: [
    '@nuxtjs/axios',
    '@nuxt/content',
    '@nuxtjs/style-resources',
  ],

  axios: {},

  content: {},

  build: {},

  styleResources: {
    scss: [
        '@/assets/scss/variables.scss',
    ]
  }
}
