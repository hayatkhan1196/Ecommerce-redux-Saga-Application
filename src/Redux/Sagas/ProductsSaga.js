import { put, takeEvery } from "redux-saga/effects";
import { PRODUCT_LIST } from "../constActions/constant";
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

function* productSaga() {
  yield takeEvery(PRODUCT_LIST, getProducts);
}

export default productSaga;
