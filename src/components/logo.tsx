import { FC, memo } from 'react';
import styled from 'styled-components';
import { usePageRefresh } from '../hooks/use-page-refresh';
import { MY_NAME } from '../data/constants';

export const StyledLogo = styled.span`
    font-size: 34px;
    font-weight: 600;
    color: ${({ theme }) => theme.secondaryText};
    cursor: pointer;
`;

export const Logo: FC = memo(() => {

    const refreshPage = usePageRefresh();

    return <StyledLogo onClick={refreshPage}>{MY_NAME}</StyledLogo>;
});
