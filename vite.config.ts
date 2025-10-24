import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { URL, fileURLToPath } from 'node:url';
import viteImagemin from 'vite-plugin-imagemin';

function getPackageName(id: string) {
  const parts = id.split('node_modules/')[1].split('/');
  return parts[0].startsWith('@') ? `${parts[0]}/${parts[1]}` : parts[0];
}
// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [
    react(),
    viteImagemin({
      gifsicle: { optimizationLevel: 7 },
      optipng: { optimizationLevel: 7 },
      mozjpeg: { quality: 75 },
      pngquant: { quality: [0.7, 0.9] },
      svgo: { plugins: [{ name: 'removeViewBox' }] },
    }),
  ],
  server: {
    port: 4000,
    open: true,
    host: true,
  },
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-redux',
      '@reduxjs/toolkit',
      'react-helmet-async',
      'use-sync-external-store',
    ],
    exclude: [],
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/assets/styles/index.scss" as *;`,
      },
    },
    devSourcemap: false,
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@components': fileURLToPath(new URL('./src/components', import.meta.url)),
      '@assets': fileURLToPath(new URL('./src/assets', import.meta.url)),
      '@styles': fileURLToPath(new URL('./src/assets/styles', import.meta.url)),
      '@utils': fileURLToPath(new URL('./src/utils', import.meta.url)),
      '@hooks': fileURLToPath(new URL('./src/hooks', import.meta.url)),
      '@types': fileURLToPath(new URL('./src/types', import.meta.url)),
      '@pages': fileURLToPath(new URL('./src/pages', import.meta.url)),
      '@layouts': fileURLToPath(new URL('./src/layouts', import.meta.url)),
      '@router': fileURLToPath(new URL('./src/router', import.meta.url)),
      '@store': fileURLToPath(new URL('./src/store', import.meta.url)),
      '@services': fileURLToPath(new URL('./src/services', import.meta.url)),
    },
    // Prevent duplicate React instances
    dedupe: ['react', 'react-dom', 'react-redux', '@reduxjs/toolkit', 'use-sync-external-store'],
  },
  build: {
    outDir: 'dist',
    target: 'es2015',
    minify: 'esbuild',
    sourcemap: false,
    cssCodeSplit: true,
    cssMinify: true,
    rollupOptions: {
      output: {
        // Asset files organization
        assetFileNames: assetInfo => {
          const ext = assetInfo.name?.split('.').pop()?.toLowerCase();
          const hash = '[hash]';
          const name = '[name]';

          switch (ext) {
            case 'css':
              return `assets/css/${name}-${hash}[extname]`;
            case 'png':
            case 'jpg':
            case 'jpeg':
            case 'svg':
            case 'gif':
            case 'webp':
              return `assets/images/${name}-${hash}[extname]`;
            case 'woff':
            case 'woff2':
            case 'ttf':
            case 'eot':
              return `assets/fonts/${name}-${hash}[extname]`;
            default:
              return `assets/${name}-${hash}[extname]`;
          }
        },

        // JS files organization
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',

        // Code splitting strategy
        manualChunks: id => {
          if (!id.includes('node_modules')) return undefined;

          const pkgName = getPackageName(id);

          // React ecosystem
          if (
            [
              'react',
              'react-dom',
              'react-redux',
              '@reduxjs/toolkit',
              'react-helmet-async',
              'use-sync-external-store',
            ].includes(pkgName)
          ) {
            return 'react-core';
          }

          // Router
          if (['react-router-dom', 'react-router'].includes(pkgName)) {
            return 'router';
          }

          // UI libraries
          if (
            ['@mui/material', '@mui/icons-material', '@emotion/react', '@emotion/styled'].includes(
              pkgName
            )
          ) {
            return 'ui-libs';
          }

          // Other vendors
          return 'vendors';
        },
      },
    },
  },
});
