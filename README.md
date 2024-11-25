# PeiliUI

基于 Vue3 的组件库，从 0 到 1 搭建现代化的组件库工程。

## ✨ 特性

- 🛠️ 基于 Vue3、TypeScript、Vite 开发
- 📦 开箱即用的高质量组件
- 🎨 灵活的主题定制能力
- 📖 详尽的文档和示例
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

## 🔨 使用

```ts
import { createApp } from 'vue';
import PeiliUI from 'peili-ui';

// 引入 UnoCSS 样式
import 'virtual:uno.css';
// 引入组件库样式
import 'peili-ui/dist/style.css';

import App from './App.vue';
const app = createApp(App);
app.use(PeiliUI);
app.mount('#app');
```

## 🔨 按需引入

1. 在 main.js|main.ts 中引入样式

```ts
import 'virtual:uno.css';
import 'peili-ui/dist/style.css';
```

2. 在需要使用组件的页面中引入组件

```ts
import { PLButton } from 'peili-ui';
```

## 📝 开发指南

### 环境准备

- Node.js >= 16
- pnpm >= 8

### 安装依赖

```bash
pnpm install
```

### 开发模式

```bash
# 启动文档开发服务器
pnpm run docs
# 启动演示项目
pnpm run demo
# 启动 Storybook
pnpm run dev:play
```

### 构建

```bash
# 构建组件库
pnpm run build:ui
# 构建文档站点
pnpm run docs:build
```

### 发布

```bash
pnpm run publish
```

## 🔗 相关链接

- [文档站点](#)
- [演练场](#)

## 📄 许可证

[MIT](./LICENSE)
