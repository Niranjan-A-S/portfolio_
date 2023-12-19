import { FC, memo, useCallback, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '.';
import { IParentProps } from '../typings/component-props';

export const ThemeWrapper: FC<IParentProps> = memo(({ children }) => {

    const [_theme, setTheme] = useState<'light' | 'dark'>('dark');

    const toggleTheme = useCallback(() => {
        setTheme(_theme === 'light' ? 'dark' : 'light');
    }, [_theme]);

    return <ThemeProvider theme={theme[_theme]}>
        {children}
    </ThemeProvider>;
});
