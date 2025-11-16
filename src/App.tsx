import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Sidebar from './components/Sidebar';
import TopBar from './components/TopBar';
import Home from './pages/Home';
import Categories from './pages/Categories';
import Usage from './pages/Usage';

/**
 * 主应用组件
 * 
 * 页面布局结构：
 * ┌─────────────────────────────────────────┐
 * │ TopBar (顶部栏)                          │
 * ├──────────┬──────────────────────────────┤
 * │          │                              │
 * │ Sidebar  │ Main Content Area            │
 * │ (侧边栏) │ (主内容区)                    │
 * │          │  - Home (首页)                │
 * │          │  - Categories (分类页)        │
 * │          │  - Usage (使用说明页)         │
 * │          │                              │
 * └──────────┴──────────────────────────────┘
 */
function App() {
  // GitHub Pages basename 配置
  // 仓库名是 'example'，所以 basename 应该是 '/example'
  // React 会根据 package.json 中的 homepage 字段自动设置 PUBLIC_URL
  const basename = process.env.PUBLIC_URL || '/example';

  return (
    <ThemeProvider>
      <Router basename={basename}>
        {/* 页面根容器：垂直布局，固定高度为屏幕高度，防止整体页面滚动 */}
        <div className="flex flex-col h-screen bg-[var(--background-1)] overflow-hidden">
          {/* ========== 顶部栏区块 ========== */}
          {/* 位置：页面最顶部，固定定位 */}
          {/* 包含：Logo、网站标题、主题切换、语言切换 */}
          <TopBar />
          
          {/* ========== 主体内容区域 ========== */}
          {/* 布局：水平布局，左侧为侧边栏，右侧为主内容区，占据剩余高度 */}
          <div className="flex flex-1 overflow-hidden min-h-0">
            {/* ========== 左侧边栏区块 ========== */}
            {/* 位置：页面左侧，固定宽度，不随页面滚动 */}
            {/* 包含：导航菜单（首页、素材分类、使用说明） */}
            <Sidebar />
            
            {/* ========== 主内容区 ========== */}
            {/* 位置：页面右侧，占据剩余空间，可滚动 */}
            {/* 根据路由显示不同页面 */}
            <main className="flex-1 overflow-y-auto">
              <Routes>
                {/* 首页路由：/ */}
                <Route path="/" element={<Home />} />
                {/* 分类页路由：/assets/:category (如 /assets/icons, /assets/avatars) */}
                <Route path="/assets/:category" element={<Categories />} />
                {/* 使用说明页路由：/usage */}
                <Route path="/usage" element={<Usage />} />
              </Routes>
            </main>
          </div>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;

