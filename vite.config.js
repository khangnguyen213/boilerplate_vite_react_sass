import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  // Config alias
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  // / Config Global Scss Variable */
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "./src/scss/index.scss";
        `,
      },
    },
  },
});
