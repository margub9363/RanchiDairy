import { takeEvery, put, call } from "redux-saga/effects";
import { getpricesSuccess } from ".";
import axios from "axios";
// import { ADD_TO_CART, PRODUCT_LIST, SET_PRODUCT_LIST } from "./constant";

function* getPriceFromBackend() {
  console.log("getPriceFromBackend******");
  const data = yield call(() => fetch("http://localhost:8083/price/getPrices"));
  const formattedData = yield data.json();
  console.log("------------");
  console.log(formattedData);
  yield put(getpricesSuccess(formattedData));
  //   yield put({ type: SET_PRODUCT_LIST, data });
}

function* updatePriceviaBackend(data) {
  console.log("updatePriceFromBackend******");

  const requestBody = data.payload;
  const output = yield call(
    axios.post,
    "http://localhost:8083/price/update",
    requestBody
  );
  console.log("------------");
  yield put(getPriceFromBackend);
}

function* priceSaga() {
  console.log("******priceSaga***************");
  yield takeEvery("customersListName/getPriceFetch", getPriceFromBackend);
  yield takeEvery("customersListName/udpatePrices", updatePriceviaBackend);
}
export default priceSaga;
