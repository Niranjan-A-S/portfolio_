import { createGlobalStyle } from 'styled-components';

export const themeObject = {
    light: {
        backgroundColor: '#FFF',
        primaryTextColor: '#0E0E10',
        focusedTextColor: '#4770ff'
    },
    dark: {
        backgroundColor: '#0E0E10',
        primaryTextColor: '#FFF',
        focusedTextColor: '#4770ff'
    }
};

export const GlobalStyles = createGlobalStyle`
    *  {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
        font-family: Ubuntu, sans-serif;
    }

    body {
        color: ${({ theme }) => theme.primaryTextColor};
        background-color: ${({ theme }) => theme.backgroundColor};
        font-size: 16px;
        transition: all 0.3s ease;

    }

    #root {
        height: 100vh;  
    }

    ::-webkit-scrollbar {
        width: 10px;
    }
    ::-webkit-scrollbar-track {
      background: #f1f1f1;
    }
    ::-webkit-scrollbar-thumb {
      background: #888;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: #555;
    }
`;
