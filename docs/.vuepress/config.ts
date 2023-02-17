import { defineUserConfig, defaultTheme } from 'vuepress'
import { head, sidebarZh, sidebarEn } from './configs/index.js'

export default defineUserConfig({
  base: '/',
  port: 2023,
  lang: 'zh',
  title: 'Code of Life',
  description: 'Record of my code journey',
  head,

  theme: defaultTheme({
    logo: '/images/logo.png',
    repo: '/',
    docsDir: 'docs',
    locales: {
      '/': {
        // sidebar
        sidebar: sidebarZh
      }
    }
  })
})