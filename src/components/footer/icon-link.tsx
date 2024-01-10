import { FC, createElement, memo } from 'react';
import { IFooterLinkProps } from '../../types';

export const IconLink: FC<IFooterLinkProps> = memo(({ url, icon: Icon, name }) => (
    <a
        href={url}
        target="_blank"
        rel="noreferrer"
        className="flex-center flex-4px footer-item"
    >
        {createElement(Icon)}
        <span>{name}</span>
    </a>
));
