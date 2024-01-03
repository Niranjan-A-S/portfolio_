import { FC, memo } from 'react';
import { ThemeProvider } from 'styled-components';
import { IParentProps } from '../typings/component-props';
import { useThemeConfig } from '../hooks/use-theme-config';

export const ThemeWrapper: FC<IParentProps> = memo(({ children }) => {
    const themeConfig = useThemeConfig();

    return (<ThemeProvider theme={themeConfig}>
        {children}
    </ThemeProvider>
    );
});
