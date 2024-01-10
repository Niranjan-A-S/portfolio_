import { FC, memo, useCallback } from 'react';

export const Sidebar: FC = memo(() => {
    const renderLineNumbers = useCallback(() => Array(50).fill(0).map((_, index) => <li key={index} className='line-number'>{index + 1}</li>), []);

    return (
        <div className='sidebar'>
            {renderLineNumbers()}
        </div>
    );
});
