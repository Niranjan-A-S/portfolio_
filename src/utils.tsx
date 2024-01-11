/* eslint-disable @typescript-eslint/no-explicit-any */

import { Bracket } from './components/content/bracket';
import { Comma } from './components/content/comma';
import { Entry } from './components/content/entry';
import { Callback } from './types';


export function renderValue(item: any, callback: Callback) {
    if (typeof item === 'string') return renderStringValue(item);
    else if (Array.isArray(item)) return renderArrayValue(item, callback);
    else if (typeof item === 'object') return renderObjectValue(item, callback);
}

export function renderStringValue(item: any) {
    return <Entry children={item} />;
}

export function renderArrayValue(item: any, callback: Callback) {
    const renderItem = (value: any) => {
        if (typeof value === 'string') {
            return <Entry
                key={value}
                isArrayValue
                children={value} />;
        }
        return renderValue(value, callback);
    };

    return (
        <>
            <Bracket isSquare />
            {item.map(renderItem)}
            <Bracket isSquare isClosed />
            <Comma />
        </>);
}

export function renderObjectValue(item: any, cb: Callback) {
    return <>
        <Bracket />
        {cb(item)}
        <Bracket isClosed />
        <Comma />
    </>;
}


export const isUrl = (value: string) => {
    try {
        new URL(value);
        return true;
    } catch (error) {
        return false;
    }
};

