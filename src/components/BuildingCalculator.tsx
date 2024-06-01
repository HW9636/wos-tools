'use client'

import React, { useState, useEffect, ChangeEvent } from 'react';
import { BuildingInputManager, BuildingLevels, BuildingReductionInput } from './BuildingInput';
import { OutputValue, BuildingRSSOutputTable, BuildingOutputGraphs } from './BuildingOutput';
import { BuildingCalculatorHelper } from '@/utils/building';

const BuildingCalculator: React.FC = () => {
    const [initialLevels, setInitialLevels] = useState<BuildingLevels>({
        furnace: 1,
        embassy: 1,
        researchCenter: 1,
        infantryCamp: 1,
        lancerCamp: 1,
        marksmanCamp: 1,
        infirmary: 1,
        commandCenter: 1,
    });
    const [targetLevels, setTargetLevels] = useState<BuildingLevels>({
        furnace: 30,
        embassy: 30,
        researchCenter: 30,
        infantryCamp: 30,
        lancerCamp: 30,
        marksmanCamp: 30,
        infirmary: 30,
        commandCenter: 30,
    });
    const [rssReduction, setRssReduction] = useState<string>('0%');
    const [timeReduction, setTimeReduction] = useState<string>('0%');
    const [outputValue, setOutputValue] = useState<OutputValue>({
        meat: 0,
        wood: 0,
        coal: 0,
        iron: 0,
        fire_crystal: 0,
        refined_fire_crystal: 0,
        rawTime: '0d 0h 0m',
        time: '0d 0h 0m',
    });

    useEffect(() => {
        let rssReductionValue = rssReduction;
        let timeReductionValue = timeReduction;
        if (rssReduction.endsWith('%'))
            rssReductionValue = rssReduction.slice(0, -1);
        if (timeReduction.endsWith('%'))
            timeReductionValue = timeReduction.slice(0, -1);

        let timeReductionN = (parseFloat(timeReductionValue) || 0) / 100;
        let rssReductionN = (parseFloat(rssReductionValue) || 0) / 100;

        let calculator = new BuildingCalculatorHelper(initialLevels, targetLevels, rssReductionN, timeReductionN);
        calculator.calculate();
        setOutputValue(calculator.toOutput());
    }, [initialLevels, targetLevels, rssReduction, timeReduction]);

    return (
        <div className="flex flex-col">
            <div className="flex flex-col">
                <BuildingInputManager initialLevels={initialLevels} targetLevels={targetLevels} onInitialLevelsChange={setInitialLevels} onTargetLevelsChange={setTargetLevels} />
                <BuildingReductionInput rss_reduction={rssReduction} time_reduction={timeReduction} onRssReductionChange={setRssReduction} onTimeReductionChange={setTimeReduction} />
            </div>

            <div className="flex flex-col">
                <BuildingRSSOutputTable value={outputValue} />
                <BuildingOutputGraphs value={outputValue} />
            </div>
        </div>
    );
}

export default BuildingCalculator;
