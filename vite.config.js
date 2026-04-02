import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: '.',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        workspace: resolve(__dirname, 'workspace.html'),
        showcase: resolve(__dirname, 'showcase.html'),
      },
    },
  },
  server: {
    port: 3000,
    open: true
  }
});
