import { ReactNode } from 'react';

/* eslint-disable @typescript-eslint/no-explicit-any */
export interface IGitStatusProps {
    icon: React.ElementType;
    value: number;
}

export interface IFooterLinkProps {
    url: string;
    icon: React.ElementType;
    name: string;
}

export interface IFooterData {
    branch: string;
    forks: number;
    stars: number;
    watchers: number;
}

export interface IBracketProps {
    isClosed?: boolean;
    isSquare?: boolean;
}

export interface IEntryProps {
    isKey?: boolean;
    isArrayValue?: boolean;
    children: string
}

export type Callback = (item: any) => ReactNode;

export interface ICodeBlock {
    objectKey: string;
    value: any;
    callback: Callback;
}
