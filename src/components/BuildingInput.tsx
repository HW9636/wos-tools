import React from 'react';

import { BuildingLevel } from '../utils/building';
import '../styles/troop.css';

interface BuildingLevelInputProps {
    label?: string;
    level: BuildingLevel;
    onChange: (level: number) => void;
    hasFC?: boolean;
    className?: string;
};

const BuildingLevelSelect: React.FC<BuildingLevelInputProps> = ({ label, level, onChange, className, hasFC}) => {
    const hasFcLevels = hasFC ?? true;

    return (<div className={`troop-level-select ${className ?? ''}`}>
        {label && <label htmlFor="troop-type" className="mb-2 font-medium">{label}</label>}
        <select value={level} onChange={e => onChange(parseInt(e.target.value))} className="p-2 border rounded dark:bg-black">
            {Array.from({ length: 30 }, (_, i) => i + 1).map((i) => <option key={i} value={i}>Lvl.{i}</option>)}
            {hasFcLevels && Array.from({ length: 4 }, (_, i) => i + 1).map((i) => <option key={i} value={i + 30}>{"Lvl. 30 - " + (i % 5)}</option>)}
            {hasFcLevels && Array.from({ length: 36 }, (_, i) => i).map((i) => <option key={i} value={i + 35}>FC {(Math.floor(i / 5) + 1) + (i % 5 == 0 ? '' : "-" + (i % 5))}</option>)}
        </select>
    </div>
    );
}

interface BuildingLevels {
    furnace: BuildingLevel;
    embassy: BuildingLevel;
    researchCenter: BuildingLevel;
    infantryCamp: BuildingLevel;
    lancerCamp: BuildingLevel;
    marksmanCamp: BuildingLevel;
    infirmary: BuildingLevel;
    commandCenter: BuildingLevel;
};

interface BuildingInputManagerProps {
    initialLevels: BuildingLevels;
    targetLevels: BuildingLevels;
    onInitialLevelsChange: (levels: BuildingLevels) => void;
    onTargetLevelsChange: (levels: BuildingLevels) => void;
};

const toLabel = (key: string) => {
    // Split in front of capital letters
    // Add space between each word
    let words = key.split(/(?=[A-Z])/);
    return words.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

const BuildingInputManager: React.FC<BuildingInputManagerProps> = ({ initialLevels, targetLevels, onInitialLevelsChange, onTargetLevelsChange }) => {
    // Loop through the keys of BuildingLevels
    return (
        <div className="flex flex-col pt-2">
            <div className="flex flex-col">
                <h2 className="text-2xl font-bold">Initial Levels</h2>
                {Object.keys(initialLevels).map((key) => {
                    const level = initialLevels[key as keyof BuildingLevels];
                        return <BuildingLevelSelect key={key} label={toLabel(key)} hasFC={key !== 'researchCenter'} level={level} onChange={(level) => onInitialLevelsChange({ ...initialLevels, [key]: level })} />
                })}
                <BuildingLevelSelect label="All" level={1} onChange={(level) => onInitialLevelsChange({ furnace: level, embassy: level, researchCenter: Math.min(30, level), infantryCamp: level, lancerCamp: level, marksmanCamp: level, infirmary: level, commandCenter: level })} />
            </div>

            <div className="flex flex-col pt-2">
                <h2 className="text-2xl font-bold">Target Levels</h2>
                {Object.keys(targetLevels).map((key) => {
                    const level = targetLevels[key as keyof BuildingLevels];
                    return <BuildingLevelSelect key={key} label={toLabel(key)} hasFC={key !== 'researchCenter'} level={level} onChange={(level) => onTargetLevelsChange({ ...targetLevels, [key]: level })} />
                })}
                <BuildingLevelSelect label="All" level={30} onChange={(level) => onTargetLevelsChange({ furnace: level, embassy: level, researchCenter: Math.min(30, level), infantryCamp: level, lancerCamp: level, marksmanCamp: level, infirmary: level, commandCenter: level })} />
            </div>
        </div>
    );
}

interface BuildingReductionInputProps {
    rss_reduction: string;
    time_reduction: string;
    onRssReductionChange: (value: string) => void;
    onTimeReductionChange: (value: string) => void;
}

const BuildingReductionInput: React.FC<BuildingReductionInputProps> = ({ rss_reduction, time_reduction, onRssReductionChange, onTimeReductionChange }) => {
    return (
        <div className="flex flex-col pt-2">
            <div className="flex flex-col">
                <h2 className="text-2xl font-bold">Reduction</h2>
                <div className="flex flex-col">
                    <label htmlFor="rss_reduction" className="mb-2 font-medium">RSS Reduction:</label>
                    <input type="text" value={rss_reduction} onChange={e => onRssReductionChange(e.target.value)} className="p-2 border rounded dark:bg-black" />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="time_reduction" className="mb-2 font-medium">Time Reduction:</label>
                    <input type="text" value={time_reduction} onChange={e => onTimeReductionChange(e.target.value)} className="p-2 border rounded dark:bg-black" />
                </div>
            </div>
        </div>
    );
}

export type { BuildingLevels };
export { BuildingLevelSelect, BuildingInputManager, BuildingReductionInput };
