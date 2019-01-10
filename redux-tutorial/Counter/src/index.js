import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import Counter from "./components/Counter";
import counter from "./reducers";
import LoggerMiddleware from "./middleware/logger";

const middlewareEnhancer = applyMiddleware(LoggerMiddleware);
//const composedEnhancers = compose(middlewareEnhancer);

const store = createStore(counter, undefined, middlewareEnhancer);
const rootE1 = document.getElementById("root");
const render = () =>
  ReactDOM.render(
    <Counter
      value={store.getState()}
      onIncrement={() => store.dispatch({ type: "INCREMENT" })}
      onDecrement={() => store.dispatch({ type: "DECREMENT" })}
    />,
    rootE1
  );

render();
store.subscribe(render);
