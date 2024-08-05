// import { defineConfig } from 'vite';
// import vue from '@vitejs/plugin-vue';

// export default defineConfig({
//   plugins: [vue()],
//   build: {
//     lib: {
//       entry: './src/index.ts',
//       name: 'PeiliuiInput',
//       fileName: 'peili-ui-input',
//     },
//     minify: false,
//     rollupOptions: {
//       external: [/@peili-ui.*/, 'vue'],
//     },
//   },
// });

import { generateVueConfig } from '../build/scripts';

export default generateVueConfig();
