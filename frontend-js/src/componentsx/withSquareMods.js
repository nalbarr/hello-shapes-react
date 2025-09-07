import React from "react";

const withSquareMods = (Shape) => {
  const WrappedComponent = (props) => (
    <Shape {...props} name={props.name} getArea={getSquareArea(props.side)} />
  );
  
  WrappedComponent.displayName = `withSquareMods(${Shape.displayName || Shape.name || 'Component'})`;
  
  return WrappedComponent;
};

const getSquareArea = (side) => {
  return side * side;
};

export default withSquareMods;
