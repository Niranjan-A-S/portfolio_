import { FC, memo } from 'react';
import { ThemeProvider } from 'styled-components';
import { useThemeConfig } from '../hooks/use-theme-config';
import { IParentProps } from '../typings/component-props';

export const ThemeWrapper: FC<IParentProps> = memo(({ children }) => {
    const themeConfig = useThemeConfig();

    return (<ThemeProvider theme={themeConfig}>
        {children}
    </ThemeProvider>
    );
});
