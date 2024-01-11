import { FC, memo, useMemo } from 'react';
import { Comma } from './comma';
import { Colon } from './colon';
import { IEntryProps } from '../../types';
import { isUrl } from '../../utils';

export const Entry: FC<IEntryProps> = memo(({ isArrayValue, isKey, children }) => {

    const content = useMemo(() => {
        if (isUrl(children)) {
            return (
                <a href={children} target="_blank" rel="noopener noreferrer" className="link">
                    {children}
                </a>
            );
        }
        return <span>{children}</span>;

    }, [children]);

    return (
        <span className={`entry ${isArrayValue ? 'array-value' : ''} ${isKey ? 'object-key' : ''}`}>
            "{content}"{!isKey ? <Comma /> : <Colon />}
        </span>
    );
});
