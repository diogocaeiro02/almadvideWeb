import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Relative base makes the build work both on a custom domain and on
  // https://username.github.io/repository-name/
  base: './',
});
