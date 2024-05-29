import React from 'react';
import TroopCalculator from '../../../components/TroopCalculator';

export default function Troop() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="w-full max-w-2xl p-8 rounded-lg shadow-md overflow-y-auto max-h-[80vh]">
                <h1 className="text-3xl font-bold mb-6 text-center">Troop Management</h1>
                <TroopCalculator />
            </div>
        </main>
    );
}

