import React from 'react';

import { ReadableNumber } from './Number';
import { Pie } from 'react-chartjs-2';
import "../utils/chartConfig";

interface OutputValue {
    meat: number;
    wood: number;
    coal: number;
    iron: number;
    fire_crystal: number;
    refined_fire_crystal: number;
    rawTime: string;
    time: string;
};

interface BuildingOutputProps {
    value: OutputValue;
}

const BuildingRSSOutputTable: React.FC<BuildingOutputProps> = ({ value }) => {
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
                    <span>Fire Crystal:</span>
                    <ReadableNumber value={value.fire_crystal} />
                </div>
                <div className="flex justify-between">
                    <span>Refined Fire Crystal:</span>
                    <ReadableNumber value={value.refined_fire_crystal} />
                </div>
                <div className="flex justify-between">
                    <span>Time (raw):</span>
                    <span>{value.rawTime}</span>
                </div>
                <div className="flex justify-between">
                    <span>Time:</span>
                    <span>{value.time}</span>
                </div>
            </div>
        </div>
    );
};

interface BuildingOutputGraphsProps {
    value: OutputValue;
}

const BuildingOutputGraphs: React.FC<BuildingOutputGraphsProps> = ({ value }) => {
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
export { BuildingRSSOutputTable, BuildingOutputGraphs };

