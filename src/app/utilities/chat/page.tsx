import React from 'react';
import ChatColorizer from '../../../components/ChatColorizer';

export default function Troop() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-4 lg:p-8">
            <div className="w-full p-8 rounded-lg shadow-md overflow-y-auto max-h-[80vh]">
                <h1 className="text-3xl font-bold mb-6 text-center">Chat Colorizer</h1>
                <ChatColorizer />
            </div>
        </main>
    );
}


