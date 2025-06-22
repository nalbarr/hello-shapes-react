import "./App.css";
import {
  ClassCounter,
  FunctionalCounter,
  Triangle,
  Square
} from "./components";
// import {
//   Triangle,
// } from "./componentsx";

// NAA.
// 1. ClassCounter is a React Class Component.
// 2. FunctionalCounter is a React Functional Component (RFC) (with basic useState hook)
// 3. FunctionalCounterWithRefs (with both useState and useRef hooks)
// 4. Triangle, Square are RFC that violate DRY principles and have duplicated implementation.
// 5. Shape, withTriangleMods, withSquareModes show Higher Order Component (HOC) to address #4.
// 6. HOC with forward refs.
const App = () => {
  return (
    <div>
      <p id="paragraph1">
        I am a paragraph element.
      </p>
      <ClassCounter message="foo" />
      <FunctionalCounter />
      <hr />
      {/* NA.  NOTE: forcing parameter types. */}
      <Triangle name="triangle" base={2} height={2} />
      <Square name="square" side={2} />
    </div>
  );

};

export default App;
