import { combineReducers } from "redux";
import { cartReducer } from "../Reducers/reducer";
import { ProductReducer } from "../Reducers/ProductReducers";

export default combineReducers({
  cartReducer: cartReducer,
  ProductReducer: ProductReducer,
});
