import { FC, memo, useCallback } from 'react';
import { FiMenu } from 'react-icons/fi';
import styled, { css } from 'styled-components';
import { NAVBAR_ITEMS } from '../../data/metadata';
import { useNavbarMenu } from '../../hooks/use-navbar-menu';
import { INavbarItems } from '../../typings';
import { NavbarItem } from './navbar-item';
import { useLocation } from 'react-router-dom';

const defaultStyles = css`
    display: grid;
    column-gap: 24px;
    grid-template-columns: repeat(6,auto);

    @media screen and (max-width: 860px) {
        display: none;
    }
`;
const mobileMenuStyles = css`
    display: grid;
    position: absolute;
    inset: 0;
    height: 100vh;
    justify-content: center;
    align-content: center;
    align-items: start;
    row-gap: 50px;
    animation: moveFromLeft 0.5s ease;

    &> a >div > * {
        font-size: 28px;
    }

    @media screen and (min-width: 860px) {
        display: none;
    }

    //TODO:Improvise this animation
    @keyframes moveFromLeft {
        from {
            transform: translateX(-100%);
        }
        0% {
            opacity: 0;
        }
        to {
            transform: translateX(0);
        }
        50% {
            opacity: 0.5;
        }
        100% {
            opacity: 1;
        }
    }
`;

export const NavbarItemsWrapper = styled.div<{ $isMobileMenu: boolean }>`
    ${({ $isMobileMenu }) => ($isMobileMenu ? mobileMenuStyles : defaultStyles)}
`;

const StyledFiMenu = styled(FiMenu)`
    display: block;
    cursor: pointer;
    z-index: 1;
    @media screen and (min-width: 860px) {
        display: none;
        position: absolute;
        top: 34px;
        right: 34px;
    }
`;

export const NavbarItems: FC = memo(() => {

    const { isMobileMenu, toggleNavbar, hideNavbar } = useNavbarMenu();

    const { pathname } = useLocation();
    const renderNavbarItem = useCallback(({ icon, name, path }: INavbarItems) => (
        <NavbarItem
            path={path}
            name={name}
            icon={icon}
            key={name}
            onClick={hideNavbar}
            isActive={path === pathname}
        />
    ), [hideNavbar, pathname]);

    return (
        <>
            <StyledFiMenu size={30} onClick={toggleNavbar} />
            <NavbarItemsWrapper $isMobileMenu={isMobileMenu} >
                {NAVBAR_ITEMS.map(renderNavbarItem)}
            </NavbarItemsWrapper>
        </>
    );
});
