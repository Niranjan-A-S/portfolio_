import { FC, memo } from 'react';
import { Logo } from './logo';
import styled from 'styled-components';
import { NavbarItems } from './navbar-items';

export const StyledNavbar = styled.nav`
    padding: 30px 0;
    position: fixed;
    display: grid;
`;

export const Navbar: FC = memo(() => <StyledNavbar>
    <Logo />
    <NavbarItems />
</StyledNavbar>);
