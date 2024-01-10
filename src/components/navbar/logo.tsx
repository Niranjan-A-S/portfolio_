import { FC, memo } from 'react';
import styled from 'styled-components';
import { usePageRefresh } from '../../hooks/use-page-refresh';
import { LOGO } from '../../data/constants';

export const StyledLogo = styled.span`
    font-size: 20px;
    font-weight: 700;
    cursor: pointer;
    z-index:1;
    unicode-bidi:bidi-override;
    direction:rtl;

    &::first-letter {
        color: ${({ theme }) => theme.focusedTextColor};
    }
`;

export const Logo: FC = memo(() => {
    const refreshPage = usePageRefresh();

    return <StyledLogo onClick={refreshPage}>{LOGO}</StyledLogo>;
});
