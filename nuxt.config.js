module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: '兼聘网',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=375, user-scalable=no' },
      { hid: 'keyword', name: 'keyword', content: '一个APP试玩赚钱的兼职平台、兼职挣钱、手机挣钱、兼职' },
      { hid: 'description', name: 'description', content: '一个APP试玩赚钱的兼职平台' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: {color: '#6ED9CA'},
  /*
  ** Build configuration
  */
  build: {
    vendor: ['axios', 'qs', '~/plugins/vue-scroller'], // 只为插件只打包一次
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  plugins: [{src: '~/plugins/vue-scroller', ssr: false}, {src: '~/plugins/vue-loading', ssr: false}],
  css: [
    'assets/main.css'
  ],
  cache: true
}
