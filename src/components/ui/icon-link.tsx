import { FC, createElement, memo } from 'react';
import { IIConLinkProps } from '../../typings/component-props';

export const IconLink: FC<IIConLinkProps> = memo(({ icon, url }) => (
    <a href={url} target="_blank">
        {createElement(icon)}
    </a>
));
