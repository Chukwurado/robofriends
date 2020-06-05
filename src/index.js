import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import { Provider } from "react-redux";
// import {createLogger} from 'redux-logger'
import thunkMiddleware from "redux-thunk";

import "./index.css";
import App from "./containers/App";
import * as serviceWorker from "./serviceWorker";
import "tachyons";
import { searchRobots, requestRobots } from "./reducers";

// const logger = createLogger()
// const store = createStore(searchRobots, applyMiddleware(logger));
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = [thunkMiddleware];

const rootReducer = combineReducers({ searchRobots, requestRobots });
const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(...middleware))
);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
