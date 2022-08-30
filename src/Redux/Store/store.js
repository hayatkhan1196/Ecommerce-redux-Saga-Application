import React from "react";
// import { createStore } from "redux";
import {configureStore} from "@reduxjs/toolkit"
import rootReducer from "../rootRducers/rootReducers";
import productSaga from "../Sagas/ProductsSaga";
import createSagaMiddleware from "redux-saga"

let SagaMiddleware = createSagaMiddleware();
const store = configureStore({
    reducer: rootReducer,
    middleware:()=>[SagaMiddleware]
});
SagaMiddleware.run(productSaga);
export default store;
