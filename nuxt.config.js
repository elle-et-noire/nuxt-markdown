export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxt-markdown',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    // '~/assets/css/buefy.scss',
    // githubのスタイルはbuefyよりも後に指定する
    'github-markdown-css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/buefy
    'nuxt-buefy',
    // https://go.nuxtjs.dev/content
    '@nuxt/content'
  ],

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {
    markdown: {
      remarkPlugins: [
        [
          'remark-autolink-headings',
          // remark-autolink-headings'の設定
          {
            behavior: 'append',
            content: {
              type: 'element',
              tagName: 'b-icon', // buefyのコンポーネントでもOK
              properties: {
                icon: 'link-variant',
                size: 'is-small',
                className: ['ml-1']
              }
            }
          }
        ]
      ]
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  router: {
    base: '/nuxt-markdown/'
  },

  generate: {
    dir: 'docs'
  }
}
