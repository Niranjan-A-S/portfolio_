import { FC, memo } from 'react';
import { IParentProps } from '../typings/component-props';
import { Navbar } from './navbar';
import { Footer } from './footer';
import styled from 'styled-components';

export const MainContainer = styled.div`
    display: grid;
    position: relative;
    grid-template-rows: auto 1fr auto;
    height: 100%;
`;

export const AppLayout: FC<IParentProps> = memo(({ children }) => (
    <MainContainer>
        <Navbar />
        {children}
        <Footer />
    </MainContainer>
));
