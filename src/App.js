import "./App.css";
import ClassCounter from "./components/ClassCounter";
import FunctionalCounter from "./components/FunctionalCounter";
import FunctionalCounterWithRefs from "./components/FunctionalCounterWithRefs";
import Triangle from "./components/Triangle";
import Square from "./components/Square";
import Shape from "./components/Shape";

// NAA.
// 1. ClassCounter is a React Class Component.
// 2. FunctionalCounter is a React Functional Component (RFC) (with basic useState hook)
// 3. FunctionalCounterWithRefs (with both useState and useRef hooks)
// 4. Triangle, Square are RFC that violate DRY principles and have duplicated implementation.
// 5. Shape, withTriangleMods, withSquareModes show Higher Order Component (HOC) to address #4.
function App() {
  const getTriangleArea = (base, height) => {
    return 0.5 * base * height;
  };
  const getSquareArea = (side) => {
    return side * side;
  };
  const withTriangleMods = (Shape) => (props) =>
    (
      <Shape
        {...props}
        name={props.name}
        getArea={getTriangleArea(props.base, props.height)}
      />
    );
  const withSquareMods = (Shape) => (props) =>
    <Shape {...props} name={props.name} getArea={getSquareArea(props.side)} />;
  const Triangle2 = withTriangleMods(Shape);
  const Square2 = withSquareMods(Shape);
  return (
    <div>
      <ClassCounter />
      <hr />
      <FunctionalCounter />
      <hr />
      <FunctionalCounterWithRefs />
      <hr />
      <Triangle name="triangle" base="2" height="2" />
      <hr />
      <Square name="square" side="2" />
      <hr />
      <Triangle2 name="triangle 2" base="2" height="2" />
      <hr />
      <Square2 name="square 2" side="2" />
      <hr />
    </div>
  );
}

export default App;
