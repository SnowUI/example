import React from 'react';
import { SnowLogo, Apple, Sun, Moon, Globe } from '@snowui-design-system/resource-react';
import { useTheme } from '../context/ThemeContext';
import { languages, t } from '../i18n/locales';

/**
 * 顶部栏组件
 * 
 * 页面位置：页面最顶部，固定定位（sticky）
 * 
 * 布局结构：
 * ┌─────────────────────────────────────────────────────────────┐
 * │ [Logo] SnowUI          [亮/暗] [主题] [语言]                  │
 * │        Design Resource                                       │
 * └─────────────────────────────────────────────────────────────┘
 */
const TopBar: React.FC = () => {
  const {
    themeMode,
    themeSystem,
    language,
    toggleThemeMode,
    toggleThemeSystem,
    setLanguage,
  } = useTheme();

  const isLightMode = themeMode === 'light';
  const isSnowUITheme = themeSystem === 'snowui';

  return (
    // ========== 顶部栏容器 ==========
    // 位置：页面最顶部，固定定位，层级 z-20
    // 样式：水平布局，左右对齐，底部边框分隔
    <header className="sticky top-0 z-20 p-20px flex items-center justify-between py-12px border-b border-[var(--black-10)] bg-[var(--background-1)]">
      {/* ========== 左侧：Logo 和标题区块 ========== */}
      {/* 位置：顶部栏左侧 */}
      {/* 包含：SnowUI Logo 图标、网站标题、副标题 */}
      <div className="flex items-center gap-8px">
        {/* Logo 图标容器 */}
        <div className="flex-shrink-0 w-28px h-28px flex items-center justify-center">
          <SnowLogo size={28} />
        </div>
        {/* 标题文字区块 */}
        <div className="flex flex-col">
          {/* 主标题：SnowUI */}
          <span className="font-16 text-[var(--foreground)]">SnowUI Design Resource</span>
        </div>
      </div>

      {/* ========== 右侧：控制按钮区块 ========== */}
      {/* 位置：顶部栏右侧 */}
      {/* 包含：亮/暗模式切换、主题切换（SnowUI/iOS）、语言切换 */}
      <div className="flex items-center gap-16px">
        {/* ========== 亮/暗模式切换按钮 ========== */}
        {/* 功能：切换亮色/暗色主题 */}
        {/* 显示：太阳图标（亮色模式）或月亮图标（暗色模式） */}
        <button
          onClick={toggleThemeMode}
          className="flex items-center p-4px gap-4px px-4px rounded-12px text-[var(--foreground)] transition-colors hover:border-[var(--primary)]"
          aria-label={isLightMode ? t('theme.dark', language) : t('theme.light', language)}
        >
          {isLightMode ? <Sun size={16} /> : <Moon size={16} />}
          <span className="font-12">{isLightMode ? t('theme.light', language) : t('theme.dark', language)}</span>
        </button>

        {/* ========== 主题系统切换按钮 ========== */}
        {/* 功能：切换 SnowUI 主题或 iOS 主题 */}
        {/* 显示：SnowUI Logo（当前为 SnowUI 主题）或 Apple Logo（当前为 iOS 主题） */}
        <button
          onClick={toggleThemeSystem}
          className="flex items-center p-4px gap-4px px-4px rounded-12px text-[var(--foreground)] transition-colors hover:border-[var(--primary)]"
          aria-label={isSnowUITheme ? t('theme.ios', language) : t('theme.snowui', language)}
        >
          <div className="w-20px h-20px flex items-center justify-center">
            {isSnowUITheme ? <SnowLogo size={16} /> : <Apple size={16} />}
          </div>
          <span className="font-12">{isSnowUITheme ? t('theme.snowui', language) : t('theme.ios', language)}</span>
        </button>

        {/* ========== 语言选择器 ========== */}
        {/* 功能：切换网站语言 */}
        {/* 显示：地球图标 + 语言缩写下拉选择框 */}
        <div className="flex items-center p-4px gap-0px px-4px rounded-12px ]">
          <Globe size={16} className="text-[var(--foreground)]" />
          <select
            value={language}
            onChange={(event) => setLanguage(event.target.value as typeof language)}
            className="bg-transparent border-none outline-none font-12 text-[var(--foreground)]"
          >
            {languages.map((lang) => (
              <option key={lang.code} value={lang.code}>
                {lang.abbreviation}
              </option>
            ))}
          </select>
        </div>
      </div>
    </header>
  );
};

export default TopBar;

