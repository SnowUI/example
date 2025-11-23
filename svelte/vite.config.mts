import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import UnoCSS from 'unocss/vite'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svelte(),
    UnoCSS()
  ],
  base: '/example/svelte/', // GitHub Pages 基础路径
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 3002, // 使用不同的端口，避免与其他项目冲突
    open: true,
  },
  build: {
    outDir: 'docs', // GitHub Pages 输出目录
    sourcemap: true,
    // 确保构建后的资源路径正确
    assetsDir: 'static',
  },
})

