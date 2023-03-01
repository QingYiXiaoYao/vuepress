import { defineUserConfig, defaultTheme } from 'vuepress'
import { head, sidebar, navbar } from './configs/index.js'

export default defineUserConfig({
  base: '/',
  port: 2023,
  lang: 'zh',
  title: 'Code of Life',
  description: 'Record of my code journey',
  head,

  theme: defaultTheme({
    logo: '/images/logo.png',
    repo: 'https://github.com/QingYiXiaoYao/vuepress',
    docsDir: 'docs',
    locales: {
      '/': {
        // sidebar
        sidebar: sidebar,
        navbar: navbar,
        lastUpdatedText: '上次更新',
        contributorsText: '贡献者',
      }
    }
  })
})