import { FC, memo, createElement } from 'react';
import { IGitStatusProps } from '../../types';

export const GitStatus: FC<IGitStatusProps> = memo(({ icon: Icon, value }) => (
    <div className="flex-center flex-4px footer-item">
        {createElement(Icon)}
        <span>{value}</span>
    </div>
));
