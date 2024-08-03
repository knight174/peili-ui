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

import { generateVueConfig } from '../build/scripts';

export default generateVueConfig({
  presetPeiliuiOptions: {
    include: ['button'],
  },
});
