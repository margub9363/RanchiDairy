import { takeEvery, put, call } from "redux-saga/effects";
import { getPriceFetch, getpricesSuccess } from ".";
import axios from "axios";
// import { ADD_TO_CART, PRODUCT_LIST, SET_PRODUCT_LIST } from "./constant";

function* getPriceFromBackend(payload) {
  console.log("getPriceFromBackend******");
  const jwtToken = payload.payload;
  console.log(jwtToken);
  // const data = yield call(() => fetch("http://localhost:8083/price/getPrices"));
  // const formattedData = yield data.json();
  const fetchPrice = async (jwtToken) => {
    const response = await axios.get(
      `http://localhost:8083/price/getPrices`,
      // payload.payload,
      {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  };
  const prices = yield call(fetchPrice, jwtToken);
  yield put(getpricesSuccess(prices));
  // yield put(getpricesSuccess(formattedData));
  //   yield put({ type: SET_PRODUCT_LIST, data });
}

function* updatePriceviaBackend(data) {
  console.log("updatePriceviaBackend******");

  const requestBody = data.payload;
  const output = yield call(
    axios.post,
    "http://localhost:8083/price/update",
    requestBody
  );
  console.log("------------");
  yield put(getPriceFetch());
}

function* priceSaga() {
  console.log("******priceSaga***************");
  yield takeEvery("customersListName/getPriceFetch", getPriceFromBackend);
  yield takeEvery("customersListName/udpatePrices", updatePriceviaBackend);
}
export default priceSaga;
