import { FC, memo } from 'react';
import { Comma } from './comma';
import { Colon } from './colon';
import { IEntryProps } from '../../types';

export const Entry: FC<IEntryProps> = memo(({ isArrayValue, isKey, children }) =>
    <span
        className={`entry ${isArrayValue ? 'array-value' : ''} ${isKey ? 'object-key' : ''}`}>
        "{children}"{!isKey ? <Comma /> : <Colon />}
    </span>
);
