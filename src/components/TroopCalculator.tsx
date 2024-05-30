'use client';

import React, { useState, useEffect } from 'react';
import { Troop, TroopRatios, troopData, TroopLevel, TroopType, calculateTroopDifference, getTroopsForLevel, TroopCalculatorHelper } from '../utils/troop';
import { TroopLevelManager, TroopLevelInfo, TroopLevelSelect, TroopInputSlider, InputManager, InputType } from './TroopInput';
import { OutputValue, TroopRSSOutputTable, TroopOutputGraphs } from './TroopOutput';
import { parseReadableNumber } from './Number';

const TroopCalculator: React.FC = () => {
    const [inputValue, setInputValue] = useState<string>('');
    const [inputInfo, setTroopLevel] = useState<TroopLevelInfo>({ troopLevel: TroopLevel.T1, upgradeLevel: [] });
    const [troopRatios, setTroopTypes] = useState<TroopRatios>({ infantry: 34, lancer: 33, marksman: 33 });
    const [inputType, setInputType] = useState<InputType>(InputType.TroopAmount);

    const [outputValue, setOutputValue] = useState<OutputValue>({
        meat: 0,
        wood: 0,
        coal: 0,
        iron: 0,
        time: '0d 0h 0m',
        infantry: 0,
        lancer: 0,
        marksman: 0,
    });

    useEffect(() => {
        const upgradeLevels = inputInfo.upgradeLevel.map(upgrade => ({...upgrade}));
        const calculator = new TroopCalculatorHelper(inputInfo.troopLevel, upgradeLevels);
        switch (inputType) {
            case InputType.TroopAmount:
                calculator.TargetAmount(parseReadableNumber(inputValue), troopRatios)
                break;    
            case InputType.HoCPoints:
                calculator.TargetHoCPoints(parseReadableNumber(inputValue), troopRatios)
                break;
            case InputType.UpgradeAll:
                calculator.UpgradeAll()
                break;
        };

        setOutputValue(calculator.toOutput());
    }, [inputValue, inputInfo, troopRatios, inputType]);

    const handleLevelChange = (level: TroopLevelInfo) => {
        setTroopLevel(level);
    }
    const handleInputChange = (type: InputType, value: string) => {
        setInputType(type);
        setInputValue(value);
    }

    return (
        <div className="space-y-4">
            <InputManager type={inputType} value={inputValue} onChange={handleInputChange} />
            <TroopLevelManager info={inputInfo} onChange={handleLevelChange} />
            {inputType !== InputType.UpgradeAll &&
            <div className="flex justify-center flex-col lg:flex-row">
                <TroopInputSlider label="Infantry" value={troopRatios.infantry} max={100 - troopRatios.lancer - troopRatios.marksman} onChange={value => setTroopTypes({ ...troopRatios, infantry: value })} />
                <TroopInputSlider label="Lancer" value={troopRatios.lancer} max={100 - troopRatios.infantry - troopRatios.marksman} onChange={value => setTroopTypes({ ...troopRatios, lancer: value })} />
                <TroopInputSlider label="Marksman" value={troopRatios.marksman} max={100 - troopRatios.infantry - troopRatios.lancer} onChange={value => setTroopTypes({ ...troopRatios, marksman: value })} />
            </div>
            }

            <TroopRSSOutputTable value={outputValue} />
            <TroopOutputGraphs value={outputValue} />
        </div>
    );
};

export default TroopCalculator;


