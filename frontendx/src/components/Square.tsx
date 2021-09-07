import React, { useState } from "react";

const Square = (props: SquareProps) => {
    const [area, setArea] = useState(0.0);

    const handleCalculate = () => {
        setArea(getArea(props.side));
    };

    const handleReset = () => {
        setArea(0.0);
    };

    const getArea: SquareArea = (side: number): number => {
        return side * side;
    };

    return (
        <div>
            Shape: {props.name}
            <br />
            Area: {area}
            <button onClick={handleCalculate}>Calculate Area</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    );
};

export default Square;