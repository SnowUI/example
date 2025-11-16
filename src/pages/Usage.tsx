import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { t } from '../i18n/locales';

/**
 * 使用说明页面组件
 * 
 * 页面位置：主内容区，路由为 "/usage"
 * 
 * 布局结构：
 * ┌─────────────────────────────────────┐
 * │ 页面标题                              │
 * ├─────────────────────────────────────┤
 * │ 📦 安装说明区块                       │
 * ├─────────────────────────────────────┤
 * │ 📥 导入说明区块                       │
 * ├─────────────────────────────────────┤
 * │ 💡 使用示例区块                       │
 * ├─────────────────────────────────────┤
 * │ 🎨 主题系统区块                       │
 * ├─────────────────────────────────────┤
 * │ 🎯 CSS 变量区块                       │
 * └─────────────────────────────────────┘
 */
const Usage: React.FC = () => {
  const { language } = useTheme();

  return (
    // ========== 页面容器 ==========
    // 位置：主内容区，内边距 40px
    <div className="flex-1 p-24px">
      {/* ========== 内容区域 ========== */}
      {/* 最大宽度 800px，居中显示 */}
      <div className="max-w-800px mx-auto">
        {/* ========== 页面标题区块 ========== */}
        {/* 位置：页面顶部 */}
        {/* 包含：页面主标题 */}
        <div className="mb-20px">
          <h1 className="font-24 font-semibold text-[var(--foreground)] mb-16px">
            {t('usage.title', language)}
          </h1>
        </div>

        {/* ========== 说明内容区块 ========== */}
        {/* 位置：标题下方 */}
        {/* 布局：垂直排列，每个区块间距 40px */}
        {/* 包含：5 个说明区块（安装、导入、示例、主题、CSS 变量） */}
        <div className="space-y-20px">
          {/* ========== 安装说明区块 ========== */}
          {/* 位置：第一个说明区块 */}
          {/* 包含：安装标题、说明文字、npm/pnpm 安装命令代码块 */}
          <section className="p-24px rounded-16px bg-[var(--background-2)]">
            <h2 className="font-18 font-semibold text-[var(--foreground)] mb-4px">
              {t('usage.install.title', language)}
            </h2>
            <p className="font-14 text-[var(--foreground)] mb-8px">
              {t('usage.install.description', language)}
            </p>
            {/* 安装命令代码块 */}
            <div className="p-16px rounded-12px bg-[var(--background-1)]">
              <code className="font-14 text-[var(--foreground)] font-mono">
                npm install @snowui-design-system/resource-react
              </code>
              <br />
              <code className="font-14 text-[var(--foreground)] font-mono">
                # or
              </code>
              <br />
              <code className="font-14 text-[var(--foreground)] font-mono">
                pnpm add @snowui-design-system/resource-react
              </code>
            </div>
          </section>

          {/* ========== 导入说明区块 ========== */}
          {/* 位置：第二个说明区块 */}
          {/* 包含：导入标题、说明文字、导入语句代码块 */}
          <section className="p-24px rounded-16px bg-[var(--background-2)]">
            <h2 className="font-18 font-semibold text-[var(--foreground)] mb-4px">
              {t('usage.import.title', language)}
            </h2>
            <p className="font-14 text-[var(--foreground)] mb-16px">
              {t('usage.import.description', language)}
            </p>
            {/* 导入语句代码块 */}
            <div className="p-16px rounded-12px bg-[var(--background-1)]">
              <code className="font-14 text-[var(--foreground)] font-mono whitespace-pre">
{`import { 
  FourLeafClover, 
  AvatarByewind, 
  Gradient01,
  Image01,
  SnowIcon,
  WinkingFace
} from '@snowui-design-system/resource-react';`}
              </code>
            </div>
          </section>

          {/* ========== 使用示例区块 ========== */}
          {/* 位置：第三个说明区块 */}
          {/* 包含：示例标题、说明文字、React 组件使用示例代码块 */}
          <section className="p-24px rounded-16px bg-[var(--background-2)]">
            <h2 className="font-18 font-semibold text-[var(--foreground)] mb-4px">
              {t('usage.example.title', language)}
            </h2>
            <p className="font-14 text-[var(--foreground)] mb-16px">
              {t('usage.example.description', language)}
            </p>
            {/* 使用示例代码块 */}
            <div className="p-16px rounded-12px bg-[var(--background-1)]">
              <code className="font-14 text-[var(--foreground)] font-mono whitespace-pre">
{`function MyComponent() {
  return (
    <div>
      <FourLeafClover size={32} weight="regular" />
      <AvatarByewind size={64} className="rounded-full" />
      <Gradient01 width={200} height={120} />
      <Image01 width={200} height={120} />
      <SnowIcon size={48} />
      <WinkingFace size={48} />
    </div>
  );
}`}
              </code>
            </div>
          </section>

          {/* ========== 主题系统区块 ========== */}
          {/* 位置：第四个说明区块 */}
          {/* 包含：主题标题、说明文字、HTML class 使用代码块、CSS 导入代码块 */}
          <section className="p-24px rounded-16px bg-[var(--background-2)]">
            <h2 className="font-18 font-semibold text-[var(--foreground)] mb-4px">
              {t('usage.theme.title', language)}
            </h2>
            <p className="font-14 text-[var(--foreground)] mb-16px">
              {t('usage.theme.description', language)}
            </p>
            {/* HTML class 使用代码块 */}
            <div className="p-16px rounded-12px bg-[var(--background-1)]">
              <code className="font-14 text-[var(--foreground)] font-mono whitespace-pre">
{`<!-- Light mode, SnowUI theme -->
<html class="theme-snowui-light">

<!-- Dark mode, SnowUI theme -->
<html class="theme-snowui-dark">

<!-- Light mode, iOS theme -->
<html class="theme-ios-light">

<!-- Dark mode, iOS theme -->
<html class="theme-ios-dark">`}
              </code>
            </div>
            {/* CSS 导入代码块 */}
            <div className="mt-16px p-16px rounded-12px bg-[var(--background-1)]">
              <code className="font-14 text-[var(--foreground)] font-mono whitespace-pre">
{`// Option 1: CDN in HTML (Recommended)
<link rel="stylesheet" 
  href="https://cdn.jsdelivr.net/gh/snowui/home@main/design-system/src/snowui.css">

// Option 2: In your CSS file
@import 'https://cdn.jsdelivr.net/gh/snowui/home@main/design-system/src/snowui.css';

// Option 3: In JavaScript/TypeScript
import 'https://cdn.jsdelivr.net/gh/snowui/home@main/design-system/src/snowui.css';`}
              </code>
            </div>
          </section>

          {/* ========== CSS 变量区块 ========== */}
          {/* 位置：第五个说明区块 */}
          {/* 包含：CSS 变量标题、说明文字、CSS 变量使用示例代码块 */}
          <section className="p-24px rounded-16px bg-[var(--background-2)]">
            <h2 className="font-18 font-semibold text-[var(--foreground)] mb-4px">
              CSS Variables
            </h2>
            <p className="font-14 text-[var(--foreground)] mb-16px">
              All design tokens are available as CSS variables. Use them in your styles:
            </p>
            {/* CSS 变量使用示例代码块 */}
            <div className="p-16px rounded-12px bg-[var(--background-1)]">
              <code className="font-14 text-[var(--foreground)] font-mono whitespace-pre">
{`.my-component {
  background-color: var(--background-1);
  color: var(--foreground);
  padding: var(--spacing-16);
  border-radius: var(--corner-radius-8);
  font-size: var(--font-size-16);
  line-height: var(--line-height-16);
}`}
              </code>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Usage;

