import React from 'react';

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="relative z-[-1] flex place-items-center mb-12">
                <h1 className="text-5xl font-bold">Whiteout Survival Tools</h1>
            </div>

            <div className="w-full max-w-5xl flex flex-col items-center space-y-8">
                <a
                    href="calculators/troop"
                    className="group w-full rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                    rel="noopener noreferrer"
                >
                    <h2 className="mb-3 text-2xl font-semibold">
                        Troop Calculator{" "}
                        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                            -&gt;
                        </span>
                    </h2>
                    <p className="m-0 max-w-[30ch] text-sm opacity-50">
                        Calculate troop training times and resource costs, including reductions and training ratios.
                    </p>
                </a>

                <a
                    href="calculators/building"
                    className="group w-full rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                    rel="noopener noreferrer"
                >
                    <h2 className="mb-3 text-2xl font-semibold">
                        Building Calculator{" "}
                        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                            -&gt;
                        </span>
                    </h2>
                    <p className="m-0 max-w-[30ch] text-sm opacity-50">
                        Calculate building upgrade times and resource costs, including fire crystals.
                    </p>
                </a>

                <a
                    href="/"
                    className="group w-full rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                    rel="noopener noreferrer"
                >
                    <h2 className="mb-3 text-2xl font-semibold">
                        Placeholder{" "}
                        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                            -&gt;
                        </span>
                    </h2>
                    <p className="m-0 max-w-[30ch] text-sm opacity-50">
                        Placeholder text for the third card.
                    </p>
                </a>

                <a
                    href="/"
                    className="group w-full rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                    rel="noopener noreferrer"
                >
                    <h2 className="mb-3 text-2xl font-semibold">
                        Placeholder{" "}
                        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                            -&gt;
                        </span>
                    </h2>
                    <p className="m-0 max-w-[30ch] text-sm opacity-50">
                        Placeholder text for the fourth card.
                    </p>
                </a>
            </div>
        </main>
    );
}

