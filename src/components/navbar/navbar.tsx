import { FC, memo } from 'react';
import { Logo } from './logo';
import styled from 'styled-components';
import { NavbarItems } from './navbar-items';

export const StyledNavbar = styled.nav`
    padding: 30px 30px;
    position: sticky;
    display: grid;
    justify-items: center;
    grid-template-columns: repeat(2,auto);
    align-items: center;
    width: 100%;
    transition: all 0.3s ease;
`;

export const Navbar: FC = memo(() => (
    <StyledNavbar>
    <Logo />
    <NavbarItems />
    </StyledNavbar>
));
