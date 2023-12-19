import { FC, memo, useCallback } from 'react';
import styled from 'styled-components';
import { NAVBAR_ITEMS } from '../../data/metadata';
import { INavbarItems } from '../../typings';
import { NavbarItem } from './navbar-item';

export const NavbarItemsWrapper = styled.div`
    display: flex;
    column-gap: 24px;
`;

export const NavbarItems: FC = memo(() => {

    const renderNavbarItem = useCallback(({ icon, name, path }: INavbarItems) => <NavbarItem path={path} name={name} icon={icon} key={name} />, []);

    return (<NavbarItemsWrapper>
        {NAVBAR_ITEMS.map(renderNavbarItem)}
    </NavbarItemsWrapper>);
});
