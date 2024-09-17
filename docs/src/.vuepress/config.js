const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Ratbags! Core Rules',
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

  base: '/ratbags/',

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
        text: 'Core Rules',
        link: '/core-rules/'
      },
      {
        text: 'Extras',
        link: '/extras/'
      },
      {
        text: 'Character Generator',
        link: '/generator/'
      }
    ],
    sidebar: {
      '/core-rules/': [
        {
          title: 'About',
          path: '/core-rules/',
          collapsable: false,
        },
        {
          title: 'Character Creation',
          path: '/core-rules/chargen',
          collapsable: false,
        },
        {
          title: 'Tables',
          path: '/core-rules/tables',
          collapsable: false,
        },
        {
          title: 'Basic Rules',
          path: '/core-rules/basic-rules',
          collapsable: false,
        },
        {
          title: 'Combat',
          path: '/core-rules/combat',
          collapsable: false,
        },
        {
          title: 'Dungeoneering',
          path: '/core-rules/dungeoneering',
          collapsable: false,
        },
        {
          title: 'Advancement',
          path: '/core-rules/advancement',
          collapsable: false,
        },
        {
          title: 'Magic',
          path: '/core-rules/magic',
          collapsable: false,
        },
        {
          title: 'Equipment',
          path: '/core-rules/equipment',
          collapsable: false,
        },
        {
          title: 'Bestiary',
          path: '/core-rules/bestiary',
          collapsable: false,
        },
        {
          title: 'Rules Summary',
          path: '/core-rules/rules-summary',
          collapsable: false,
        },
      ],
      '/extras/': [
        {
          title: 'Extras',
          path: '/extras/',
          collapsable: false,
        },
        {
          title: 'Principles for Players',
          path: '/extras/principles-for-players',
          collapsable: false,
        },
        {
          title: 'Principles for Referees',
          path: '/extras/principles-for-referees',
          collapsable: false,
        },
        {
          title: 'FAQ',
          path: '/extras/faq',
          collapsable: false,
        },
        {
          title: 'Example of Play',
          path: '/extras/example-of-play',
          collapsable: false,
        },
        {
          title: 'Magic Crafting',
          path: '/extras/magic-crafting',
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
