import { IconType } from 'react-icons';

export interface IParentProps {
    children: React.ReactNode;
}

export interface ITextWithIconProps {
    name: string;
    icon: IconType;
    isActive?: boolean;
}

export interface INavbarItemProps extends ITextWithIconProps {
    path: string;
    isActive: boolean;
    onClick?: () => void;
}
