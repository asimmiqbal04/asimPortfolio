import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: "/Ayesha-Portfolioi/",
  server: {
    proxy: {
      '/api': {
        target: 'https://www.zolixi.com', // Zolixi Next.js server
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
