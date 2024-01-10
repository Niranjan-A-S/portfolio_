import { FC, memo } from 'react';
import { FooterGit } from './footer-git';
import { FooterInfo } from './footer-info';

export const Footer: FC = memo(() => (
    <footer className='footer flex-center'>
        <FooterGit />
        <FooterInfo />
    </footer>
));
