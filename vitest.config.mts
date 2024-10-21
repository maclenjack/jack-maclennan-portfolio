import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {
    dir: './tests/component/',
    environment: 'jsdom',
    coverage: {
      provider: 'v8',
      include: ['src/*'],
      exclude: ['src/app/layout.tsx']
    },
    css: true,
    globals: true,
    setupFiles: './tests/vite.setup.ts'
  }
});