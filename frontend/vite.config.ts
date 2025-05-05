import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd()); // Load .env variables starting by VITE_

  return {
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
          target: env.VITE_DEV_BACKEND_ORIGIN,
          changeOrigin: true,
          secure: false,
          rewrite: (url) => url.replace(/^\/api/, ''),
        },
      },
    },
  };
});
