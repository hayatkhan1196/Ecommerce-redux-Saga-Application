import {
  ADD_TO_CART,
  EMPTY_FROM_CART,
  REMOVED_FROM_CART,
} from "../constActions/constant";

export const cartReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      console.log("ADD_TO_CART", action);

      return [action.data, ...state];

    case REMOVED_FROM_CART:
      // state.length = state.length ? state.length - 1 : [];
      const filterData = state.filter((item) => item?.id !== action.data);

      return [filterData];

    case EMPTY_FROM_CART:
      state = [];
      return [...state];
    default:
      return state;
  }
};
