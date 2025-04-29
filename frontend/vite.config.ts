import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@tabler/icons-react': '@tabler/icons-react/dist/esm/icons/index.mjs', // Temporary fix to tabler's import times
    },
  },
  server: {
    proxy: { // Proxy in dev mode to redirect properly the requests to the backend
      '/api': {
        target: 'http://192.168.1.102:3000', // TODO: config file
        changeOrigin: true,
        secure: false,
        rewrite: (url) => url.replace(/^\/api/, ''),
      },
    },
  },
});
