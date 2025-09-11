import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  
  // ----- ADD THIS ENTIRE 'server' BLOCK -----
  server: {
    proxy: {
      // This will forward any request starting with '/api' to your backend
      '/api': {
        target: 'http://localhost:3000', // IMPORTANT: Make sure this is the port your backend is running on
        changeOrigin: true,
      },
    },
  },
});