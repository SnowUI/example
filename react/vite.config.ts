import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/example/', // GitHub Pages 基础路径
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 3001, // 使用不同的端口，避免与 apps/react 冲突
    open: true,
  },
  build: {
    outDir: 'docs', // GitHub Pages 输出目录
    sourcemap: true,
    // 确保构建后的资源路径正确
    assetsDir: 'static',
  },
})

