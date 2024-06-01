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

function* updatePriceFromBackend(data) {
  console.log("updatePriceFromBackend******");

  // let updatedPrice = {
  //   eggPrice: 200003,
  //   milkPrice: 200003,
  //   paneerPrice: 200003,
  // };
  const requestBody = data.payload;
  const output = yield call(
    axios.post,
    "http://localhost:8083/price/update",
    requestBody
  );
  const formattedData = yield output.json();
  console.log("------------");
  console.log(formattedData);
  yield put(getpricesSuccess(formattedData));
  //   yield put({ type: SET_PRODUCT_LIST, data });
}

function* priceSaga() {
  console.log("******priceSaga***************");
  yield takeEvery("customersListName/getPriceFetch", getPriceFromBackend);
  yield takeEvery("customersListName/udpatePrices", updatePriceFromBackend);
}
export default priceSaga;
