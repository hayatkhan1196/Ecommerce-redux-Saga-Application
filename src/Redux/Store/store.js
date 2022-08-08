import React from "react";
import { createStore } from "redux";
import rootReducer from "../rootRducers/rootReducers";

const store = createStore(rootReducer);

export default store;
