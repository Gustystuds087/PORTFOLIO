import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.glb'],
  build: {
    // You can add other build configurations here

    // Code splitting configuration
    chunkSizeWarningLimit: 1200, // Adjust this value as needed
    output: {
      manualChunks: {
        lodash: ['lodash']
      },
    },
  },
});
