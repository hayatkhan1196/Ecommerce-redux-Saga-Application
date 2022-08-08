import {
  ADD_TO_CART,
  EMPTY_FROM_CART,
  REMOVED_FROM_CART,
} from "../constActions/constant.js";

export const addTcart = (data) => {
  console.log("hello action", data);
  return {
    type: ADD_TO_CART,
    data,
  };
};

export const romovedCart = (data) => {
  console.log("hello action", data);
  return {
    type: REMOVED_FROM_CART,
    data: data,
  };
};
export const EmptyCart = () => {
  return {
    type: EMPTY_FROM_CART,
  };
};
