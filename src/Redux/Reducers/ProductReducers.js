import { SET_PRODUCT_LIST } from "../constActions/constant";

export const ProductReducer = (state = [], action) => {
  switch (action.type) {
    case SET_PRODUCT_LIST:
      console.log("SET_PRODUCT_LIST", action);

      return [...action.state];

    default:
      return state;
  }
};
