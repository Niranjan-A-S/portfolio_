import { FunctionComponent } from 'react';
import { IconType } from 'react-icons';

export interface IRouteOptions {
    name: string;
    path: string;
    page: FunctionComponent;
}

export interface INavbarItems extends Omit<IRouteOptions, 'page'> {
    icon: IconType;
}
