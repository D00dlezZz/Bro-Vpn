import { fileURLToPath, URL } from 'node:url'
import AutoImport from 'unplugin-auto-import/vite'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: ['vue', 'vue-router'],
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
    extensions: ['.js', '.json', '.vue'],
  },
  server: {
    host: true,
    port: 8080,
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: ` @import "./src/assets/_mixins.scss";`
      }
    }
  }
})
