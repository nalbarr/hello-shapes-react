import React from "react";

const withTriangleMods = (Shape) => {
  const WrappedComponent = (props) => (
    <Shape
      {...props}
      name={props.name}
      getArea={getTriangleArea(props.base, props.height)}
    />
  );
  
  WrappedComponent.displayName = `withTriangleMods(${Shape.displayName || Shape.name || 'Component'})`;
  
  return WrappedComponent;
};

const getTriangleArea = (base, height) => {
  return 0.5 * base * height;
};

export default withTriangleMods;
