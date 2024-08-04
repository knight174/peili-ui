import { defineConfig } from 'vitepress';
import { mdPlugin } from './plugins';

// 配置参考：https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'PeiliUI',
  description: 'Vue3 组件库',
  themeConfig: {
    nav: [
      { text: '指南', link: '/guide/' },
      { text: '组件', link: '/components/' },
      { text: 'API', link: '/api/' },
      { text: '演练场', link: '/playground' },
    ],
    sidebar: {
      // 指南部分的章节导航
      '/guide/': [
        {
          text: '指引',
          items: [
            { text: '组件库介绍', link: '/guide/' },
            { text: '快速开始', link: '/guide/quick-start' },
          ],
        },
      ],
      // 组件部分的章节导航
      '/components/': [
        {
          text: '组件',
          items: [{ text: 'Button 按钮', link: '/components/button' }],
        },
      ],
    },
  },
  markdown: {
    config: md => {
      md.use(mdPlugin);
    },
  },
});
