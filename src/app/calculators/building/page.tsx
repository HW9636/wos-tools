import React from 'react';
import BuildingCalculator from '../../../components/BuildingCalculator';

export default function Troop() {
    return (
        <main className="flex flex-col items-center justify-between p-4 lg:p-24">
            <div className="w-full max-w-2xl p-8 rounded-lg shadow-md">
                <h1 className="text-3xl font-bold mb-6 text-center">Building Calculator</h1>
                <BuildingCalculator />
            </div>
        </main>
    );
}

