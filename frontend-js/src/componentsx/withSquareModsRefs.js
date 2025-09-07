import React from "react";

const withSquareModsRefs = (ShapeWithRefs) => {
  const WrappedComponent = (props) => (
    <ShapeWithRefs
      {...props}
      name={props.name}
      getArea={getSquareArea(props.side)}
    />
  );
  
  WrappedComponent.displayName = `withSquareModsRefs(${ShapeWithRefs.displayName || ShapeWithRefs.name || 'Component'})`;
  
  return WrappedComponent;
};

const getSquareArea = (side) => {
  return side * side;
};

export default withSquareModsRefs;
