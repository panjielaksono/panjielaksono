import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('.', import.meta.url));

export default defineConfig({
  base: './',
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        portfolio: resolve(root, 'index.html'),
        warehouseDemo: resolve(root, 'warehouse-demo.html'),
        threeDgsDemo: resolve(root, '3dgs-demo.html'),
        disasterShowcase: resolve(root, 'disaster-showcase.html'),
        isiListrikShowcase: resolve(root, 'isilistrik-showcase.html'),
        maFitsShowcase: resolve(root, 'mafits-showcase.html'),
        eLearningShowcase: resolve(root, 'e-learning-showcase.html'),
        clientShowcase: resolve(root, 'client-showcase.html'),
        posShowcase: resolve(root, 'pos-showcase.html'),
      },
    },
  },
});
