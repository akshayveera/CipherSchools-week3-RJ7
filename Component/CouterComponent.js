import React, { useReducer } from "react";
import ChildComponent from "./ChildComponent";
import higherOrderComponent from "../HOC";
import LOC from "./LOC";
import { AnupamaContext } from "../App";

const [INCREMENT, DECREMENT] = ["INCREMENT", "DECREMENT"];

const counterReducer = (state, action) => {
  switch (action.type) {
    case INCREMENT:
      if (state.count + action.payload >= 4) {
        throw new Error("Cannot increment more than 3");
      }
      return { ...state, count: state.count + action.payload };
    case DECREMENT:
      return { ...state, count: state.count - action.payload };
    default:
      return state;
  }
};

const Counter = () => {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  const LowerOrder = higherOrderComponent(
    () => console.log("LOC in COunter"),
    LOC
  );

  return (
    <>
      <h1>The count is: {state.count}</h1>
      <button onClick={(e) => dispatch({ type: INCREMENT, payload: 2 })}>
        Increase
      </button>
      <button onClick={(e) => dispatch({ type: DECREMENT, payload: 2 })}>
        Decrease
      </button>
      <LowerOrder />
      <ChildComponent />;
    </>
  );
};

export default Counter;
