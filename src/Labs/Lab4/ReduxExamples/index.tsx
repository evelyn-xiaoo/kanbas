import React from "react";
import { Provider } from "react-redux";
import store from "../../store";
import HelloRedux from "./HelloRedux";
import CounterRedux from "./CounterRedux";
import AddRedux from "./AddRedux"

export default function ReduxExamples() {

  return(
    <div>
      <h2>Redux Examples</h2>
      <Provider store={store}>
        <HelloRedux/>
        <CounterRedux/>
        <AddRedux/>
      </Provider>
    </div>
  );
};
