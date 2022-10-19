import { put, takeEvery } from "redux-saga/effects";
import { PRODUCT_LIST, PRODUCT_SEARCH } from "../constActions/constant";
import { SET_PRODUCT_LIST } from "./../constActions/constant";

function* getProducts() {
  let data = yield fetch("http://localhost:3000/product");
  data = yield data.json();
  console.log(
    "🚀 ~ file: ProductsSaga.js ~ line 8 ~ function*getProducts ~ data",
    data
  );
  yield put({ type: SET_PRODUCT_LIST, state: data });
}

function* searchProducts(data) {
  let result = yield fetch(`http://localhost:3000/product?q=${data.query}`);
  result = yield result.json();
  console.log(
    "🚀 ~ file: ProductsSaga.js ~ line 8 ~ function*getProducts ~ data",
    data
  );

  yield put({ type: SET_PRODUCT_LIST, state: result });
}




function* productSaga() {
  yield takeEvery(PRODUCT_LIST, getProducts);
   yield takeEvery( PRODUCT_SEARCH, searchProducts);
}

export default productSaga;
