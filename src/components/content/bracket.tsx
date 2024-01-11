import { FC, memo } from 'react';
import { IBracketProps } from '../../types';

export const Bracket: FC<IBracketProps> = memo(({ isClosed, isSquare }) => (
    <span className='symbol-color'>
        {
            isClosed && isSquare ? ']' :
            isSquare ? '[' :
                isClosed ? '}' :
                        '{'
        }
    </span>
));
