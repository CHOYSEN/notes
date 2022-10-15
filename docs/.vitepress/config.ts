import { defineConfig } from 'vitepress'

import sidebar from './sidebar'

// https://vitepress.vuejs.org/config/app-configs
export default defineConfig({
  title: 'notes',
  lastUpdated: true,
  markdown: { lineNumbers: true },
  themeConfig: {
    sidebar,
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/CHOYSEN/notes'
      }
    ]
  }
})
