import React from 'react';
import { AvatarByewind, FourLeafClover, Gradient01, Image01, SnowLogo, WinkingFace } from '@snowui-design-system/resource-react';
import { useTheme } from '../context/ThemeContext';
import { t } from '../i18n/locales';

/**
 * 首页组件
 * 
 * 页面位置：主内容区，路由为 "/"
 * 
 * 布局结构：
 * ┌─────────────────────────────────────┐
 * │ 页面标题                              │
 * │ 页面副标题                            │
 * ├─────────────────────────────────────┤
 * │ ┌─────┐ ┌─────┐ ┌─────┐            │
 * │ │图标 │ │头像 │ │背景 │            │
 * │ └─────┘ └─────┘ └─────┘            │
 * │ ┌─────┐ ┌─────┐ ┌─────┐            │
 * │ │图片 │ │Logo │ │表情 │            │
 * │ └─────┘ └─────┘ └─────┘            │
 * └─────────────────────────────────────┘
 */
const Home: React.FC = () => {
  const { language } = useTheme();

  return (
    // ========== 页面容器 ==========
    // 位置：主内容区，内边距 40px
    <div className="flex-1 p-24px">
      {/* ========== 内容区域 ========== */}
      {/* 最大宽度 1200px，居中显示 */}
      <div className="max-w-1200px mx-auto">
        {/* ========== 页面标题区块 ========== */}
        {/* 位置：页面顶部 */}
        {/* 包含：主标题、副标题 */}
        <div className="mb-20px">
          {/* 主标题 */}
          <h1 className="font-24 font-semibold text-[var(--foreground)] mb-8px">
            {t('home.title', language)}
          </h1>
          {/* 副标题 */}
          <p className="font-14 text-[var(--black-40)]">
            {t('home.subtitle', language)}
          </p>
        </div>

        {/* ========== 素材展示网格区块 ========== */}
        {/* 位置：标题下方 */}
        {/* 布局：响应式网格，移动端 1 列，中等屏幕 2 列，大屏幕 3 列 */}
        {/* 包含：6 个素材分类卡片（图标、头像、背景、图片、Logo、表情） */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-24px">
          {/* ========== 图标分类卡片 ========== */}
          {/* 位置：网格第一行第一列 */}
          {/* 展示：FourLeafClover 图标示例 */}
          <div className="p-24px rounded-16px bg-[var(--background-2)]">
            <h2 className="font-18 font-semibold text-[var(--foreground)] mb-16px">
              {t('home.icons', language)}
            </h2>
            <div className="flex items-center justify-center p-24px bg-[var(--background-1)] rounded-12px">
              <FourLeafClover size={64} weight="regular" className="text-[var(--primary)]" />
            </div>
          </div>

          {/* ========== 头像分类卡片 ========== */}
          {/* 位置：网格第一行第二列 */}
          {/* 展示：AvatarByewind 头像示例 */}
          <div className="p-24px rounded-16px bg-[var(--background-2)]">
            <h2 className="font-18 font-semibold text-[var(--foreground)] mb-16px">
              {t('home.avatars', language)}
            </h2>
            <div className="flex w-[112px] h-[112px] items-center justify-center p-24px bg-[var(--background-1)] rounded-12px">
              <AvatarByewind size={256} className="rounded-full" />
            </div>
          </div>

          {/* ========== 背景分类卡片 ========== */}
          {/* 位置：网格第一行第三列 */}
          {/* 展示：Gradient01 背景示例 */}
          <div className="p-24px rounded-16px bg-[var(--background-2)]">
            <h2 className="font-18 font-semibold text-[var(--foreground)] mb-16px">
              {t('home.backgrounds', language)}
            </h2>
            <div className="flex items-center justify-center p-24px bg-[var(--background-1)] rounded-12px overflow-hidden">
              <Gradient01 width={200} height={120} className="object-cover rounded-8px" />
            </div>
          </div>

          {/* ========== 图片分类卡片 ========== */}
          {/* 位置：网格第二行第一列 */}
          {/* 展示：Image01 图片示例 */}
          <div className="p-24px rounded-16px bg-[var(--background-2)]">
            <h2 className="font-18 font-semibold text-[var(--foreground)] mb-16px">
              {t('home.images', language)}
            </h2>
            <div className="flex items-center justify-center p-24px bg-[var(--background-1)] rounded-12px overflow-hidden">
              <Image01 width={200} height={120} className="object-cover rounded-8px" />
            </div>
          </div>

          {/* ========== Logo 分类卡片 ========== */}
          {/* 位置：网格第二行第二列 */}
          {/* 展示：SnowLogo Logo 示例 */}
          <div className="p-24px rounded-16px bg-[var(--background-2)]">
            <h2 className="font-18 font-semibold text-[var(--foreground)] mb-16px">
              {t('home.logos', language)}
            </h2>
            <div className="flex items-center justify-center p-24px bg-[var(--background-1)] rounded-12px">
              <SnowLogo size={64} />
            </div>
          </div>

          {/* ========== 表情分类卡片 ========== */}
          {/* 位置：网格第二行第三列 */}
          {/* 展示：WinkingFace 表情示例 */}
          <div className="p-24px rounded-16px bg-[var(--background-2)]">
            <h2 className="font-18 font-semibold text-[var(--foreground)] mb-16px">
              {t('home.emoji', language)}
            </h2>
            <div className="flex items-center justify-center p-24px bg-[var(--background-1)] rounded-12px">
              <WinkingFace size={64} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

