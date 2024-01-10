import { FC, memo, useCallback } from 'react';
import styled from 'styled-components';
import { MY_NAME } from '../../data/constants';
import { ToggleButton } from '../ui/toggle-button';
import { IconLink } from '../ui/icon-link';
import { IIConLinkProps } from '../../typings/component-props';
import { FOOTER_LINKS } from '../../data/metadata';

export const StyledFooter = styled.footer`
    padding: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap:8px;
    z-index:1;


    & > span {
        color: ${({ theme }) => theme.focusedTextColor};
        font-weight: 500;
    }
    
    &> a:hover {
        text-decoration: underline;
    }
`;

export const LinksWrapper = styled.div`
    display: flex;
    justify-content: center;
    column-gap: 8px;
    font-size: 20px;

    &  * {
        fill: ${({ theme }) => (theme.primaryTextColor)};  
    }
`;

//TODO Remove this toggle button from footer
export const Footer: FC = memo(() => {

    const renderIconLink = useCallback(({ url, icon }: IIConLinkProps) => (
        <IconLink key={url} icon={icon} url={url} />
    ), []);

    return (
        <StyledFooter>
            <ToggleButton />
            ©   {new Date().getFullYear()}   <span>{MY_NAME}</span>
            <LinksWrapper>
                {FOOTER_LINKS.map(renderIconLink)}
            </LinksWrapper>
        </StyledFooter>
    );
});
