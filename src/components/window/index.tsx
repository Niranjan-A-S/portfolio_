import { FC, memo, useEffect, useRef, useState } from 'react';
import { Content } from '../content';
import { Sidebar } from '../sidebar';

export const Window: FC = memo(() => {
    const elementRef = useRef<HTMLDivElement>(null);
    const [contentHeight, setContentHeight] = useState<number>(1);

    useEffect(() => {
        const updateContentHeight = () => {
            setContentHeight(elementRef.current?.scrollHeight || 1);
        };
        updateContentHeight();
        window.addEventListener('resize', updateContentHeight);
        return () => {
            window.removeEventListener('resize', updateContentHeight);
        };
    }, []);

    return (
        <div className='window'>
            <Sidebar contentHeight={contentHeight} />
            <Content ref={elementRef} />
        </div>
    );
});
