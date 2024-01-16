/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC, forwardRef, memo, useCallback } from 'react';
import details from '../../config/details.json';
import { Bracket } from './bracket';
import { CodeBlock } from './code-block';

export const Content: FC<any> = memo(forwardRef<HTMLDivElement, any>((_, ref) => {
    const renderCodeBlock = useCallback((details: any) => Object.entries(details).map(([key, value]) => (
        <CodeBlock
            key={key}
            objectKey={key}
            value={value}
            callback={renderCodeBlock} />
    )), []);

    return <div className='content' ref={ref} spellCheck={false}>
        <Bracket />
        {renderCodeBlock(details)}
        <Bracket isClosed />
    </div>;
}));
