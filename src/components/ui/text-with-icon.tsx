import { FC, createElement, memo } from 'react';
import styled from 'styled-components';
import { ITextWithIconProps } from '../../typings/component-props';

export const TextWithIconWrapper = styled.div<{ $isSelected?: boolean }>`
    display :grid;
    grid-template-columns :auto 1fr;
    column-gap: 6px;

    &:hover {
        &>*{
            color: ${({ theme }) => theme.focusedTextColor};
            fill: ${({ theme }) => theme.focusedTextColor};
            transition: color 0.3s ease;
        }
    }
    
    &>* {
        font-size: 16px;
        font-weight: 600;
        color: ${({ $isSelected, theme }) => ($isSelected ? theme.focusedTextColor : theme.primaryTextColor)};
        fill: ${({ $isSelected, theme }) => ($isSelected ? theme.focusedTextColor : theme.primaryTextColor)};
    }
`;

export const TextWithIcon: FC<ITextWithIconProps> = memo(({ icon, name, isActive }) => (
    <TextWithIconWrapper $isSelected={isActive}>
        {createElement(icon)}
        <span>{name}</span>
    </TextWithIconWrapper>
));
