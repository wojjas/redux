import React from "react";
import { connect } from "react-redux";
import {
  incrementCounter,
  decrementCounter,
  resetCounter
} from "../actions/control";

// Default, not passing mapDispatchToProps to connect()
// const Control = ({ dispatch }) => {
//   return (
//     <React.Fragment>
//       <button onClick={() => dispatch(incrementCounter())}>+</button>
//       <button onClick={() => dispatch(decrementCounter())}>-</button>
//     </React.Fragment>
//   );
// };

// NB remove resetCounter from here and see what
const Control = ({ incrementCounter, decrementCounter, resetCounter }) => {
  return (
    <React.Fragment>
      <button onClick={incrementCounter}>+</button>
      <button onClick={resetCounter}>=</button>
      <button onClick={decrementCounter}>-</button>
    </React.Fragment>
  );
};

// Passing an object
const mapDispatchToProps = {
  incrementCounter,
  decrementCounter,
  resetCounter
};

export default connect(
  null,
  mapDispatchToProps
)(Control);
