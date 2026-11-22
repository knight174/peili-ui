# 快速开始

## 安装

```bash
pnpm add peili-ui
```

## 引入

```ts
import { createApp } from 'vue';
import { Theme, PlButton } from 'peili-ui';
import 'virtual:uno.css';
import 'peili-ui/style/index.css';
import App from './App.vue';

createApp(App).use(Theme).mount('#app');
```

项目需集成 [UnoCSS](https://unocss.dev/)，并使用 Peili 的 preset（见组件库 README）。

## 主题

默认主题开箱即用。覆盖方式见 [Design Tokens](/guide/design-tokens)。

```ts
import { Theme, tinyThemeVars } from 'peili-ui';

app.use(Theme, tinyThemeVars);
```
