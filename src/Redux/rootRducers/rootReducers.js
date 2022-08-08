import { combineReducers } from "redux";
import { cartReducer } from "../Reducers/reducer";

export default combineReducers({
  cartReducer: cartReducer,
});
