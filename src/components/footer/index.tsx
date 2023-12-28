import { FC, memo } from 'react';
import styled from 'styled-components';
import { MY_NAME, Urls } from '../../data/constants';

export const StyledFooter = styled.footer`
    font-weight: 500;
    font-size: 18px;
    text-align: center;
    padding: 14px;

    & > a {
        color: ${({ theme }) => theme.secondaryText};
        font-size: inherit;
    }
    
    &> a:hover {
        text-decoration: underline;
    }
`;
export const Footer: FC = memo(() => <StyledFooter>
    Developed by <a href={Urls.linkedin} target="_blank">{MY_NAME}</a> with 💚 {new Date().getFullYear()}
</StyledFooter>);
