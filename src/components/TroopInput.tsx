'use client';

import React, { useState } from 'react';

type TroopCost = {
    meat: number;
    wood: number;
    coal: number; 
    iron: number;
}

enum TroopLevel {
    T1 = 't1',
    T2 = 't2',
    T3 = 't3',
    T4 = 't4',
    T5 = 't5',
    T6 = 't6',
    T7 = 't7',
    T8 = 't8',
    T9 = 't9',
    T10 = 't10',
}

enum TroopType {
    Infantry = 'infantry',
    Lancer = 'lancer',
    Marksman = 'marksman',
}

type Troop = {
    level: TroopLevel;
    type: TroopType;
    cost: TroopCost;
}

const troopData: Troop[] = [
    {
        level: TroopLevel.T10,
        type: TroopType.Infantry,
        cost: {
            meat: 2788,
            wood: 2091,
            coal: 488,
            iron: 102,
        }
    }
];

const InputForm: React.FC = () => {
    const [inputValue, setInputValue] = useState('');
    const [troopLevel, setTroopLevel] = useState('');
    type OutputValue = {
        meat: number;
        wood: number;
        coal: number;
        iron: number;
    };
    const [outputValue, setOutputValue] = useState<OutputValue>({ meat: 0, wood: 0, coal: 0, iron: 0 });

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    
        let troop = troopData.find(troop => troop.level === TroopLevel.T10 && troop.type === TroopType.Infantry);
        if (!troop) {
            return;
        }

        const amount = parseInt(event.target.value);
        const cost = troop.cost;

        setOutputValue({
            meat: cost.meat * amount,
            wood: cost.wood * amount,
            coal: cost.coal * amount,
            iron: cost.iron * amount,
        });
    };

    return (
        <div className="space-y-4">
            <div className="flex flex-col">
                <label htmlFor="troop-input" className="mb-2 font-medium">Troop Input:</label>
                <input
                    id="troop-input"
                    type="number"
                    value={inputValue}
                    onChange={handleInputChange}
                    className="p-2 border rounded bg-black"
                    placeholder="Enter number of troops to train"
                />
            </div>
            <div className="flex flex-col">
                <label htmlFor="troop-type" className="mb-2 font-medium">Troop Type:</label>
                <select value={troopLevel} onChange={(event) => setTroopLevel(event.target.value)} className="p-2 border rounded bg-black">
                    <option value="t10">Tier 10</option>
                </select>
            </div>
            <div className="flex flex-col">
                <label className="mb-2 font-medium">Data Table:</label>
                <table className="min-w-full border border-gray-200">
                    <thead className="bg-gray-600">
                        <tr>
                            <th className="px-4 py-2 border"></th>
                            <th className="px-4 py-2 border">Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="px-4 py-2 border">Meat</td>
                            <td className="px-4 py-2 border">{outputValue.meat}</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 border">Wood</td>
                            <td className="px-4 py-2 border">{outputValue.wood}</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 border">Coal</td>
                            <td className="px-4 py-2 border">{outputValue.coal}</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 border">Iron</td>
                            <td className="px-4 py-2 border">{outputValue.iron}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default InputForm;

