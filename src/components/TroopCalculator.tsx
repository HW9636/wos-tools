'use client';

import React, { useState, useEffect } from 'react';
import { Pie } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    Title,
    Tooltip,
    Legend,
    ArcElement,
} from 'chart.js';

import { Troop, troopData, TroopLevel, TroopType } from '../utils/troop';
import { TroopLevelSelect, TroopInputSlider } from './TroopInput';
import { OutputValue, TroopRSSOutputTable } from './TroopOutput';

ChartJS.register(ArcElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

interface TroopTypes {
    infantry: number;
    lancer: number;
    marksman: number;
}

const TroopCalculator: React.FC = () => {
    const [inputValue, setInputValue] = useState<string>('');
    const [troopLevel, setTroopLevel] = useState<TroopLevel>(TroopLevel.T1);
    const [troopTypes, setTroopTypes] = useState<TroopTypes>({ infantry: 34, lancer: 33, marksman: 33 });

    const [outputValue, setOutputValue] = useState<OutputValue>({
        meat: 0,
        wood: 0,
        coal: 0,
        iron: 0,
        time: '0d 0h 0m',
    });

    useEffect(() => {
        recalculate();
    }, [inputValue, troopLevel]);

    const handleLevelChange = setTroopLevel;

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const amount = parseInt(event.target.value);
        setInputValue(event.target.value);
        if (isNaN(amount)) {
            setOutputValue({ meat: 0, wood: 0, coal: 0, iron: 0, time: '0d 0h 0m' });
            return;
        }

    };

    const recalculate = () => {
        const amount = parseInt(inputValue);
        if (isNaN(amount) || amount <= 0) {
            setOutputValue({ meat: 0, wood: 0, coal: 0, iron: 0, time: '0d 0h 0m' });
            return;
        }

        const troopsOpt = [
            troopData.find(t => t.level === troopLevel && t.type === TroopType.Infantry),
            troopData.find(t => t.level === troopLevel && t.type === TroopType.Lancer),
            troopData.find(t => t.level === troopLevel && t.type === TroopType.Marksman),
        ]

        if (troopsOpt.some(t => !t)) {
            setOutputValue({ meat: 0, wood: 0, coal: 0, iron: 0, time: '0d 0h 0m' });
            return;
        }
        const troops = troopsOpt as Troop[];

        const troopAmounts = [
            Math.ceil(amount * troopTypes.infantry / 100),
            Math.ceil(amount * troopTypes.lancer / 100),
            Math.ceil(amount * troopTypes.marksman / 100),
        ];

        const troop = troops.reduce((acc, troop, i) => {
            acc.cost.meat += troop.cost.meat * troopAmounts[i];
            acc.cost.wood += troop.cost.wood * troopAmounts[i];
            acc.cost.coal += troop.cost.coal * troopAmounts[i];
            acc.cost.iron += troop.cost.iron * troopAmounts[i];
            acc.time += troop.time * troopAmounts[i];
            return acc;
        }, { cost: { meat: 0, wood: 0, coal: 0, iron: 0 }, time: 0 });

        const minutes = Math.floor(troop.time / 60);
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);

        const timeString = `${days}d ${hours % 24}h ${minutes % 60}m`;

        setOutputValue({
            meat: troop.cost.meat,
            wood: troop.cost.wood,
            coal: troop.cost.coal,
            iron: troop.cost.iron,
            time: timeString,
        });
    }
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
            <TroopLevelSelect label="Troop Level" value={troopLevel} onChange={handleLevelChange} />
            <div className="flex justify-center">
                <TroopInputSlider label="Infantry" value={troopTypes.infantry} max={100 - troopTypes.lancer - troopTypes.marksman} onChange={value => setTroopTypes({ ...troopTypes, infantry: value })} />
                <TroopInputSlider label="Lancer" value={troopTypes.lancer} max={100 - troopTypes.infantry - troopTypes.marksman} onChange={value => setTroopTypes({ ...troopTypes, lancer: value })} />
                <TroopInputSlider label="Marksman" value={troopTypes.marksman} max={100 - troopTypes.infantry - troopTypes.lancer} onChange={value => setTroopTypes({ ...troopTypes, marksman: value })} />
            </div>

            <div className="flex flex-col">
                <TroopRSSOutputTable value={outputValue} />

                <h2 className="mt-8 text-4xl font-medium">Graphs:</h2>

                <div className="flex flex-col">
                    <label className="mt-2 font-medium">Resource Ratios:</label>
                    <Pie
                        data={{
                            labels: ['Meat', 'Wood', 'Coal', 'Iron'],
                            datasets: [
                                {
                                    data: [outputValue.meat, outputValue.wood, outputValue.coal, outputValue.iron],
                                    backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
                                },
                            ],
                        }}
                    />
                </div>

            </div>
        </div>
    );
};

export default TroopCalculator;


