import DefaultTheme from 'vitepress/theme';
import { EnhanceAppContext } from 'vitepress';
import { Theme } from 'peili-ui';

// 应用组件库的 unocss 预设，配置文件在根目录的 uno.config.ts
import 'virtual:uno.css';

import { Demo } from '../components';

export default {
  ...DefaultTheme,
  enhanceApp(ctx: EnhanceAppContext) {
    DefaultTheme.enhanceApp(ctx);

    const { app } = ctx;
    // 应用组件库提供的主题插件
    app.use(Theme);

    app.component('Demo', Demo);

    // 注册其他插件、全局组件、provide...
  },
};
