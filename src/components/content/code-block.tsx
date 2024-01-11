import { FC, memo, useCallback } from 'react';
import { ICodeBlock } from '../../types';
import { renderValue } from '../../utils';
import { Entry } from './entry';

export const CodeBlock: FC<ICodeBlock> = memo(({ callback, objectKey, value }) => {
    const renderEntry = useCallback(() => <>
        <Entry
            isKey
            children={objectKey}
        />
        {renderValue(value, callback)}
    </>, [callback, objectKey, value]);

    return (
        <div className='code-block'>
            {renderEntry()}
        </div>
    );
});

