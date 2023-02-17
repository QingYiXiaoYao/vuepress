/*
 * @Author: QingYiXiaoYao wangtao_2016@126.com
 * @Date: 2023-02-17 21:32:25
 * @LastEditors: QingYiXiaoYao wangtao_2016@126.com
 * @LastEditTime: 2023-02-17 23:22:42
 * @FilePath: /vuepress/docs/.vuepress/configs/sidebar/zh.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import type { SidebarConfig } from '@vuepress/theme-default'

export const sidebarZh: SidebarConfig = {
  '/interview': [
    {
      text: '面试',
      children: [
        '/interview/1.md',
        '/interview/2.md'
      ],
    },
  ]
}