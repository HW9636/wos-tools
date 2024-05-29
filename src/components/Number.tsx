import React from 'react';

const ReadableNumber: React.FC<{ value: number }> = ({ value }) => {
    let opt = "";
    if (value > 1e9) {
        opt = "(" + (value / 1e9).toFixed(2) + "B)";
    }
    else if (value > 1e6) {
        opt = "(" + (value / 1e6).toFixed(2) + "M)";
    }
    else if (value > 1e3) {
        opt = "(" + (value / 1e3).toFixed(2) + "K)";
    }

    return <span>{value.toLocaleString()} {opt}</span>;
}

export { ReadableNumber };
