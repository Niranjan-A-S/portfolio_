import { useState, useMemo, useCallback, ChangeEvent } from 'react';
import { themeObject } from '../styles';
import { DEFAULT_THEME, LOCAL_STORAGE_THEME_KEY } from '../data/constants';

export const useThemeConfig = () => {

    const readThemeFromStorage = (initialValue: string) => {
        if (typeof window === 'undefined') {
            return initialValue;
        }
        try {
            return window.localStorage.getItem(LOCAL_STORAGE_THEME_KEY) || initialValue;
        } catch (error) {
            console.warn('Error reading theme from storage', error);
            return initialValue;
        }
    };

    const [isDarkMode, setIsDarkMode] = useState<boolean>(readThemeFromStorage(DEFAULT_THEME) === 'dark');

    const toggleTheme = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        const isDark = event.target.checked;
        const theme = isDark ? 'dark' : 'light';
        setIsDarkMode(isDark);
        window.localStorage.setItem(LOCAL_STORAGE_THEME_KEY, theme);
    }, []);

    const theme = useMemo(() => (isDarkMode ? 'dark' : 'light'), [isDarkMode]);
    const themeData = useMemo(() => themeObject[theme], [theme]);

    return useMemo(() => ({
        ...themeData,
        isDarkMode,
        toggleTheme
    }), [isDarkMode, themeData, toggleTheme]);
};

