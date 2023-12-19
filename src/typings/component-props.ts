import { IconType } from 'react-icons';

export interface IParentProps {
    children: React.ReactNode;
}

export interface ITextWithIconProps {
    name: string;
    icon: IconType;
}

export interface INavbarItemProps extends ITextWithIconProps {
    path: string;
}
