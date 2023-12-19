import { FC, memo } from 'react';
import { Link } from 'react-router-dom';
import { INavbarItemProps } from '../../typings/component-props';
import { TextWithIcon } from '../ui/text-with-icon';

export const NavbarItem: FC<INavbarItemProps> = memo(({ icon, name, path }) => (
    <Link to={path}>
        <TextWithIcon name={name} icon={icon} />
    </Link>
));
