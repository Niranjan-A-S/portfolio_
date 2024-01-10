import { FC, memo, useCallback, useMemo } from 'react';
import { IoIosGitBranch } from 'react-icons/io';
import { useFooterData } from '../../hooks/use-footer-data';
import { GitStatus } from './git-status';
import { IconLink } from './icon-link';
import { gitIcons } from '../../constants';

export const FooterGit: FC = memo(() => {
    const { branch, forks, stars, watchers } = useFooterData();
    const tempArray = useMemo(() => [watchers, forks, stars], [forks, stars, watchers]);

    const renderGitStatuses = useCallback(() => gitIcons.map((Icon, index) =>
        <GitStatus
            key={index}
            icon={Icon}
            value={tempArray[index]}
        />
    ), [tempArray]);

    return (
        <section className="flex-center">
            <IconLink url="https://github.com/Niranjan-A-S/portfolio_" icon={IoIosGitBranch} name={branch} />
            {renderGitStatuses()}
        </section>
    );
});
