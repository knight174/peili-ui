import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { join } from 'node:path';
import UnoCSS from 'unocss/vite';

export default defineConfig({
  plugins: [vue(), UnoCSS()],
  resolve: {
    alias: [
      {
        find: /^@peili-ui\/(.+)$/,
        replacement: join(__dirname, '..', 'packages', '$1', 'src'),
      },
    ],
  },
});
