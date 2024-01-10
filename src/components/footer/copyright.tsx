import { FC, memo } from 'react';
import { myName } from '../../constants';

export const FooterCopyright: FC = memo(() => (
    <span className='flex-center footer-item'>
        © {new Date().getFullYear()} {myName}
    </span>
));
