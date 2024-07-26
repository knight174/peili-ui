// import { defineConfig } from 'vite';
// import pkg from './package.json';

// export default defineConfig({
//   build: {
//     lib: {
//       // 构建的入口文件
//       entry: './src/index.ts',

//       // 产物的生成格式，默认为 ['es', 'umd']。我们使用默认值，注释掉此字段。
//       // formats: ['es', 'umd'],

//       // 当产物为 umd、iife 格式时，该模块暴露的全局变量名称
//       name: 'PeiliuiShared',
//       // 产物文件名称
//       fileName: 'peili-ui-shared',
//     },
//     // 为了方便学习，查看构建产物，将此置为 false，不要混淆产物代码
//     minify: false,

//     rollupOptions: {
//       external: [...Object.keys(pkg.dependencies || {})],
//       output: {
//         globals: {
//           lodash: 'lodash',
//         },
//       },
//     },
//   },
// });

import { generateConfig } from '../build/build.config';

export default generateConfig();
