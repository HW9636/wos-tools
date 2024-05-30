import React from 'react';

const parseReadableNumber = (value: string): number => {
    console.log("ParseNumber: ", value);
    let suffix = 1;
    if (value.endsWith('K') || value.endsWith('k')) {
        suffix = 1e3;
        value = value.slice(0, -1);
    }
    else if (value.endsWith('M') || value.endsWith('m')) {
        suffix = 1e6;
        value = value.slice(0, -1);
    }
    else if (value.endsWith('B') || value.endsWith('b')) {
        suffix = 1e9;
        value = value.slice(0, -1);
    }
    else if (value.endsWith('T') || value.endsWith('t')) {
        suffix = 1e12;
        value = value.slice(0, -1);
    }

    return parseFloat(value) * suffix;
}

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

export { parseReadableNumber, ReadableNumber };
