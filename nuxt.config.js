const pkg = require('./package')
const bodyParser = require('body-parser')
const axios = require('axios')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'styleshee', href: 'https://fonts.googleapis.com/css?family=Open+Sans'}
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { 
    color: '#fa923f',
    height: '20px',
    duration: 5000
  },

  /*
  ** Global CSS
  */
  css: [
    '@/assets/scss/main.scss',
    '@/assets/scss/custom.scss'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~plugins/date-filter.js',
    '~plugins/core-components.js'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    [
      '@nuxtjs/style-resources'
    ],
    '@nuxtjs/axios',
    'bootstrap-vue/nuxt'
  ],

  bootstrapVue: {
    bootstrapCSS: false, // Or `css: false`
    bootstrapVueCSS: false // Or `bvCSS: false`
  },

  styleResources: {
    sass: ['assets/scss/core/variables.scss']
   },

  axios: {
    baseURL: process.env.BASE_URL || 'https://personal-site-c332f.firebaseio.com/',
    credentials: false
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      
    }
  },
  env: {
    baseUrl: process.env.BASE_URL || 'https://personal-site-c332f.firebaseio.com',
    firebaseAPIKey: 'AIzaSyAeYA1SCSGAqzDk0xOK1mnhAVpcWcF1I9g'
  },
  router: {
    linkActiveClass: 'is-active'
  },
  pageTransition: {
    name: 'fade',
    mode: 'out-in'
  },
  serverMiddleware: [
    bodyParser.json(),
    '~/api'
  ],
  generate: {
    routes: function() {
      return axios.get('https://personal-site-c332f.firebaseio.com/posts.json')
        .then(res => {
          const routes = []
          for (const key in res.data) {
            routes.push({
              route: '/posts/' + key,
              payload: {postData: res.data[key]}
            })
          }
          return routes
        })
    }
  }
}
