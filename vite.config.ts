import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    proxy: {
      '/send-email': 'http://localhost:3000', // Proxy para redirigir a Express
    },
  },
});
