import React from 'react';
import {useReducer} from 'react';
import './App.css';

// Define the state
interface State {
   count: number 
};

// Define the possible actions that can be dispatched to the reducer
type CounterAction =
  | { type: "reset" }
  | { type: "setCount"; value: State["count"] }


// Initial state of the counter
const initialState: State = { count: 0 };

// Reducer function to handle state changes based on dispatched actions
// The reducer function takes the current state and an action, and returns the new state
function stateReducer(state: State, action: CounterAction): State {
  switch (action.type) {
    case "reset":
      return initialState;
    case "setCount":
      return { ...state, count: action.value };
    default:
      throw new Error("Unknown action");
  }
}

/* Main App component */
export default function App() {
  // useReducer hook to manage the state of the counter
  // It takes the reducer function and the initial state as arguments
  const [state, dispatch] = useReducer(stateReducer, initialState);

  const addFive = () => dispatch({ type: "setCount", value: state.count + 5 });
  const removeThree = () => dispatch({ type: "setCount", value: state.count - 3 });
  const reset = () => dispatch({ type: "reset" });

  return (
    <div>
      <h1>Welcome to my counter</h1>

      <p>Count: {state.count}</p>
      <button onClick={addFive}>Add 5</button>
      <button onClick={removeThree}>Remove 3</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}