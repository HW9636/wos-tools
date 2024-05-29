import React from 'react';
import ReactSlider from 'react-slider'

import "../styles/slider.css"

interface TroopInputProps {
    label: string;
    value: number;
    max: number;
    onChange: (value: number) => void;
}

const TroopInputSlider: React.FC<TroopInputProps> = ({ label, value, max, onChange }) => {
    // The track will respond to the value of the slider, showing the user how much they are selecting.
    return (
        <div className="flex flex-col">
            <label htmlFor="troop-input" className="mb-2 font-medium">{label}</label>
            <ReactSlider
                className="horizontal-slider"
                trackClassName="example-track"
                thumbClassName="example-thumb"
                value={value}
                onChange={onChange}
                max={max}
            />
        </div>
    );
};

export default TroopInputSlider;
