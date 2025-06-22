import React, { useState } from "react";

type GetArea = () => number;

type ShapeProps = {
    name: string,
    getArea: GetArea,
}

// const Shape = ({ name: string, getArea: GetArea }) => {
const Shape = (props: ShapeProps) => {
    const [area, setArea] = useState(0.0);

    const handleCalculate = () => {
        console.log("getArea: ", props.getArea);
        setArea(props.getArea);
    };

    const handleReset = () => {
        setArea(0.0);
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

export default Shape;
