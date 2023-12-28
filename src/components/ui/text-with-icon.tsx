import { FC, createElement, memo } from 'react';
import styled from 'styled-components';
import { ITextWithIconProps } from '../../typings/component-props';

export const TextWithIconWrapper = styled.div<{ isSelected?: boolean }>`
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
    
    &>* {
        font-size: 16px;
        font-weight: 600;
        color: ${({ isSelected, theme }) => (isSelected ? theme.secondaryText : theme.primaryText)};
        fill: ${({ isSelected, theme }) => (isSelected ? theme.secondaryText : theme.primaryText)};
    }
`;

export const TextWithIcon: FC<ITextWithIconProps> = memo(({ icon, name, isActive }) => (
    <TextWithIconWrapper isSelected={isActive}>
        {createElement(icon)}
        <span>{name}</span>
    </TextWithIconWrapper>
));
