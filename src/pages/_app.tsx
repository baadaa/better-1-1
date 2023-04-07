import '@/styles/globals.css';
import '@/styles/hamburger.css';
import { useState, useEffect } from 'react';
import type { AppProps } from 'next/app';
import { ThemeContext, Theme } from '@/contexts/ThemeContext';
import { setLocalStorage, toggleColorMode } from '@/utils/utils';

export default function App({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState<Theme>(Theme.Light);
  const colorMode = { theme, setTheme };
  const applyColorTheme = (targetMode: Theme) => {
    setTheme(targetMode);
    toggleColorMode(targetMode);
  };
  useEffect(() => {
    const loadColorTheme = () => {
      const savedTheme = localStorage.getItem('b_1:1_colormode');
      if (!savedTheme) {
        applyColorTheme(Theme.Light);
        return null;
      }
      const currentTheme = JSON.parse(savedTheme) as Theme;
      applyColorTheme(currentTheme);
    };
    loadColorTheme();
  }, []);
  useEffect(() => {
    setLocalStorage('b_1:1_colormode', JSON.stringify(theme));
  }, [theme]);
  return (
    <ThemeContext.Provider value={colorMode}>
      <Component {...pageProps} />
    </ThemeContext.Provider>
  );
}
