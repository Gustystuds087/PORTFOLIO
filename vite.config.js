import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.glb'],
  build: {
    // You can add other build configurations here

    // Code splitting configuration
    chunkSizeWarningLimit: 1200, // Adjust this value as needed
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Include 'logoA.png' in a separate chunk
          if (id.includes('logoA.png')) {
            return 'logoA';
          }
        },
      },
    },
  },
  resolve: {
    alias: {
      // Assuming 'assets' is at the root of your project
      '@assets': path.resolve(__dirname, 'src/assets'),
    },
  },
});
