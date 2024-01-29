import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Prolinkmoon",
  description: "Blockchain Validator, Node Operator & Infra-service",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Docs', link: '/welcome' },
      { text: 'Prolinkmoon-Portal', link: 'https://google.com' },
      { text: 'Prolinkmoon-Hub', link: 'https://google.com' }
    ],

    sidebar: [
      {
        text: 'Example',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      },

      {
        text: 'Welcome', link: '/welcome',
        collapsed: false,
        items: [
          { text: 'Overview', link: '/markdown-examples' }
        ]
      },

      {
        text: 'Learning Center',
        collapsed: true,
        items: [
          { text: 'Preapre your knowledge', link: '' },
          { text: 'what should be prepared first?', link: '' },
          { text: 'Server or Local PC first?', link: '' },
          { text: 'What is Ubuntu?', link: '' },
          { text: 'why use Ubuntu?', link: '' },
          { text: 'Basic command line Ubuntu', link: '' },
          { text: 'Advanced command line Ubuntu', link: '' },
          { text: 'Most popular dependencies installation for run Node / Validator', link: '' },
          { text: 'What is Docker?', link: '' },
          { text: 'When and Why you should use Docker?', link: '' }
        ]
      }

    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],


    logo: '../imgAssets/logo.png',

    search: {
      provider: 'local'
    },

  }
})


