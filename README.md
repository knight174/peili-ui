# PeiliUI

基于 Vue3 的组件库，从 0 到 1 搭建现代化的组件库工程。

## ✨ 特性

- 🛠️ 基于 Vue3、TypeScript、Vite 开发
- 📦 开箱即用的高质量组件
- 🎨 灵活的主题定制能力（CSS Variables + ConfigProvider）
- 📖 详尽的文档和示例（VitePress / Storybook）
- 🔧 支持按需引入
- 🎯 使用 UnoCSS 作为样式解决方案

## 📦 安装

```bash
# 使用 npm
npm install peili-ui
# 或使用 yarn
yarn add peili-ui
# 或使用 pnpm
pnpm add peili-ui
```

## 📚 组件

| 组件             | 说明         |
| ---------------- | ------------ |
| `PlButton`       | 按钮         |
| `PlInput`        | 输入框       |
| `PlSelect`       | 选择器       |
| `ConfigProvider` | 局部主题配置 |

## 🔨 使用

```ts
import { createApp } from 'vue';
import { Theme, PlButton, PlInput, PlSelect } from 'peili-ui';

// 引入 UnoCSS 样式（项目需集成 UnoCSS）
import 'virtual:uno.css';
// 引入组件库样式
import 'peili-ui/style/index.css';

import App from './App.vue';

const app = createApp(App);
app.use(Theme); // 启用主题能力
app.mount('#app');
```

```vue
<template>
  <PlButton type="primary">提交</PlButton>
  <PlInput v-model="keyword" clearable placeholder="请输入" />
  <PlSelect v-model="fruit" :options="options" clearable placeholder="请选择" />
</template>
```

## 🔨 按需引入

1. 在 `main.ts` 中引入样式与主题

```ts
import { createApp } from 'vue';
import { Theme } from 'peili-ui';
import 'virtual:uno.css';
import 'peili-ui/style/index.css';
import App from './App.vue';

createApp(App).use(Theme).mount('#app');
```

2. 在页面中按需引入组件

```ts
import { PlButton, PlInput, PlSelect } from 'peili-ui';
```

也可按组件引入样式：

```ts
import 'peili-ui/style/button.css';
import 'peili-ui/style/input.css';
import 'peili-ui/style/select.css';
```

## 📝 开发指南

### 环境准备

- Node.js >= 16
- pnpm >= 8

### 首次启动

文档依赖已构建的 `peili-ui/style/index.css`，UnoCSS 依赖 `packages/icons/dist/icons.json`。  
因此 `pnpm install` 之后需要先构建组件库，再启动开发服务：

```bash
# 1. 安装依赖
pnpm install

# 2. 构建全部 packages（含类型、样式、图标）
pnpm run build:ui

# 3. 任选其一启动
pnpm run docs      # VitePress 文档
pnpm run demo      # 本地演示
pnpm run dev:play  # Storybook
```

修改组件或样式后，如文档样式未更新，重新执行一次 `pnpm run build:ui`。

### 常用命令

| 命令                   | 说明                                  |
| ---------------------- | ------------------------------------- |
| `pnpm install`         | 安装依赖                              |
| `pnpm run build:ui`    | 生成类型声明，并构建全部 `packages/*` |
| `pnpm run docs`        | 启动文档开发服务器                    |
| `pnpm run demo`        | 启动演示项目                          |
| `pnpm run dev:play`    | 启动 Storybook                        |
| `pnpm run type:src`    | 仅对组件源码做类型检查 / 生成声明     |
| `pnpm run type:node`   | 检查 Node 侧（脚本、配置）类型        |
| `pnpm run mv-type`     | 将根目录生成的 d.ts 移动到各包 `dist` |
| `pnpm run clean:type`  | 清理根目录类型产物                    |
| `pnpm run lint:script` | ESLint 检查并尝试自动修复             |
| `pnpm run publish`     | 发布全部 `packages/*` 到 npm          |

### 文档 / Storybook 额外命令

根目录没有封装这些脚本，可通过 filter 调用：

```bash
# 生成 TypeDoc API 文档（写入 docs/api、更新 docs/configs/api.json）
pnpm --filter @peili-ui/docs run api

# 构建文档站点（会先跑 api）
pnpm --filter @peili-ui/docs run build

# 预览已构建的文档站点
pnpm --filter @peili-ui/docs run preview

# 构建 Storybook 静态产物
pnpm --filter @peili-ui/play run build
```

### 单包构建

```bash
pnpm --filter @peili-ui/button run build
pnpm --filter @peili-ui/input run build
pnpm --filter @peili-ui/select run build
pnpm --filter @peili-ui/styles run build
pnpm --filter @peili-ui/icons run build
pnpm --filter peili-ui run build
```

## 🗂️ 仓库结构

```text
packages/
  peili-ui/          # 对外聚合包
  button/ input/ select/ config-provider/
  styles/            # 主题变量与 UnoCSS preset
  shared/ icons/ build/
docs/                # VitePress 文档
demo/                # 本地演示
play/                # Storybook
```

## 🔗 相关链接

- [GitHub](https://github.com/Knight174/peili-ui)
- 本地文档：先 `pnpm run build:ui`，再 `pnpm run docs`
- 本地演示 / Storybook：先 `pnpm run build:ui`，再 `pnpm run demo` 或 `pnpm run dev:play`

## 📄 许可证

[MIT](./LICENSE)
