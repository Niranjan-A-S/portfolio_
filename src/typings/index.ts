import { FunctionComponent } from 'react';

export interface IRouteOptions {
    name: string;
    path: string;
    page: FunctionComponent;
}

export interface INavbarItems extends Omit<IRouteOptions, 'page'> {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    icon: any;
}
