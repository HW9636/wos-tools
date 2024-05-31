import React from 'react';

import { TroopLevel } from '../utils/troop';
import "../styles/troop.css";

interface TroopLevelProps {
    label: string | undefined;
    value: TroopLevel;
    onChange: (value: TroopLevel) => void;
    className?: string;
}

interface TroopInputProps {
    label: string;
    value: number;
    max: number;
    onChange: (value: number) => void;
}

const TroopLevelSelect: React.FC<TroopLevelProps> = ({ label, value, onChange, className }) => {
    return (<div className={`troop-level-select ${className}`}>
        {label && <label htmlFor="troop-type" className="mb-2 font-medium">{label}</label>}
        <select value={value} onChange={e => onChange(e.target.value as TroopLevel)} className="p-2 border rounded dark:bg-black">
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
    );
}

interface TroopUpgrade {
    from: TroopLevel;
    maxInfantry: string;
    maxLancer: string;
    maxMarksman: string;
}

interface TroopLevelInfo {
    troopLevel: TroopLevel;
    upgradeLevel: TroopUpgrade[];
}

interface TroopLevelManagerProps {
    info: TroopLevelInfo;
    onChange: (info: TroopLevelInfo) => void;
}
const TroopLevelManager: React.FC<TroopLevelManagerProps> = ({ info, onChange }) => {
    const addUpgrade = () => {
        const newUpgrade = [...info.upgradeLevel, { from: TroopLevel.T1, maxInfantry: '0', maxLancer: '0', maxMarksman: '0' }];
        onChange({ ...info, upgradeLevel: newUpgrade });
    };

    const removeUpgrade = (index: number) => {
        const newUpgrade = info.upgradeLevel.filter((_, i) => i !== index);
        if (newUpgrade.length === 0) {
            onChange({ ...info, upgradeLevel: newUpgrade });
            return;
        }
        onChange({ ...info, upgradeLevel: newUpgrade });
    }

    const handleUpgradeLevelLevelChange = (index: number, value: TroopLevel) => {
        const newUpgrade = info.upgradeLevel.map((upgrade, i) => {
            if (i !== index) return { ...upgrade };
            return { ...upgrade, from: value };
        });
        onChange({ ...info, upgradeLevel: newUpgrade });
    }
    const handleUpgradeLevelChangeInfantry = (index: number, value: string) => {
        const newUpgrade = info.upgradeLevel.map((upgrade, i) => {
            if (i !== index) return { ...upgrade };
            return { ...upgrade, maxInfantry: value };
        });
        onChange({ ...info, upgradeLevel: newUpgrade });
    };
    const handleUpgradeLevelChangeLancer = (index: number, value: string) => {
        const newUpgrade = info.upgradeLevel.map((upgrade, i) => {
            if (i !== index) return { ...upgrade };
            return { ...upgrade, maxLancer: value };
        });
        onChange({ ...info, upgradeLevel: newUpgrade });
    };
    const handleUpgradeLevelChangeMarksman = (index: number, value: string) => {
        const newUpgrade = info.upgradeLevel.map((upgrade, i) => {
            if (i !== index) return { ...upgrade };
            return { ...upgrade, maxMarksman: value };
        });

        onChange({ ...info, upgradeLevel: newUpgrade });
    };

    return (
        <div className="flex flex-col">
            <TroopLevelSelect
                label="Target Troop Level:"
                value={info.troopLevel}
                onChange={value => onChange({ ...info, troopLevel: value })}
                className="mb-4"
            />
            {info.upgradeLevel.length !== 0 &&
                <div className="upgrade-levels">
                    <h2 className="text-xl">Upgrade Levels:</h2>
                    {info.upgradeLevel.map((upgrade, index) => (
                        <div key={index} className="upgrade-item bg-gray-300 dark:bg-gray-800 rounded p-2">
                            <span className="cursor-pointer justify-self-start font-bold bg-red-600 p-2 text-white rounded" onClick={() => removeUpgrade(index)}>Remove</span>
                            <div /> {/* Spacer */}
                            <label htmlFor="upgrade-from" className="font-medium text-center content-center">Upgrade From:</label>
                            <TroopLevelSelect
                                key={index}
                                label={undefined}
                                value={upgrade.from}
                                onChange={value => handleUpgradeLevelLevelChange(index, value)}
                                className="ml-2 mb-2 flex-grow flex flex-col"
                            />
                            <label htmlFor="upgrade-max" className="font-medium text-center content-center">Infantry:</label>
                            <input
                                type="text"
                                className="p-2 border rounded dark:bg-black xs:w-full"
                                value={upgrade.maxInfantry}
                                onChange={e => handleUpgradeLevelChangeInfantry(index, e.target.value)}
                            />
                            <label htmlFor="upgrade-max" className="font-medium text-center content-center">Lancer:</label>
                            <input
                                type="text"
                                className="p-2 border rounded dark:bg-black xs:w-full"
                                value={upgrade.maxLancer}
                                onChange={e => handleUpgradeLevelChangeLancer(index, e.target.value)}
                            />
                            <label htmlFor="upgrade-max" className="font-medium text-center content-center">Marksman:</label>
                            <input
                                type="text"
                                className="p-2 border rounded dark:bg-black xs:w-full"
                                value={upgrade.maxMarksman}
                                onChange={e => handleUpgradeLevelChangeMarksman(index, e.target.value)}
                            />
                        </div>
                    ))}
                </div>
            }
            <button onClick={addUpgrade} className="p-2 mt-4 border rounded bg-gray-400 dark:bg-black">Add Upgrade</button>
        </div>)
}

