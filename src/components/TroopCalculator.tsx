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

import { troopData, TroopLevel, TroopType } from '../utils/troop';
import TroopInputSlider from './TroopInput';

ChartJS.register(ArcElement, CategoryScale, LinearScale, Title, Tooltip, Legend);


const TroopCalculator: React.FC = () => {
    const [inputValue, setInputValue] = useState<string>('');
    const [troopLevel, setTroopLevel] = useState<TroopLevel>(TroopLevel.T1);

    type OutputValue = {
        meat: number;
        wood: number;
        coal: number;
        iron: number;
        time: string;
    };
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

    const handleLevelChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setTroopLevel(event.target.value as TroopLevel);
    };

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

        const troop = troopData.find(t => t.level === troopLevel && t.type === TroopType.Infantry);
        if (!troop) {
            return;
        }

        const cost = troop.cost;
        const totalTime = troop.time * amount;
        const days = Math.floor(totalTime / 24);
        const hours = Math.floor(totalTime % 24);
        const minutes = Math.floor((totalTime % 1) * 60);
        const timeString = `${days}d ${hours}h ${minutes}m`;

        setOutputValue({
            meat: cost.meat * amount,
            wood: cost.wood * amount,
            coal: cost.coal * amount,
            iron: cost.iron * amount,
            time: timeString,
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
                <select value={troopLevel} onChange={handleLevelChange} className="p-2 border rounded bg-black">
                    <option value={TroopLevel.T1}>Tier 1</option>
                    <option value={TroopLevel.T2}>Tier 2</option>
                    <option value={TroopLevel.T3}>Tier 3</option>
                    <option value={TroopLevel.T4}>Tier 4</option>
                    <option value={TroopLevel.T5}>Tier 5</option>
                    <option value={TroopLevel.T6}>Tier 6</option>
                    <option value={TroopLevel.T7}>Tier 7</option>
                    <option value={TroopLevel.T8}>Tier 8</option>
                    <option value={TroopLevel.T9}>Tier 9</option>
                    <option value={TroopLevel.T10}>Tier 10</option>
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
                        <tr>
                            <td className="px-4 py-2 border">Time</td>
                            <td className="px-4 py-2 border">{outputValue.time}</td>
                        </tr>
                    </tbody>
                </table>

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
                        options={{
                            plugins: {
                                legend: {
                                    display: true,
                                    position: 'right',
                                },
                            },
                        }}
                    />
                </div>
                <div className="flex flex-col">
                    <label className="mt-2 font-medium">Troop Ratios:</label>
                </div>

            </div>
        </div>
    );
};

export default TroopCalculator;


