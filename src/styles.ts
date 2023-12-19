import { createGlobalStyle } from 'styled-components';

export const theme = {
    light: {
        body: '',
        text: '',
        toggleBorder: '',
        background: ''
    },
    dark: {
        body: '#0E0E10',
        primaryText: '#FFF',
        secondaryText: 'orangered',
        toggleBorder: '',
        background: ''
    }
};

export const GlobalStyles = createGlobalStyle`
    body , *  {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
        font-family: Ubuntu, sans-serif;
        color: ${({ theme }) => theme.primaryText};
        background-color: ${({ theme }) => theme.body};
        font-size: 16px;
    }

    #root {
        height: 100vh;  
    }
`;
