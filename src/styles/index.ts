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
        secondaryText: '#65B741',
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
