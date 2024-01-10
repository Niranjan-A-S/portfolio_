import { FC, memo } from 'react';
import { Content } from '../content';
import { Sidebar } from '../sidebar';

export const Window: FC = memo(() => (
    <div className='window'>
        <Sidebar />
        <Content />
    </div>
));
