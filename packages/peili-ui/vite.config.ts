import { defineConfig } from 'vite';
import pkg from './package.json';

export default defineConfig({
  build: {
    lib: {
      entry: './src/index.ts',
      name: 'Peiliui',
      // 产物文件名称
      fileName: 'peili-ui',
    },
    minify: false,

    rollupOptions: {
      external: [...Object.keys(pkg.dependencies || {})],
    },
  },
});
