import { FC, memo, useCallback } from 'react';
import { BiFullscreen } from 'react-icons/bi';
import { SOCIAL_ACCOUNTS } from '../../constants';
import { useFullscreen } from '../../hooks/use-full-screen';
import { FooterCopyright } from './copyright';
import { IconLink } from './icon-link';

export const FooterInfo: FC = memo(() => {
    const { toggleFullScreen } = useFullscreen();

    const onClick = useCallback(() => {
        toggleFullScreen(document.body);
    }, [toggleFullScreen]);

    const renderIconLinks = useCallback(() => SOCIAL_ACCOUNTS.map(({ url, icon: Icon, name }) =>
        <IconLink
            key={name}
            url={url}
            icon={Icon}
            name={name} />
    ), []);

    return (
        <section className="flex-center">
            <FooterCopyright />
            {renderIconLinks()}
            <BiFullscreen onClick={onClick} className="footer-item fullscreen" />
        </section>
    );
});
