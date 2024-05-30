import React from 'react';
import ReactSlider from 'react-slider'

import { TroopLevel } from '../utils/troop';

import "../styles/slider.css"

interface TroopLevelProps {
    label: string;
    value: TroopLevel;
    onChange: (value: TroopLevel) => void;
}

interface TroopInputProps {
    label: string;
    value: number;
    max: number;
    onChange: (value: number) => void;
}

const TroopLevelSelect: React.FC<TroopLevelProps> = ({ label, value, onChange }) => {
    return (<div className="flex flex-col">
        <label htmlFor="troop-type" className="mb-2 font-medium">{label}</label>
        <select value={value} onChange={e => onChange(e.target.value as TroopLevel)} className="p-2 border rounded bg-black">
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
            case InputType.TroopAmount:
                return [ "Number of troops:", "100K" ];
            case InputType.HoCPoints:
                return [ "HoC Points:", "100M" ];
        }
    }
    return (
        <div className="flex flex-col">
            <label htmlFor="input-type" className="mb-2 font-medium">Input Type:</label>
            <select value={type} onChange={e => onChange(e.target.value as InputType, value) } className="p-2 border rounded bg-black">
                <option value={InputType.TroopAmount}>Troop Amount</option>
                <option value={InputType.HoCPoints}>HoC Points</option>
            </select>

            <label htmlFor="input-value" className="mb-2 font-medium">{inputLabels()[0]}</label>
            <input
                id="input-value"
                type="text"
                value={value}
                onChange={e => onChange(type, e.target.value)}
                className="p-2 border rounded bg-black"
                placeholder={"Enter value, example: " + inputLabels()[1]}
            />

        </div>
    );
};

export { TroopLevelSelect, TroopInputSlider, InputManager, InputType };
