import React, { useState } from "react";

const Triangle = (props: TriangleProps) => {
    const [area, setArea] = useState(0.0);

    const handleCalculate = () => {
        console.log("getArea: ", getArea(props.base, props.height));
        setArea(getArea(props.base, props.height));
    };

    const handleReset = () => {
        setArea(0.0);
    };

    const getArea: TriangleArea = (base: number, height: number): number => {
        return 0.5 * base * height;
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

export default Triangle;
