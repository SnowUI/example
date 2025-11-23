import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Language } from '../i18n/locales';

type ThemeMode = 'light' | 'dark';
type ThemeSystem = 'snowui' | 'ios';

interface ThemeContextType {
  themeMode: ThemeMode;
  themeSystem: ThemeSystem;
  language: Language;
  setThemeMode: (mode: ThemeMode) => void;
  setThemeSystem: (system: ThemeSystem) => void;
  setLanguage: (lang: Language) => void;
  toggleThemeMode: () => void;
  toggleThemeSystem: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [themeMode, setThemeMode] = useState<ThemeMode>(() => {
    const saved = localStorage.getItem('themeMode');
    return (saved as ThemeMode) || 'light';
  });
  
  const [themeSystem, setThemeSystem] = useState<ThemeSystem>(() => {
    const saved = localStorage.getItem('themeSystem');
    return (saved as ThemeSystem) || 'snowui';
  });
  
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('language');
    return (saved as Language) || 'en';
  });

  useEffect(() => {
    const htmlElement = document.documentElement;
    
    // 移除所有主题类
    htmlElement.classList.remove(
      'theme-snowui-light',
      'theme-snowui-dark',
      'theme-ios-light',
      'theme-ios-dark'
    );
    
    // 添加当前主题类
    const themeClass = `theme-${themeSystem}-${themeMode}`;
    htmlElement.classList.add(themeClass);
    
    // 保存到 localStorage
    localStorage.setItem('themeMode', themeMode);
    localStorage.setItem('themeSystem', themeSystem);
  }, [themeMode, themeSystem]);

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const toggleThemeMode = () => {
    setThemeMode((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const toggleThemeSystem = () => {
    setThemeSystem((prev) => (prev === 'snowui' ? 'ios' : 'snowui'));
  };

  return (
    <ThemeContext.Provider
      value={{
        themeMode,
        themeSystem,
        language,
        setThemeMode,
        setThemeSystem,
        setLanguage,
        toggleThemeMode,
        toggleThemeSystem,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};

