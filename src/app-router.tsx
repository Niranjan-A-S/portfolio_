import { FC, createElement, memo, useCallback } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ROUTE_CONFIGURATIONS } from '../data/navbar';
import { IRouteOptions } from '../typings';

export const AppRouter: FC = memo(() => {

    const renderRoute = useCallback(({ path, page: Page, name }: IRouteOptions,) => (
        <Route key={name} path={path} element={createElement(Page)} />
    ), []);

    return (
        <BrowserRouter>
            <Routes>
                {ROUTE_CONFIGURATIONS.map(renderRoute)}
            </Routes>
        </BrowserRouter>
    )
})