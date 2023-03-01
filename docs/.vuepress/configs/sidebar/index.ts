import type { SidebarConfig } from '@vuepress/theme-default'

export const sidebar: SidebarConfig = {
  '/webbrowser': [
    {
      text: '浏览器',
      children: [
        '/webbrowser/README.md',
        '/webbrowser/web_1.md',
      ],
    },
  ],
}