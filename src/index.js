import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App/App";
import registerServiceWorker from "./registerServiceWorker";
// appears to be a duplicate of above
//import * as serviceWorker from "./serviceWorker";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import logger from "redux-logger";

const thisFeedback = (state = {}, action) => {
  console.log(`in thisFeedback reducer`);
  if (action.type === "LOG_A_SMILEY") {
    console.log(`:-)`);
  }
  if (action.type === "UPDATE_FEELING") {
    return { ...state, feeling: action.payload };
  }
  if (action.type === "UPDATE_UNDERSTANDING") {
    return { ...state, understanding: action.payload };
  }
  if (action.type === "UPDATE_SUPPORTED") {
    return { ...state, supported: action.payload };
  }
  if (action.type === "UPDATE_COMMENTS") {
    return { ...state, comments: action.payload };
  }
  return state;
};

// Create the Redux store - place to keep our shared data
// All reducers run each time an action is dispatched
const storeInstance = createStore(
  combineReducers({
    thisFeedback,
  }),
  applyMiddleware(logger)
);

// Use the Provider to share the Redux store with the App
ReactDOM.render(
  <Provider store={storeInstance}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
registerServiceWorker();
