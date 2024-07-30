// import { defineConfig } from 'vite';
// import vue from '@vitejs/plugin-vue';

// export default defineConfig({
//   plugins: [vue()],
//   build: {
//     lib: {
//       entry: './src/index.ts',
//       name: 'PeiliuiButton',
//       fileName: 'peili-ui-button',
//     },
//     minify: false,
//     rollupOptions: {
//       external: [/@peili-ui.*/, 'vue'],
//     },
//   },
// });

import UnoCSS from 'unocss/vite';
import { generateVueConfig } from '../build/build.config';

export default generateVueConfig(
  {},
  {
    plugins: [UnoCSS()],
  },
);
