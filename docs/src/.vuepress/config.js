const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Ratbags! SRD',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'SRD',
        link: '/srd/'
      },
      {
        text: 'Principles',
        link: '/principles/'
      }
    ],
    sidebar: {
      '/srd/': [
        {
          title: 'About',
          path: '/srd/',
          collapsable: false,
        },
        {
          title: 'Character Creation',
          path: '/srd/chargen',
          collapsable: false,
        },
        {
          title: 'Tables',
          path: '/srd/tables',
          collapsable: false,
        },
        {
          title: 'Basic Rules',
          path: '/srd/basic_rules',
          collapsable: false,
        },
        {
          title: 'Magic',
          path: '/srd/magic',
          collapsable: false,
        },
        {
          title: 'Dungeoneering',
          path: '/srd/dungeoneering',
          collapsable: false,
        },
        {
          title: 'Equipment',
          path: '/srd/equipment',
          collapsable: false,
        },
        {
          title: 'Bestiary',
          path: '/srd/bestiary',
          collapsable: false,
        },
        {
          title: 'Rules Summary',
          path: '/srd/rules_summary',
          collapsable: false,
        },
      ],
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
