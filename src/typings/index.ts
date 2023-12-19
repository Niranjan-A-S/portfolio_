import { FunctionComponent } from 'react';

export interface IRouteOptions {
    name: string;
    path: string;
    page: FunctionComponent;
}
