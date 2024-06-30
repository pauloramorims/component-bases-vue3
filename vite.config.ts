import { fileURLToPath, URL } from 'node:url'
import dotenv from 'dotenv';
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/assets/_settings.scss";`
      }
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  define: {
    'process.env': dotenv.config().parsed
  }
})