const TroopInputSlider: React.FC<TroopInputProps> = ({ label, value, max, onChange }) => {
    const onSliderInput = (e: any) => {
        if (e.target.value >= max) {
            e.target.value = max;
        }
    }

    return (
        <div className="flex flex-col">
            <label htmlFor="troop-input" className="mb-2 font-medium">{label} {value}</label>
            <input type="range" value={value} max={100} onInput={onSliderInput} onChange={e => onChange(parseInt(e.target.value))} />
        </div>
    );
};

enum InputType {
    UpgradeAll = "UpgradeAll",
    TroopAmount = "TroopAmount",
    HoCPoints = "HoCPoints",
};

interface InputManagerProps {
    type: InputType;
    value: string;
    onChange: (type: InputType, value: string) => void;
};
const InputManager: React.FC<InputManagerProps> = ({ type, value, onChange }) => {
    const inputLabels = () => {
        switch (type) {
            case InputType.UpgradeAll:
            case InputType.TroopAmount:
                return ["Number of troops:", "100K"];
            case InputType.HoCPoints:
                return ["HoC Points:", "100M"];
        }
    }
    return (
        <div className="flex flex-col">
            <label htmlFor="input-type" className="mb-2 font-medium">Input Type:</label>
            <select value={type} onChange={e => onChange(e.target.value as InputType, value)} className="p-2 border rounded dark:bg-black">
                <option value={InputType.TroopAmount}>Troop Amount</option>
                <option value={InputType.HoCPoints}>HoC Points</option>
                <option value={InputType.UpgradeAll}>Upgrade All</option>
            </select>

            {type !== InputType.UpgradeAll &&
                <label htmlFor="input-value" className="mb-2 font-medium">{inputLabels()[0]}</label>
            }
            {type !== InputType.UpgradeAll &&
                <input
                    id="input-value"
                    type="text"
                    value={value}
                    onChange={e => onChange(type, e.target.value)}
                    className="p-2 border rounded dark:bg-black"
                    placeholder={"Enter value, example: " + inputLabels()[1]}
                />
            }

        </div>
    );
};

export type { TroopUpgrade, TroopLevelInfo };
export { TroopLevelManager, TroopLevelSelect, TroopInputSlider, InputManager, InputType };
