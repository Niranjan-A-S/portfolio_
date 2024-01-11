/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC, memo, useCallback } from 'react';
import details from '../../details.json';
import { Bracket } from './bracket';
import { CodeBlock } from './code-block';

export const Content: FC = memo(() => {

    const renderCodeBlock = useCallback((details: any) => Object.entries(details).map(([key, value]) => (
        <CodeBlock
            key={key}
            objectKey={key}
            value={value}
            callback={renderCodeBlock} />
    )), []);

    return <main className='content'>
        <Bracket />
        {renderCodeBlock(details)}
        <Bracket isClosed />
    </main>;
});
