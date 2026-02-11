import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    base: '/klinika-szumowscy/', // Base path for GitHub Pages project site
    build: {
        outDir: 'dist',
        emptyOutDir: true,
    }
});