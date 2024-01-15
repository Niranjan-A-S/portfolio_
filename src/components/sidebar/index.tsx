import { FC, memo, useCallback, useMemo } from 'react';

export interface ISidebarProps {
    contentHeight: number;
}

export const Sidebar: FC<ISidebarProps> = memo(({ contentHeight }) => {
    const numberOfLines = useMemo(() => Math.floor(contentHeight / 25), [contentHeight]);
    const renderLineNumbers = useCallback(() => Array(numberOfLines).fill(0).map((_, index) => <li key={index} className='line-number'>{index + 1}</li>), [numberOfLines]);

    return (
        <div className='sidebar'>
            {renderLineNumbers()}
        </div>
    );
});
