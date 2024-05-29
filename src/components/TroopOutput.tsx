import React from 'react';

import { ReadableNumber } from './Number';

interface OutputValue {
    meat: number;
    wood: number;
    coal: number;
    iron: number;
    time: string;
};

interface TroopOutputProps {
    value: OutputValue;
}

const TroopRSSOutputTable: React.FC<TroopOutputProps> = ({ value }) => {
    return (
        <div className="flex flex-col">
            <h2 className="text-2xl font-bold">Output</h2>
            <div className="flex flex-col">
                <div className="flex justify-between">
                    <span>Meat:</span>
                    <ReadableNumber value={value.meat} />
                </div>
                <div className="flex justify-between">
                    <span>Wood:</span>
                    <ReadableNumber value={value.wood} />
                </div>
                <div className="flex justify-between">
                    <span>Coal:</span>
                    <ReadableNumber value={value.coal} />
                </div>
                <div className="flex justify-between">
                    <span>Iron:</span>
                    <ReadableNumber value={value.iron} />
                </div>
                <div className="flex justify-between">
                    <span>Time:</span>
                    <span>{value.time}</span>
                </div>
            </div>
        </div>
    );
};

export type { OutputValue };
export { TroopRSSOutputTable };
