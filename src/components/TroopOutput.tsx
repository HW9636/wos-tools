import React from 'react';

import { ReadableNumber } from './Number';
import { Pie } from 'react-chartjs-2';
import "../utils/chartConfig";
import { TroopLevel, getTroopPower } from '../utils/troop';

interface OutputValue {
    meat: number;
    wood: number;
    coal: number;
    iron: number;
    rawTime: string;
    time: string;
    power: number;
    infantry: number;
    lancer: number;
    marksman: number;
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
                    <span>Time (raw):</span>
                    <span>{value.rawTime}</span>
                </div>
                <div className="flex justify-between">
                    <span>Time:</span>
                    <span>{value.time}</span>
                </div>
                <div className="flex justify-between">
                    <span>Infantry:</span>
                    <ReadableNumber value={value.infantry} />
                </div>
                <div className="flex justify-between">
                    <span>Lancer:</span>
                    <ReadableNumber value={value.lancer} />
                </div>
                <div className="flex justify-between">
                    <span>Marksman:</span>
                    <ReadableNumber value={value.marksman} />
                </div>
                <div className="flex justify-between">
                    <span>Power:</span>
                    <ReadableNumber value={value.power} />
                </div>
            </div>
        </div>
    );
};

interface TroopOutputGraphsProps {
    value: OutputValue;
}

const TroopOutputGraphs: React.FC<TroopOutputGraphsProps> = ({ value }) => {
    const renderGraphs = () => {
        if (value.meat === 0 && value.wood === 0 && value.coal === 0 && value.iron === 0) {
            return <div className="text-center">No data to display</div>;
        }

        const pieChartOptions = {
            responsive: true,
            plugins: {
                datalabels: {
                    formatter: (val: number, ctx: any) => {
                        const total = ctx.dataset.data.reduce((acc: number, data: number) => acc + data, 0);
                        return ctx.chart.data.labels[ctx.dataIndex] + '\n' + (val / total * 100).toFixed(2) + '%';
                    },
                    color: '#fff',
                },
                legend: {
                    display: false,
                },
            },
        };

        return (<div className="flex flex-col">
                <label className="mt-2 font-medium">Resource Ratios:</label>
                <Pie
                    data={{
                        labels: ['Meat', 'Wood', 'Coal', 'Iron'],
                        datasets: [
                            {
                                data: [value.meat, value.wood, value.coal, value.iron],
                                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
                            },
                        ],
                    }}
                    options={pieChartOptions}
                />
                <label className="mt-2 font-medium">Troop Ratios:</label>
                <Pie
                    data={{
                        labels: ['Infantry', 'Lancer', 'Marksman'],
                        datasets: [
                            {
                                data: [value.infantry, value.lancer, value.marksman],
                                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
                            },
                        ],
                    }}
                    options={pieChartOptions}
                />
            </div>);
    }

    return (
        <div className="flex flex-col">
            <h2 className="mt-8 text-4xl font-medium">Graphs:</h2>
            {renderGraphs()}
        </div>
    );
}

export type { OutputValue };
export { TroopRSSOutputTable, TroopOutputGraphs };
