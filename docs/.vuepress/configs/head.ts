/*
 * @Author: QingYiXiaoYao wangtao_2016@126.com
 * @Date: 2023-02-17 21:17:35
 * @LastEditors: QingYiXiaoYao wangtao_2018@qq.com
 * @LastEditTime: 2023-03-01 19:16:33
 * @FilePath: /vuepress/docs/.vuepress/configs/head.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import type { HeadConfig } from '@vuepress/core'

export const head: HeadConfig[] = [
  [
    'link',
    {
      ref: 'icon',
      type: 'image/png',
      sizes: '16x16',
      href: `/images/favicon.png`
    }
  ],
  ['meta', { name: 'msapplication-TileColor', content: '#3eaf7c' }],
  ['meta', { name: 'theme-color', content: '#3eaf7c' }],
  [
    'link',
    { rel: 'apple-touch-icon', href: `/images/favicon.png` },
  ],
  ['meta', { name: 'application-name', content: 'Code Of Life' }],
  ['meta', { name: 'apple-mobile-web-app-title', content: 'Code Of Life' }],
  ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
]