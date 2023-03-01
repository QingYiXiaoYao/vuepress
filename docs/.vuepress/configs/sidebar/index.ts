import type { SidebarConfig } from '@vuepress/theme-default'

export const sidebar: SidebarConfig = {
  '/interview': [
    {
      text: '面试',
      children: [
        '/interview/README.md',
        '/interview/1.md',
        '/interview/2.md'
      ],
    },
  ],
  '/project_experince': [
    {
      text: '项目经历',
      children: [
        '/project_experince/1.md',
        '/project_experince/2.md'
      ],
    },
  ]
}