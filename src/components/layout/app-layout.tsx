import { FC, memo } from 'react';
import { Footer } from '../footer';
import { Window } from '../window';

export const AppLayout: FC = memo(() => <div className='app'>
    <Window />
    <Footer />
</div>);
