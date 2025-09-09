import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: "/", // or just remove this line
  server: {
    proxy: {
      '/api': {
        target: 'https://www.zolixi.com',
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
