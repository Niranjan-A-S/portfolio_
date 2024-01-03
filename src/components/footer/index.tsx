import { FC, memo } from 'react';
import styled from 'styled-components';
import { MY_NAME, Urls } from '../../data/constants';
import { ToggleButton } from '../ui/toggle-button';

export const StyledFooter = styled.footer`
    font-weight: 500;
    font-size: 18px;
    padding: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap:8px;

    & > a {
        color: ${({ theme }) => theme.focusedTextColor};
        font-size: inherit;
    }
    
    &> a:hover {
        text-decoration: underline;
    }
`;

//TODO Remove this toggle button from footer
export const Footer: FC = memo(() =>
    <StyledFooter>
        Developed by <a href={Urls.linkedin} target="_blank">{MY_NAME}</a> with 💚 {new Date().getFullYear()}
        <ToggleButton />
    </StyledFooter>
);
