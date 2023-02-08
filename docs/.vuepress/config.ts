import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  base: '/',
  port: 2023,
  lang: 'zh',
  title: 'Code of Life',
  description: 'Record of my code journey',
  head: [['link', { ref: 'icon', href: '/images/favicon.png' }]]
})