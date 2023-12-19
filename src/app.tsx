import { memo } from 'react';
import { AppRouter } from './app-router';
import { GlobalStyles } from './styles';
import { ThemeWrapper } from './styles/theme-wrapper';

export const App = memo(() => (
    <ThemeWrapper >
        <GlobalStyles />
        <AppRouter />
    </ThemeWrapper>
));
