# GitHub Pages 部署指南

## 快速开始

### 1. 构建项目

```bash
pnpm build
# 或
npm run build
```

这会生成 `docs` 文件夹，包含所有构建后的文件。

> **注意**：项目使用 Vite 构建，配置在 `vite.config.ts` 中。`base` 和 `outDir` 已配置为支持 GitHub Pages。

### 2. 提交并推送

```bash
git add docs
git commit -m "Build for GitHub Pages"
git push
```

### 3. 配置 GitHub Pages

1. 进入 GitHub 仓库的 Settings
2. 找到 Pages 设置
3. 在 "Source" 中选择 "Deploy from a branch"
4. 选择分支（通常是 `main` 或 `master`）
5. 在 "Folder" 中选择 `/docs`
6. 点击 Save

### 4. 访问网站

- 如果仓库名是 `username.github.io`，访问：`https://username.github.io`
- 如果仓库名是其他名字（如 `snowui`），访问：`https://username.github.io/snowui`

## 重要说明

### 仓库名称配置

项目使用 Vite，配置在 `vite.config.ts` 中。如果仓库名不是 `example`，需要修改：

```typescript
// vite.config.ts
export default defineConfig({
  base: '/your-repo-name/', // 修改为你的仓库名
  build: {
    outDir: 'docs',
  },
})
```

例如，如果仓库名是 `snowui`：
```typescript
base: '/snowui/',
```

### React Router 配置

代码已经自动从 `import.meta.BASE_URL` 读取 basename，无需手动配置。如果需要手动设置：

在 `src/App.tsx` 中：
```tsx
const basename = import.meta.BASE_URL?.replace(/\/$/, '') || '/example';
<Router basename={basename}>
```

## 故障排除

### 问题：页面显示空白

1. 检查浏览器控制台的错误
2. 确认 `vite.config.ts` 中的 `base` 配置正确
3. 确认 `docs` 文件夹已提交到 GitHub

### 问题：路由不工作

1. 确认 `vite.config.ts` 中的 `base` 配置正确
2. 确认 `src/App.tsx` 中的 `basename` 从 `import.meta.BASE_URL` 读取
3. 检查 GitHub Pages 是否配置为使用 `/docs` 文件夹
4. 确认 `docs/404.html` 文件存在（用于客户端路由）

### 问题：资源文件 404

1. 检查 `vite.config.ts` 中的 `base` 配置
2. 确认所有资源路径使用相对路径（Vite 会自动处理）
3. 重新构建项目：`pnpm build`

## 自动化部署（可选）

可以使用 GitHub Actions 自动部署，创建 `.github/workflows/deploy.yml`：

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - uses: pnpm/action-setup@v2
        with:
          version: 8
      - run: pnpm install
      - run: pnpm build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./docs
```

