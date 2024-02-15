import { defineConfig } from 'vitepress'


// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'en-US',
  head: [['link', { rel: 'icon', href: '/101/favicon.ico' }]],
  title: 'Prolinkmoon',
  description: "Blockchain Validator, Node Operator & Infra-service",
  base: '/101/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Docs', link: '/welcome' },
      { text: 'Prolinkmoon-Portal', link: 'https://portal.prolinkmoon.com' },
      { text: 'Prolinkmoon-Hub', link: 'https://portal.prolinkmoon.com/hub#lfg' }
    ],

    sidebar: [
      // {
      //   text: 'Example',
      //   items: [
      //     { text: 'Markdown Examples', link: '/markdown-examples' },
      //     { text: 'Runtime API Examples', link: '/api-examples' }
      //   ]
      // },

      {
        text: 'Welcome', link: '/welcome',
        collapsed: false,
        items: [
          { text: 'Overview', link: '/overview' }
        ]
      },

      {
        text: 'Learning Center', link: '/learning-center/learning-center',
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
      },

      {
        text: 'Avail',
        collapsed: true,
        items: [
          { text: 'Project Overview', link: 'avail/project-overview' },
          { text: 'Clash-Of-Nodes', link: 'avail/clash-of-nodes' },
          { text: 'Run light-node', link: 'avail/light-node' },
          { text: 'Build Madara KarnotAppchain', link: 'avail/madara-karnot-Appchain' },
          { text: 'Build Rollapp ( Avail as DA)', link: 'avail/build-rollapp' }
          
        ]
      }


    ],

    socialLinks: [
      { icon: 'twitter', link: 'https://twitter.com/ProlinkMoon' },
      { icon: 'github', link: 'https://github.com/prolinkmoon' }
      
    ],


    logo: 'logo.png',

    search: {
      provider: 'local'
    },
  }
})


