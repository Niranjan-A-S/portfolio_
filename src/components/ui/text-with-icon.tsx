import { FC, createElement, memo } from 'react';
import styled from 'styled-components';
import { ITextWithIconProps } from '../../typings/component-props';

export const TextWithIconWrapper = styled.div`
    display :grid;
    grid-template-columns :auto 1fr;
    column-gap: 4px;

    &:hover {
        &>*{
            color: ${({ theme }) => theme.secondaryText};
            fill: ${({ theme }) => theme.secondaryText};
            transition: color 0.3s ease;
        }
    }
    
    &>span {
        font-size: 16px;
        font-weight: 600;
    }

`;

export const TextWithIcon: FC<ITextWithIconProps> = memo(({ icon, name }) => (
    <TextWithIconWrapper>
        {createElement(icon, {
        })}
        <span>{name}</span>
    </TextWithIconWrapper>
));
