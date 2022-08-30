import { PRODUCT_LIST, SET_PRODUCT_LIST } from "../constActions/constant.js";

export const productList = () => {
  return {
    type: PRODUCT_LIST,
  };
};

// export const setProductList = (data) => {
//   console.log(
//     "🚀 ~ file: ProductAction.js ~ line 11 ~ setProductList ~ data",
//     data
//   );
//   return {
//     type: SET_PRODUCT_LIST,
//     data,
//   };
// };
