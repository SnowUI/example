import React, { useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as AllComponents from '@snowui-design-system/resource-react';
import {
  icons,
  componentNames,
} from '@snowui-design-system/resource-react';
import { useTheme } from '../context/ThemeContext';
import { t } from '../i18n/locales';

type AssetComponent = React.ComponentType<any>;

interface AssetItem {
  name: string;
  Component: AssetComponent;
}

type CategoryKey = 'icons' | 'avatars' | 'backgrounds' | 'images' | 'logos' | 'emoji' | 'cursors' | 'illustrations';

// 使用自动生成的组件名称映射来创建 AssetItem 数组
const createAssetItemsFromNames = (names: readonly string[]): AssetItem[] => {
  return names
    .map((name) => {
      // 确保 name 是字符串，防止构建时被处理
      const nameStr = String(name);
      const Component = (AllComponents as unknown as Record<string, AssetComponent>)[nameStr];
      if (!Component) return null;
      return { name: nameStr, Component };
    })
    .filter((item): item is AssetItem => item !== null)
    .sort((a, b) => a.name.localeCompare(b.name));
};

// 定义所有素材组件（使用自动生成的名称映射）
const avatarItems = createAssetItemsFromNames(componentNames.avatars);
const backgroundItems = createAssetItemsFromNames(componentNames.backgrounds);
const imageItems = createAssetItemsFromNames(componentNames.images);
const logoItems = createAssetItemsFromNames(componentNames.logos);
const emojiItems = createAssetItemsFromNames(componentNames.emoji);
const cursorItems = createAssetItemsFromNames(componentNames.cursors);
const illustrationItems = createAssetItemsFromNames(componentNames.illustrations);

const iconItems: AssetItem[] = Object.entries(icons as Record<string, AssetComponent>)
  .map(([name, Component]) => ({ name, Component }))
  .sort((a, b) => a.name.localeCompare(b.name));

const CATEGORY_ITEMS: Record<CategoryKey, AssetItem[]> = {
  icons: iconItems,
  avatars: avatarItems,
  backgrounds: backgroundItems,
  images: imageItems,
  logos: logoItems,
  emoji: emojiItems,
  cursors: cursorItems,
  illustrations: illustrationItems,
};

const gridClassByCategory: Record<CategoryKey, string> = {
  icons: 'grid-cols-3 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10',
  avatars: 'grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8',
  backgrounds: 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5',
  images: 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5',
  logos: 'grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8',
  emoji: 'grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8',
  cursors: 'grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8',
  illustrations: 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5',
};

const sizeNoticeCategories: CategoryKey[] = ['icons', 'avatars', 'logos', 'emoji', 'cursors'];

const isValidCategory = (value: string): value is CategoryKey =>
  ['icons', 'avatars', 'backgrounds', 'images', 'logos', 'emoji', 'cursors', 'illustrations'].includes(value);

const Categories: React.FC = () => {
  const { language } = useTheme();
  const params = useParams<{ category: string }>();
  const categoryKey: CategoryKey = isValidCategory(params.category ?? '') ? (params.category as CategoryKey) : 'icons';

  const [page, setPage] = useState(1);

  useEffect(() => {
    setPage(1);
  }, [categoryKey]);

  const items = CATEGORY_ITEMS[categoryKey] || [];
  const itemsPerPage = categoryKey === 'icons' ? 60 : items.length;
  const totalPages = Math.max(1, Math.ceil(items.length / itemsPerPage));

  const paginatedItems = useMemo(
    () => items.slice((page - 1) * itemsPerPage, page * itemsPerPage),
    [items, page, itemsPerPage]
  );

  const infoText = useMemo(() => {
    const parts = [`${t('categories.showing', language)} ${items.length}`];
    if (categoryKey === 'icons') {
      parts.push(`${t('categories.regular', language)}, ${t('categories.size', language)}`);
    } else if (sizeNoticeCategories.includes(categoryKey)) {
      parts.push(t('categories.size', language));
    }
    return parts.join(' · ');
  }, [categoryKey, items.length, language]);

  const renderAsset = (item: AssetItem) => {
    switch (categoryKey) {
      case 'icons':
        return React.createElement(item.Component, {
          size: 32,
          weight: 'regular',
          className: 'text-[var(--foreground)]',
        });
      case 'avatars':
        return (
          <div className="w-[32px] h-[32px] rounded-8px overflow-hidden">
            <item.Component size={128} className="rounded-full object-cover w-full h-full" />
          </div>
        
      )
        
      case 'backgrounds':
        return (
          <div className="w-full aspect-video rounded-8px overflow-hidden">
            <item.Component width={320} height={200} className="object-cover w-full h-full" />
          </div>
        );
      case 'images':
        return (
          <div className="w-full aspect-video rounded-8px overflow-hidden">
            <item.Component width={320} height={200} className="object-cover w-full h-full" />
          </div>
        );
      case 'logos':
        return <item.Component size={32} />;
      case 'emoji':
        return <item.Component size={32} />;
      case 'cursors':
        return <item.Component size={32} />;
      case 'illustrations':
        return (
          <div className="w-full p-20px aspect-video rounded-8px overflow-hidden bg-[var(--background-2)] flex items-center justify-center">
            <item.Component width={320} height={200} className="object-contain w-full h-full" />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    // ========== 页面容器 ==========
    // 位置：主内容区，响应式内边距（移动端 24px，桌面端 32px）
    <div className="flex-1 p-24px md:p-32px">
      {/* ========== 内容区域 ========== */}
      {/* 最大宽度 1400px，居中显示 */}
      <div className="max-w-1400px mx-auto">
        {/* ========== 页面标题区块 ========== */}
        {/* 位置：页面顶部 */}
        {/* 包含：分类标题、信息说明文字 */}
        <div className="mb-24px">
          {/* 分类标题（根据当前分类动态显示，如"图标"、"头像"等） */}
          <h1 className="font-18 font-semibold text-[var(--foreground)] mb-8px">
            {t(`categories.${categoryKey}`, language)}
          </h1>
          {/* 信息说明文字（显示素材数量和尺寸说明） */}
          <p className="font-12 text-[var(--black-40)]">{infoText}</p>
        </div>

        {/* ========== 素材网格展示区块 ========== */}
        {/* 位置：标题下方 */}
        {/* 布局：响应式网格，根据分类不同显示不同列数 */}
        {/* 包含：所有素材项的展示（图标、头像、背景等） */}
        <div className={`grid ${gridClassByCategory[categoryKey]} gap-24px`}>
          {paginatedItems.map((item) => (
            // ========== 单个素材项卡片 ==========
            // 位置：网格中的每个单元格
            // 包含：素材预览图、素材名称
            <div
              key={item.name}
              className="flex flex-col items-center gap-8px group cursor-pointer"
            >
              {/* 素材预览图容器 */}
              {/* 悬停时放大效果 */}
              <div className="flex items-center justify-center w-full transition-transform group-hover:scale-105">
                {renderAsset(item)}
              </div>
              {/* 素材名称文字 */}
              {/* 悬停时文字颜色变化 */}
              <span className="font-12 text-[var(--black-40)] text-center break-all group-hover:text-[var(--foreground)] transition-colors">
                {String(item.name)}
              </span>
            </div>
          ))}
        </div>

        {/* ========== 分页控制区块 ========== */}
        {/* 位置：素材网格下方 */}
        {/* 显示条件：总页数大于 1 时显示 */}
        {/* 包含：上一页按钮、当前页/总页数、下一页按钮 */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-12px mt-32px">
            {/* 上一页按钮 */}
            <button
              onClick={() => setPage((prev) => Math.max(1, prev - 1))}
              disabled={page === 1}
              className="px-16px py-10px rounded-12px bg-[var(--background-2)] border border-[var(--black-10)] text-[var(--foreground)] disabled:opacity-50 disabled:cursor-not-allowed hover:border-[var(--primary)] transition-colors"
            >
              Prev
            </button>
            {/* 页码显示 */}
            <span className="font-14 text-[var(--black-40)]">
              {page} / {totalPages}
            </span>
            {/* 下一页按钮 */}
            <button
              onClick={() => setPage((prev) => Math.min(totalPages, prev + 1))}
              disabled={page === totalPages}
              className="px-16px py-10px rounded-12px bg-[var(--background-2)] border border-[var(--black-10)] text-[var(--foreground)] disabled:opacity-50 disabled:cursor-not-allowed hover:border-[var(--primary)] transition-colors"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Categories;

