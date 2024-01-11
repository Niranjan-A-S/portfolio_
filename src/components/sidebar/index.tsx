import { FC, memo, useCallback } from 'react';

export const Sidebar: FC = memo(() => {
    //TODO: Need to generate the numbers dynamically
    const renderLineNumbers = useCallback(() => Array(130).fill(0).map((_, index) => <li key={index} className='line-number'>{index + 1}</li>), []);

    return (
        <div className='sidebar'>
            {renderLineNumbers()}
        </div>
    );
});
