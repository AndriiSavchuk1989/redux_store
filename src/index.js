import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";

const initialState = {
  items: [],
  quantity: 0
};

function counter(state = initialState, action) {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        items: [...state.items, action.payload],
        quantity: state.quantity + 1
      };
    case "DELETE":
      const tempArray = [...state.items];
      const filteredArray = tempArray.filter(function(item) {
        if (item !== action.payload) {
          return item;
        }
      });
      return {
        ...state,
        items: [...filteredArray],
        quantity: filteredArray.length
      };
    default:
      return state;
  }
}

let store = createStore(counter);

store.subscribe(() => console.log(store.getState()));

store.dispatch({ type: "INCREMENT", payload: 5 });
store.dispatch({ type: "INCREMENT", payload: 10 });
store.dispatch({ type: "INCREMENT", payload: 100 });
store.dispatch({ type: "INCREMENT", payload: 10000 });
store.dispatch({ type: "DELETE", payload: 10 });
function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
